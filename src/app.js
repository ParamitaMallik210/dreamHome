const express= require("express");
const { request } = require("http");
const hbs=require("hbs")
const app=express()
const bodyParser=require('body-parser')
 const mongoose=require("mongoose")
const details=require("./models/details")
const Slider=require("./models/slider")
const Service=require("./models/service")
const dotenv=require("dotenv")




//app.get("/",(request,respo nse) =>{
   // response.send("wow data from serverer")
//})


const routes=require('./routes/main');
const exp = require("constants");

// /static/css/style.css
app.use(bodyParser.urlencoded(
  {
    extended:true
  }
))

app.use('/static',express.static("public"))
app.use('',routes)




app.set('view engine','hbs')

app.set ("views","views")
hbs.registerPartials("views/partials")

//db connection

dotenv.config({path:'./.env'})
mongoose
  .connect( process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database connected!");     //error ayya tha new syntex k waja se

// Service.create([
//   {
//     icon: 'fa-solid fa-user-tie',
//     title:'Provide Best Designers',
//     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat tenetur quam ullam eum doloremque vitae delectus',
//     linkText:'Check',
//     link:'https://www.learncodewithdurgesh.com',
//   },
//   {
//     icon: 'fa-solid fa-user-tie',
//     title:'Provide Best Designers',
//     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat tenetur quam ullam eum doloremque vitae delectus',
//     linkText:'Check',
//     link:'https://www.learncodewithdurgesh.com',
//   },
//   {
//     icon: 'fa-solid fa-user-tie',
//     title:'Provide Best Designers',
//     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat tenetur quam ullam eum doloremque vitae delectus',
//     linkText:'Check',
//     link:'https://www.learncodewithdurgesh.com',
//   },
// ])





// Slider.create([
//   {
//     title:'this is slider',
//     subTitle:'this is usbtitle',
//     imageUrl:"/static/images/interior8.jpg"
//   }
// ])
// Slider.create([
//   {
//     title:'this is second slider',
//     subTitle:'this is second usbtitle',
//     imageUrl:"/static/images/interior7.jpg"
//   }
// ])
// Slider.create([
//   {
//     title:'this is 3rd slider',
//     subTitle:'this is 3rd usbtitle',
//     imageUrl:"/static/images/interior9.jpg"
//   }
// ])




    // details.create({
    //     brandName: "decoreURhome",
    //     brandIconUrl:"https://www.shutterstock.com/image-vector/interior-room-furniture-gallery-logo-260nw-1761705923",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us ",
    //             url:"/contact-us"
    //         },

    //     ]

    // })
  })

  .catch(err => console.log(err));
  //mongoose.connection

app.listen(process.env.PORT|8080, () =>{
    console.log("server started")
});