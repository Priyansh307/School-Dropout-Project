import express from 'express'
import bcrypt from 'bcrypt'
const router = express.Router()
import { School } from '../models/user.js'
import jwt from 'jsonwebtoken'

router.post('/signup', async (req, res) => {
    const { username, email, password, state, schoolCategory, district,statecode, isGovernment ,isDistrict,isSchool } = req.body;

    try {
        // Check if user already exists
        const user = await School.findOne({ username });

        if (user) {
            return res.status(409).json({ message: "User already exists" });
        }
        // Hash password
        const hashpassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new School({
            username,
            email,
            password: hashpassword,
            state,
            schoolCategory,
            district,
            isSchool:true,
        });

        // Save user to database
        const school = newUser.isSchool;
        await newUser.save();
        const token = jwt.sign({ username: newUser.username }, process.env.KEY, { expiresIn: '1h' })
        res.cookie('token', token, { httpOnly: true, maxAge: 360000 })

        return res.json({ status: true, message: "login successfully" ,school :school})
        // return res.status(201).json({ message: "Record registered" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error processing request" });
    }
});


router.post('/dissignup', async (req, res) => {
    const { username, email, password, state, schoolCategory, district,statecode, isGovernment ,isDistrict,isSchool } = req.body;

    try {
        // Check if user already exists
        const user = await School.findOne({ username });

        if (user) {
            return res.status(409).json({ message: "User already exists" });
        }
        // Hash password
        const hashpassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new School({
            username,
            email,
            password: hashpassword,
            state,
            schoolCategory,
            district,
            isDistrict:true,
        });
        // Save user to database
        await newUser.save();
        const token = jwt.sign({ username: newUser.username }, process.env.KEY, { expiresIn: '1h' })
        const isthisdistrict = newUser.isDistrict;
        res.cookie('token', token, { httpOnly: true, maxAge: 360000 })

        return res.json({ status: true, message: "login successfully" ,isthisdistrict:isthisdistrict})
        // return res.status(201).json({ message: "Record registered" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error processing request" });
    }
});


router.post('/govsignup', async (req, res) => {
    const { username, email, password, state, schoolCategory, district,statecode, isGovernment ,isDistrict,isSchool} = req.body;

    try {
        // Check if user already exists
        const user = await School.findOne({ username });

        if (user) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Define state code mapping
        const stateCodeMapping = {
            'Andhra Pradesh': 'AP', 'Arunachal Pradesh': 'AR', 'Assam': 'AS', 'Bihar': 'BR',
            'Chhattisgarh': 'CG', 'Goa': 'GA', 'Gujarat': "GJ", 'Haryana': 'HR',
            'Himachal Pradesh': 'HP', 'Jharkhand': 'JH', 'Karnataka': 'KA', 'Kerala': 'KL',
            'Madhya Pradesh': 'MP', 'Maharashtra': 'MH', 'Manipur': 'MN', 'Meghalaya': 'ML',
            'Mizoram': 'MZ', 'Nagaland': 'NL', 'Odisha': 'OD', 'Punjab': 'PB', 'Rajasthan': 'RJ',
            'Sikkim': 'SK', 'Tamil Nadu': 'TN', 'Telangana': 'TS', 'Tripura': 'TR',
            'Uttar Pradesh': 'UP', 'Uttarakhand': 'UK', 'West Bengal': 'WB', 'Delhi': 'DL'
        };
        // console.log(statecode);
        // Check if state code matches
        if (stateCodeMapping[state] !== statecode) {
            
            return res.status(400).json({ message: "Invalid state code" });
        }
        
        // Hash password
        const hashpassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new School({
            username,
            email,
            password: hashpassword,
            state,
            statecode,
            isGovernment:true,
            

        });

        // Save user to database
        await newUser.save();
        const token = jwt.sign({ username: newUser.username }, process.env.KEY, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, maxAge: 360000 });

        return res.json({ status: true, message: "login successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error processing request" });
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await School.findOne({ username });
    if (!user) {
        return res.json({ message: "User is not registered" })
    }
    const Government = user.isGovernment;
    const school = user.isSchool;
    const district = user.isDistrict;
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
        return res.json({ message: "password is incorrect" })
    }

    const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '1h' })
    res.cookie('token', token, { httpOnly: true, maxAge: 360000 })
    return res.json({ status: true, message: "login successfully",Government :Government,school:school ,district:district })

})

const verifyUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(403).json({ status: false, message: "no token" })
        }
        const decoded = await jwt.verify(token, process.env.KEY);
        const user = await School.findOne({ username: decoded.username });
        if (!user) {
            return res.json({ message: "User is not registered" })
        }

        const Government = user.isGovernment;
        const school = user.isSchool;
        const district = user.isDistrict;


    }
    catch (err) {
        return res.status(403).json({ status: false, message: "Invalid token" })
    }
}
router.get('/verify', verifyUser, (req, res) => {

    return res.json({ status: true, message: "authorized" })
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({ status: true, message: "logged out" })
})
export { router as SchoolRouter }
