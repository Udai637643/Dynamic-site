 const mongoose=require("mongoose")

 const Slider=mongoose.Schema({
    title:String,
    subTitle:String,
    imageUrl:String
 })

 module.exports=mongoose.model('silder',Slider)