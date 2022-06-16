const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);

// console.log(static_path);
app.use(express.static(static_path));

app.get("", (req,res) =>{
    res.render('index')
})

app.get("/about",  (req,res) =>{
    res.render('about')
})


app.get("/weather", (req,res) =>{
    res.render('weather')
})

app.get("/signup",(req,res)=>{
    res.render("signup");
})
//create a new user in database 
// app.post("/signup", async (req,res)=>{
//    try {
//        const password = req.body.password;
//        const cpassword = req.body.cpassword;   // same honachahiyeschema m jo likha h 
//        if(password === cpassword){
      
//           const 
     
//        }else{
// res.send("password not matching");
//        }


//    } catch (error) {
//        console.log(error);
//    }

// })


app.get("*", (req,res) =>{
    res.render('404page', {
        errorMsg : "Opps! page not found, Click Here to go back"
    })
})


app.listen(port, () => {
    console.log(`listening to the port no at ${port}`);
})