import express from 'express';
import  mongoose from 'mongoose';
import { userRouter } from './routers/userRouter.js';
import dotenv from 'dotenv';

dotenv.config();
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1/womensafety_devspace',{useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true});

app.use('/api/users',userRouter);
// app.use('/api/groups',productRouter);
app.get("/",(req,res)=>{
    res.send("Server is ready");
});

const port=process.env.PORT || 5000;

app.use((err,req,res,next)=>{
    // console.log('hi');
    res.status(500).send({message:err.message});
});

app.listen(port,()=>
{
    console.log(`Server at http://localhost:${port}`);
});