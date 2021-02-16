const express=require('express');
const app =express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const routesUrls =require('./routes/routes');
const cors=require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Database Connected"));

app.use(express.json({extended:false}))
app.use(cors());
app.use('/app',routesUrls)
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=> console.log("Server started at port",PORT));