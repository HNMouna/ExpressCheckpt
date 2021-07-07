const path=require('path')
console.log('Checkpoint Express')

const express=require('express')

const app=express();

const today=new Date(Date.now())
//  middleware 
const day= today.getDay();
const hours=today.getHours();
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
app.get('/error.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','error.html')) 
})
app.use((req,res,next)=>{
    console.log("A new request received at "+ days[day] +" "+ hours +" H" );
(day === 0 || day === 6) || (hours <9 || hours >= 17)  ? 
res.redirect('/error.html')  
:next();   
})

app.use(express.static('public'));
//rendering css style 
app.use('/styleSheets',express.static('styleSheets'));
// create the port variable
const port=8080
//listen to the port
app.listen(port,(err)=>{
     err? console.log(err) : console.log('server is running on port 8080')
})