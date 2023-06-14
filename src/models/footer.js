const mongoose=require("mongoose")

const Footer=mongoose.Schema({
    title:String,
    textp:String,
    connt:[{
        cclass:String,
        ctext:String
    },],
    slink:[{
        sclass:String,
        link:String
    },]
})

module.exports=mongoose.model("footer",Footer);