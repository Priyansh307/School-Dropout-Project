import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
import { School } from "../models/user.js";
import jwt from "jsonwebtoken";
import { Student } from "../models/user.js";

router.post("/signup", async (req, res) => {
  const {
    username,
    email,
    password,
    state,
    schoolCategory,
    district,
    statecode,
    isGovernment,
    isDistrict,
    isSchool,
  } = req.body;

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
      isSchool: true,
    });

    // Save user to database
    const school = newUser.isSchool;
    await newUser.save();
    const token = jwt.sign({ username: newUser.username }, process.env.KEY, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });

    return res.json({
      status: true,
      message: "login successfully",
      school: school,
    });
    // return res.status(201).json({ message: "Record registered" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error processing request" });
  }
});

router.post("/dissignup", async (req, res) => {
  const {
    username,
    email,
    password,
    state,
    schoolCategory,
    district,
    statecode,
    isGovernment,
    isDistrict,
    isSchool,
  } = req.body;

  try {
    // Check if user already exists
    console.log("4");

    const user = await School.findOne({ username });

    if (user) {
      console.log("7");

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
      isDistrict: true,
    });
    // Save user to database
    console.log("5");

    await newUser.save();
    const token = jwt.sign({ username: newUser.username }, process.env.KEY, {
      expiresIn: "1h",
    });
    const isthisdistrict = newUser.isDistrict;
    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });

    return res.json({
      status: true,
      message: "login successfully",
      isthisdistrict: isthisdistrict,
    });
    // return res.status(201).json({ message: "Record registered" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error processing request" });
  }
});

router.post("/govsignup", async (req, res) => {
  const {
    username,
    email,
    password,
    state,
    schoolCategory,
    district,
    statecode,
    isGovernment,
    isDistrict,
    isSchool,
  } = req.body;

  try {
    // Check if user already exists
    const user = await School.findOne({ username });

    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Define state code mapping
    const stateCodeMapping = {
      "Andhra Pradesh": "AP",
      "Arunachal Pradesh": "AR",
      Assam: "AS",
      Bihar: "BR",
      Chhattisgarh: "CG",
      Goa: "GA",
      Gujarat: "GJ",
      Haryana: "HR",
      "Himachal Pradesh": "HP",
      Jharkhand: "JH",
      Karnataka: "KA",
      Kerala: "KL",
      "Madhya Pradesh": "MP",
      Maharashtra: "MH",
      Manipur: "MN",
      Meghalaya: "ML",
      Mizoram: "MZ",
      Nagaland: "NL",
      Odisha: "OD",
      Punjab: "PB",
      Rajasthan: "RJ",
      Sikkim: "SK",
      "Tamil Nadu": "TN",
      Telangana: "TS",
      Tripura: "TR",
      "Uttar Pradesh": "UP",
      Uttarakhand: "UK",
      "West Bengal": "WB",
      Delhi: "DL",
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
      isGovernment: true,
    });

    // Save user to database
    await newUser.save();
    const token = jwt.sign({ username: newUser.username }, process.env.KEY, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });

    return res.json({ status: true, message: "login successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error processing request" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await School.findOne({ username });
  if (!user) {
    return res.json({ message: "User is not registered" });
  }
  const Government = user.isGovernment;
  const school = user.isSchool;
  const district = user.isDistrict;
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.json({ message: "password is incorrect" });
  }

  const token = jwt.sign({ username: user.username }, process.env.KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
  return res.json({
    status: true,
    message: "login successfully",
    Government: Government,
    school: school,
    district: district,
  });
});

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({ status: false, message: "no token" });
    }
    const decoded = await jwt.verify(token, process.env.KEY);
    const user = await School.findOne({ username: decoded.username });
    if (!user) {
      return res.json({ message: "User is not registered" });
    }

    // Set user data on the request for future use
    req.user = user;

    // Call next() to proceed with the request
    next();
  } catch (err) {
    console.error(err);
    return res.status(403).json({ status: false, message: "Invalid token" });
  }
};

router.get("/verify", verifyUser, (req, res) => {
  return res.json({ status: true, message: "authorized" });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true, message: "logged out" });
});

router.post("/submit-form", async (req, res) => {
  try {
    // Fetch the current user's data
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({ status: false, message: "no token" });
    }
    const decoded = await jwt.verify(token, process.env.KEY);
    const user = await School.findOne({ username: decoded.username });
    if (!user) {
      return res.json({ message: "User is not registered" });
    }

    // Create the student object with the current user's data
    const student = new Student({
      ...req.body,
      user: user._id,
      mystate: user.state,
      // Assuming user._id is the unique identifier for the current user
    });

    // Save the student data to the database
    await student.save();

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/students", verifyUser, async (req, res) => {
  try {
    // Get user data from the request
    const user = req.user;

    // Find students added by the current user
    const students = await Student.find({ user: user._id });

    return res.json({ status: true, students });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error processing request" });
  }
});

router.get("/diststudents", verifyUser, async (req, res) => {
  try {
    // Get user data from the request
    const user = req.user;

    // Find students where city matches the user's district (case-insensitive)
    const students = await Student.find({
      city: {
        $regex: new RegExp(user.district, "i"), // Use 'i' flag for case-insensitivity
      },
    }).populate("user", "username");

    return res.json({ status: true, students });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error processing request" });
  }
});

