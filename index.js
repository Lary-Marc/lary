//(1. dependencies)
const express = require('express'); 
//instatiate the express library and assign it to var app
//(2. instatiations)
const app = express(); 

//3. configurations
app.set('view engine', 'pug');
app.set('views', './views');



// (4. middleware)
//body-parser handles reading data from the form element
app.use(express.urlencoded({extended: true})) 

 // custom middleware to log the time of the current request
app.use('/quotes',(req, res, next) => {
  console.log("A new request received at " + Date.now());
//app.use is used to add a middleware
  // This function call tells that more processing is
  // required for the current request and is in the next middleware
  
  next();  
});

app.get('/hello', (req, res) => {
    console.log("I love myself");
  });

app.get('/register', (req, res) => {
    res.render('register');
  });

  app.get('/registration', (req, res) => {
    res.render('index');
  });
  app.post("/registration",(req,res)=>{
    console.log(req.body)
    res.send("The data has been submitted")
})
//routing

// this helps create a server defining the port, console.log will run whenever you listen to the port
app.listen(3200, () =>{
    console.log('listening on 3200')
  })