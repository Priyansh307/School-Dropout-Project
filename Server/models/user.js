import mongoose from 'mongoose';


const schoolSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: false,
        unique:false
        
    },
    password: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: false
    },
    schoolCategory: {
        type: String,
        enum: ['Private', 'Government', 'SemiGovernment'],
        required: false
    },
    district: {
        type: String,
        required: false
    },
    statecode: {
        type: String,
        required: false
    },
    isGovernment: {
        type: Boolean,
        default: false
    },
    isDistrict: {
        type: Boolean,
        default: false
    },
    isSchool: {
        type: Boolean,
        default: false
    }
    
});

schoolSchema.index({ email: 1 }, { unique: false });
const schoolModel = mongoose.model('School', schoolSchema);

export { schoolModel as School}
