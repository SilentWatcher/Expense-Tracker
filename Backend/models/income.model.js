import mongoose , {Schema} from "mongoose";

const IncomeSchema = new Schema({
    title:{
        type:String,
        required: true,
        trim:true,
        maxLength: 20
    }, 
    amount:{
        type:String,
        required: true,
        trim:true,
        maxLength: 20,

    },
    type:{
        type:String,
        default:"income"
    },
    date:{
        type:Date,
        required:true,
        maxLength:20,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim: true
    }, 
    description:{
        type:String,
        required:true,
        maxLength:50,
        trim: true
    }
}, {timestamps:true})

// timestamps :
// 1st created At 
// 2nd updated At

// export const Income =  mongoose.model("Income",IncomeSchema )
const Income =  mongoose.model("Income",IncomeSchema );
export default Income;