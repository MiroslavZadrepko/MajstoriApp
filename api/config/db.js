const mongoose = require('mongoose');

const conectDB = async () => {
    mongoose.set("strictQuery", false);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB conected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1); 
    }
};

module.exports = conectDB;