import mongoose , {Schema} from "mongoose";

const ExpenseSchema = new Schema({
    title:{
        type:String,
        required: true,
        trim:true,
        maxLength: 20
    }, 
    amount:{
        type:Number,
        required: true,
        trim:true,
        maxLength: 20,

    },
    type:{
        type:String,
        default:"expense"
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

// export const Expense =  mongoose.model("Income",ExpenseSchema )
const Expense =  mongoose.model("Expense",ExpenseSchema );
export default Expense;