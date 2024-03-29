const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL="mongodb+srv://satwikdivate:satwik1234@finalstudynotion.xlbkzre.mongodb.net/?retryWrites=true&w=majority&appName=finalstudynotion"

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then( () => console.log("DATABASE CONNECTED SUCESSFULLY !! "))
    .catch( (error) => {
        console.log("ERROR FACED IN DATABASE CONNECTION !!");
        console.error(error);
        process.exit(1);
    })
}; 