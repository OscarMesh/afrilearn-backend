require('dotenv').config()

const connectDB = require('./db/connect');
const Subject = require('./models/subject');

const jsonProducts = require('./subjects.json');    

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Subject.deleteMany();
        await Subject.create(jsonProducts);
        console.log('subjects added');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();