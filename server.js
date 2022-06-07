const CreateError=require(http-errors);
const express=require('express');
const app=express();
const path=require('path');
const bodyparser=require('bodyparser');
const cors=reqiure('cors');
const indexrouter=require('./router.js');
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyparser.urlencoded());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', indexRouter);
app.use((err,req,res,next)=>{
    console.log(err);
    error.statusCode =err.statuscode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
 
app.listen(3000,() => console.log('Server is running on port 3000'));


})