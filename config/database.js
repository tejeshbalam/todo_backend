const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
require("dotenv").config()

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DataBase Connected Succesfully"))
    .catch((error) => {
        console.log(`${error}`);
        process.exit(1);
    });
    
}

module.exports = dbConnect