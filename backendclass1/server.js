 //server Instantiate
const express = require('express');
const app = express();

//used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

//specifically parse json data & add it ti the request.Body object
app.use(bodyParser.json());

//activate the server on 3000 port 
app.listen(3000, () => {
    console.log("server started at port no. 3000");
});


//Routes
app.get ('/', (request,response) => {
    response.send("hello jee, kaise ho sare my name is tejasvi raj")
})


app.post('/api/cars', (request, response) => {
    const {name, brand } = request.body; 
    console.log(name);
    console.log(brand);
    response.send("car submitted succesfully.");

} )

const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser : true ,
    useUnifiedTopology:  true
     
})

.then(() => {console.log("connection successful")})
.catch((error)=> {console.log("Recieved an error") });
