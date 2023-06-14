const mongoose=require("mongoose")

const Banner =mongoose.Schema({
   texth1:String,
    textp1:String,
    urli1:String,
    urll1:String,

    texth2:String,
    textp2:String,
    urli2:String,
    urll2:String,
    texth:String,
    textp:String,
    url:String,
    About:String,
    AboutText:String,
    link:String,
 })

 module.exports=mongoose.model("banner",Banner)