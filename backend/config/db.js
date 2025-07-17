// import mongoose  from "mongoose";





// export const connectDB = async () => {
//       await mongoose.connect('mongodb+srv://vishakhakp09:vishakha123@cluster0.sbwmy7s.mongodb.net/Taskflow')
//       .then (() => console.log('DB CONNECTED'));
// }


import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB CONNECTED'))
    .catch((err) => console.error('DB CONNECTION ERROR:', err));
}            







