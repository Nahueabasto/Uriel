// import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config(); 

// export const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.URI);
//         console.log('Connected to the database');
//     } catch (error) {
//         console.error('Error connecting to the database:', error.message);
//     }
// }
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); 

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI);
            console.log('MongoDB connected');
        } catch (error) {
            console.error('MongoDB connection error:', error);
            process.exit(1);
        }
    };
    
    export default connectDB;