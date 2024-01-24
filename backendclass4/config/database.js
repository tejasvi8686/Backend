const mongoose = require("mongoose");


require ("dotenv").config();
const connectwithdb = () => {

    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(console.log("DB connection successfully"))
    .catch( (error) => {
        console.log("DB Facing Connection Issues");
        console.log(error);
        process.exit(1);
    })

}

module.exports = connectwithdb;