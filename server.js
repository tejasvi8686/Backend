const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("server started at port no. 3000")
});

app.get ('/', (request,response) => {
    response.send("hello jee, kaise ho sare my name is tejasvi raj")
})


app.post('/api/cars', (request, response) => {
    const {name, brand } = request.body; 
    console.log(name);
    console.log(brand);
    response.send("car submitted succesfully.")

} )