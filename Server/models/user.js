import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: false,
  },
  password: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: false,
  },
  schoolCategory: {
    type: String,
    enum: ["Private", "Government", "SemiGovernment"],
    required: false,
  },
  district: {
    type: String,
    required: false,
  },
  statecode: {
    type: String,
    required: false,
  },
  isGovernment: {
    type: Boolean,
    default: false,
  },
  isDistrict: {
    type: Boolean,
    default: false,
  },
  isSchool: {
    type: Boolean,
    default: false,
  },
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  // Add the new fields
  caste: { type: String, required: true },
  s_category: { type: String, required: true },
  Distance: { type: Number, required: true },
  area: { type: String, required: true },
  city: { type: String, required: true },
  income: { type: Number, required: true },
  foccupation: { type: String, required: true },
  mystate: { type: String, required: true },
  studentstd: { type: String, required: true },
  stdrollno: { type: Number, required: true },
  address: { type: String, required: true }, // New field
  mobileNo: { type: Number, required: true }, // New field
  adhaarNo: { type: Number, required: true }, // New field
  schoolFees: { type: Number, required: true }, // New field
  motherOccupation: { type: String, required: true }, // New field
  emailId: { type: String, required: true }, // New field
  skill: { type: String, required: true }, // New field
  birthDate: { type: Date, required: true }, // New field
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
});





  

schoolSchema.index({ email: 1 }, { unique: false });
const schoolModel = mongoose.model("School", schoolSchema);

const Student = mongoose.model('Student', studentSchema);

export { Student };
export { schoolModel as School };
