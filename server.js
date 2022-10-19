const express=require('express');
//const unirest=require('unirest');
const app=express();
app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('index')
})



const port=2401;
app.listen(port,()=>{
    console.log(`Listening on port ${port}...`);
})