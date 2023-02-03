import mongoose from 'mongoose'
const userModel = mongoose.Schema(
  {
    registered_by: {
      type: String,
      //required: true,
     // ref: 'Admin',
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    companyName: {
      type:String,
      required:true,
      default: "Logo Here"
    },
    user_id: {
      type:Number, 
    },    
    role:{
      type: String,
      required: true,
      default:"moderator"
    },
    department:{
      type:String,
      required:true,
      default: "Finance"
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isModerator: {
      type: Boolean,
      required: true,
      default: false,
    },


    courseName: {
      type: String,
      required: true
    },
    courseOutline: {
      type: String,
      required: true,
    },
    curriculumContent: {
      type:String,
      required: true,
    },
    curriculumVids: { 
      type:String,
      required: false,
    },

    //have a module for completing a course
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('users', userModel)
export default User
