const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log(`MONGO_URI: ${process.env.MONGO_URI}`); 
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected : ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB; // Export the function correctly
