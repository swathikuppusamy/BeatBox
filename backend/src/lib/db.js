import mongoose from 'mongoose'

export const connectdb =async()=>{
    try{
        const con=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB ${con.connection.host}`)

    }catch(error){
        console.log("Failed to connect to Mongodb",error);
        process.exit(1)
    }
}