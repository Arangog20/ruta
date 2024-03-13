const express = require('express');

const app = express();
const mongoose = require('mongoose');
require("dotenv").config();

const port  = process.env.PORT ||3000;

app.get('/', (req, res) => {
    res.send('holi welcome');
});

mongoose.connect
(process.env.MONGODB_URL)
.then(()=> console.log('conectado mongodb atlas'))
.catch((error)=> console.log(error))

app.listen(port,()=>{
    console.log('listening on port',port)
});

