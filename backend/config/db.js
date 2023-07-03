const mongoose = require('mongoose');

const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connected DB: ${conn.connection.host}`);
}

module.exports = connectDB
// const connectDB = async () => {
//     try {
//       await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//       });
//       console.log("MongoDB connected");
//     } catch (error) {
//       console.error("Error connecting to MongoDB:", error.message);
//       process.exit(1);
//     }
//   };
  
//   module.exports = connectDB;
  