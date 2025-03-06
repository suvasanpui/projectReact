const express = require("express");
const app = express();
require('dotenv').config();
const cors=require("cors");

const db = require('./db/db');

const PORT=process.env.PORT || 3000

//we know that react run on 3000 port but here node run on 8000 port so this are manage cors npm package
app.use(cors());

//body parser store in req.body---this is most important parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/",function (req, res) {
    res.send("Welcome to our State");
});

//import router file
const userRoute = require('./routes/users.routes');
const electorsRoute=require('./routes/electors.routes')


//use the router
app.use("/users",userRoute);
app.use('/electors',electorsRoute);

//listening port
app.listen(PORT, () => {
    console.log("Server Connected");
});