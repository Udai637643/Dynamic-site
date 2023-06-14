const  mongoose=require("mongoose")

const Images=mongoose.Schema({
    urllink:[{
        link:String
    }]
})
module.exports= mongoose.model("images",Images)