const express = require("express");
const app = express();


require ("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

const blog = require("./routes/blog")
//mount 
app.use("/api/v1", blog)

const connectwithdb = require("./config/database");
connectwithdb();

app.listen(3000, () => {
    console.log("App is running Sucessfully");
})

app.get("/", (req, res) => {
    res.send(`<h1>This is my homepage </h1>`)
})