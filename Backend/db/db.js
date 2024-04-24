import mongoose from "mongoose";

const connectDB  = async ()=>{
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected")
        
    }catch(error){
        console.log("DB not Connected ", error);
        // throw error
    }
}

export default connectDB;
