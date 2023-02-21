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
      required: false //set this to true after creation of content
    },
    courseOutline: {
      type: String,
      required: false,//set this to true after creation of content
    },
    curriculumContent: {
      type:String,
      required: false, //set this to true after creation of content
    },
    curriculumVids: { 
      type:String,
      required: false,
    },

    completedContent: {
      type: Boolean,
      required: false,
    },
  
    taskStatus : {
      type: Number,
      default: 0,
      required: false,
    }, 

    courseNo: {
      type: Number, 
      default: 0,
      require: false,
    },

    score: {
      type: Number,
      default: 0,
      require: false,
    }

    //have a module for completing a course
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('users', userModel)
export default User
