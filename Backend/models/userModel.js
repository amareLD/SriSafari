import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// const userScema = new mongoose.Schema({
//   name:{
//     type:String,
//     required:true,
//   },
//   email:{
//     type: String,
//     required:true,
//     unique:true,
//   },
//   password:{
//     type:String,
//     required:true,

//   },
// isAdmin:{
//     type:Boolean,
//     required:true,
//     default:false,

//   },
//   isTraveller:{
//     type:Boolean,
//     required:true,
//     default:false,

//   },
//   isBusiness:{
//     type:Boolean,
//     required:true,
//     default:false,

//   },
// })

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      enum: ['traveller', 'business', 'admin'],
      default: 'traveller',
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Additional fields based on user roles
// Traveller specific fields
//   travelPlans: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'TravelPlan'
//   }],
//   bookedHotels: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Hotel'
//   }],
//   // Business user specific fields
//   ownHotels: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Hotel'
//   }],
//   ownPlaces: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Place'
//   }],
//   // Admin specific fields (if needed)
// }, {

// Create the User model
userSchema.methods.matchPassword = async function (enterdPassword) {
  return await bcrypt.compare(enterdPassword, this.password);
};
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

//module.exports = User;
export default User;
