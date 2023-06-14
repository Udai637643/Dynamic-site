const express=require("express")
const { route }=require('express/lib/application')
const routes=express.Router()
const Detail=require("../models/Detail")
const Slider=require("../models/slider")
const Service=require("../models/service")
const Contact=require("../models/Contact")
const Banner=require("../models/Banner")
const Footer = require("../models/footer")
const Images = require("../models/images")














routes.get("/", async (req,res)=>{
    // res.send("this is msg from routes;")

  const details= await  Detail.findOne({"_id":"6483749857b0e13aaaacd6d3"})
  // console.log(details) 
 const slides =  await Slider.find()
 const services = await Service.find()
 const banner=await Banner.find()
//  console.log(banner)
 const footerr = await Footer.findOne({"_id":"6485e197fb16c225912bf2fe"})

 console.log(footerr)
//  console.log(slides)
  res.render("index",{
    details:details,
    slides:slides,
    services:services,
    banner:banner,
    footerr:footerr,
    
  })

})



routes.get('/gallery', async (req,res)=>{
    // res.send("gallery")
    const details= await  Detail.findOne({"_id":"6483749857b0e13aaaacd6d3"})
    const images= await Images.findOne({"_id":"6486164f11516c16d193709e"})
    res.render("gallery",{
      details:details,
      images:images
    })
  
})



routes.post("/process-contact-form", async (req,res)=>{
  console.log("form is submitted") 
  console.log(req.body)
  //save the data
  try{
    const data= await Contact.create(req.body)
    console.log(data)
    res.redirect("/")
  }
  catch(e){
     console.log(e)
     res.redirect("/")
  }
})
module.exports=routes
