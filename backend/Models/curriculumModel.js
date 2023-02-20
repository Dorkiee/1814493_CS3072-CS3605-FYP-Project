
import mongoose from 'mongoose'
const curriculumModel = mongoose.Schema(
  {
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

	completedContent: {
		type: Boolean,
		required: false,
	},

	taskStatus : {
		type: Number,
		default: 0,
		required: false,
	}, 

  },
  {
    timestamps: true,
  }
)

const Curriculum = mongoose.model('enrolled', curriculumModel)
export default Curriculum
