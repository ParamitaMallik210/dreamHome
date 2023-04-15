const express=require('express')
//const { route} =require(express/lib/express.application)
const routes=express.Router()
const details = require("../models/details")
const slider = require('../models/slider');
const service = require('../models/service');
const { request } = require('http');
const Contact=require("../models/contact")

routes.get("/",async (req,res) => {
    
    const detail = await details.findOne({"_id":"6431c07fa7e49d4e6b743969"})
    const slides=await slider.find()
    const services=await service.find()
    //console.log(detail)
    res.render("index",{
        detail:detail,
        slides:slides,
        services:services,
    });
});

routes.get('/gallery',async(req,res) =>
{
    const detail = await details.findOne({"_id":"6431c07fa7e49d4e6b743969"})

    //console.log(detail)
    res.render("gallery",{
        detail:detail,
        
    });
    

});

//process contact form

routes.post("/process-contact-form",async(request,response)=>
{
    console.log("form is submitted")
    console.log(request.body)
    //save the data to db
     try{

        const data=await Contact.create(request.body)
        console.log(data)
        response.redirect("/")

     }catch(e)
     {
        console.log(e)
        response.redirect("/")
     }


})

module.exports=routes;