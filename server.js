const express = require('express');
const app = express();
const db=require('./db');
const Person=require('./models/person');
//const MenuItem=require('./models/Menu');
require('dotenv').config();


const PORT=process.env.PORT || 3000;


const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Welcome to my first express.js page how i can help you ?');
})
app.get('/email',(req,res)=>{
    var student={
        fname:"nayan",
        email:"shahnayan14@gmail.com",
        eno:"22bece30423"
    }
    res.send(student);
})
//import router file 
const personRoutes=require('./routes/personRoutes');
// use the routers
app.use('/person',personRoutes);

const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);
//git is added  


app.listen(3000, ()=>{
    console.log("server is responsing and port number is 3000");
})






//basic get and post api or endpoint making
//---------------------------------------

// app.get('/email',(req,res)=>{
//     var student={
//         fname:"nayan",
//         email:"shahnayan14@gmail.com",
//         eno:"22bece30423"
//     }
//     res.send(student);
// })

// app.post('/items',(req,res)=>{
//     // res.send(console.log("data is saved"))
//     res.send("data is saved");

// })
//-------------------------------------------------


























// var _ = require('lodash');
// const notes=require('./app.js');
// var myage=notes.age;
// var result=notes.addNumber(myage,10);
    // console.log(myage);
    // console.log(result);
// console.log("server is running");
// console.log("server is running");

// // different method of function


// //  first method
// // function add(a,b){
// //     return a+b;
// // }
// // var result=add(3,4);
// // console.log(result);


// // second method

// // var add=function(a,b)
// // {
// //     return a+b;
// // }

// // third method

// // var add=(a,b)=>{
// //     return a+b;
// // }




// // fourth method

// (function(){
//     console.log("hello world");
// })();









// // var result=add(9,4);
// // console.log(result);

// 