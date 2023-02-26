import mongoose, { trusted } from 'mongoose'


const examModel = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
        default: "test"
      },

      lastName: {
        type: String,
        default: "test",
      },
     
      score: {
        type: Number,
        default: 0,
      },
     
    },
    {
      timestamps: true,
    }
  );
  
  const Exam = mongoose.model('exam', examModel);
 
  
  export default Exam;