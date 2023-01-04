const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('./server/config/mongoose');

const app = express();

app.use(cors());
app.use(express.static('./dist/chat-app'));
app.use(bodyParser.json());
const port = process.env.Port | 3000;



const userRoutes = require('./server/routes/Verification');
const { JsonWebTokenError } = require('jsonwebtoken');
app.use('/user',userRoutes);


app.get('*',(req,res)=>{

    res.sendFile(path.join(__dirname,'./dist/chat-app/index.html'));
})






app.listen(port,(err)=>{
    if(err){
        console.log('Error in starting the server at port :'+port);
        return ;
    }

    console.log('Server is running successfully on port :'+port);
})