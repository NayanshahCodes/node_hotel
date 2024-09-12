const mongoose=require('mongoose');
require('dotenv').config();


//define the mongodb connection Url

// const mongoURL="mongodb://localhost:27017/hotels";
// const mongoURL='mongodb+srv://shahnayan1411:shah2004@cluster0.l34ws.mongodb.net/'

// const mongoURL=process.env.MONGODB_URL_LOCAL;
const mongoURL=process.env.MONGODB_URL;
//connection

mongoose.connect(mongoURL,
//     {
//     useNewUrlParser:true,
//     useUnifiedtopology:true
// }
) 

const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connection successfull");
});
db.on('error',()=>{
    console.log("connection error");
});
db.on('disconnected',()=>{
    console.log("mongodb disconncted");
});

//Expert the database connection 
module.exports=db;