router.get("/totalstudents", async (req, res) => {
  try {
    // Find the count of total students
    const totalStudents = await Student.countDocuments();
    const user = req.user;
    // Return the total number of students as JSON response
    res.json({ totalStudents });
  } catch (error) {
    // If an error occurs, send a 500 status response with an error message
    console.error(error);
    res.status(500).json({ message: "Error fetching total students" });
  }
});

router.get("/age-wise-student-counts", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({ status: false, message: "no token" });
    }
    const decoded = await jwt.verify(token, process.env.KEY);
    const user = await School.findOne({ username: decoded.username });
    //   const user = req.user;
    const userDistrict = user.district;

    const age0to5 = await Student.countDocuments({
      city: {
        $regex: new RegExp(userDistrict, "i"),
      },
      age: { $gte: 1, $lte: 5 },
    });
    const age6to10 = await Student.countDocuments({
      city: {
        $regex: new RegExp(userDistrict, "i"),
      },
      age: { $gte: 6, $lte: 10 },
    });
    const age11to15 = await Student.countDocuments({
      city: {
        $regex: new RegExp(userDistrict, "i"),
      },
      age: { $gte: 11, $lte: 15 },
    });
    const age16to20 = await Student.countDocuments({
      city: {
        $regex: new RegExp(userDistrict, "i"),
      },
      age: { $gte: 16, $lte: 20 },
    });

    return res.json({ status: true, age0to5, age6to10, age11to15, age16to20 });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error processing request" });
  }
});

router.get("/dis-gender", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({ status: false, message: "no token" });
    }
    const decoded = await jwt.verify(token, process.env.KEY);
    const user = await School.findOne({ username: decoded.username });
    //   const user = req.user;
    const userDistrict = user.district;

    const male = await Student.countDocuments({
      city: {
        $regex: new RegExp(userDistrict, "i"),
      },
      gender: "male",
    });
    const female = await Student.countDocuments({
      city: {
        $regex: new RegExp(userDistrict, "i"),
      },
      gender: "female",
    });

    return res.json({ status: true, male, female });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error processing request" });
  }
});

router.get("/income-wise-student-counts", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({ status: false, message: "no token" });
    }
    const decoded = jwt.verify(token, process.env.KEY);
    const user = await School.findOne({ username: decoded.username });
    const userDistrict = user.district;

    const countRange0to10000 = await Student.countDocuments({
      city: {
        $regex: new RegExp(userDistrict, "i"),
      },
      income: {
        $lte: 10000,
      },
    });

    const countRange10001to50000 = await Student.countDocuments({
      city: {
        $regex: new RegExp(userDistrict, "i"),
      },
      income: {
        $gte: 10001,
        $lte: 50000,
      },
    });

    const countRange50001to100000 = await Student.countDocuments({
      city: {
        $regex: new RegExp(userDistrict, "i"),
      },
      income: {
        $gte: 50001,
        $lte: 100000,
      },
    });

    const countRange100000above = await Student.countDocuments({
      city: {
        $regex: new RegExp(userDistrict, "i"),
      },
      income: {
        $gte: 100000,
      },
    });

    return res.json({
      status: true,
      countRange0to10000,
      countRange10001to50000,
      countRange50001to100000,
      countRange100000above,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error processing request" });
  }
});

// Backend code
// Backend code
router.get('/school-wise-dropout-statistics', async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({ status: false, message: "no token" });
    }
    const decoded = jwt.verify(token, process.env.KEY);
    const user = await School.findOne({ username: decoded.username });
    const userDistrict = user.district;

    const schools = await School.find({ isSchool: true });

    const schoolStatistics = await Promise.all(schools.map(async (school) => {
      const totalStudents = await Student.countDocuments({
        user: school._id,
        city: {
          $regex: new RegExp(userDistrict, "i"),
        },
      });
      const totalMaleDropout = await Student.countDocuments({
        user: school._id,
        gender: "male",
        city: {
          $regex: new RegExp(userDistrict, "i"),
        },
      });
      const totalFemaleDropout = await Student.countDocuments({
        user: school._id,
        gender: "female",
        city: {
          $regex: new RegExp(userDistrict, "i"),
        },
      });
      const totalDropoutStudents = await Student.countDocuments({
        user: school._id,
        city: {
          $regex: new RegExp(userDistrict, "i"),
        },
      });
      const dropoutRatio = (totalDropoutStudents / totalStudents) * 100;

      // Filter out schools with all zero values
      if (totalStudents === 0 && totalMaleDropout === 0 && totalFemaleDropout === 0 && totalDropoutStudents === 0) {
        return null;
      }

      return {
        _id: school._id,
        name: school.username,
        totalStudents,
        totalMaleDropout,
        totalFemaleDropout,
        totalDropoutStudents,
        dropoutRatio: `${dropoutRatio.toFixed(2)}%`,
      };
    }));

    // Filter out null values
    const filteredSchoolStatistics = schoolStatistics.filter(stat => stat !== null);

    return res.json({ schoolStatistics: filteredSchoolStatistics });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error processing request" });
  }
});




export { router as SchoolRouter };
