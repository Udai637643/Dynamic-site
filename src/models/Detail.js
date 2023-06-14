const mongoose=require("mongoose");
const Detail=mongoose.Schema({
    branchName:String,
    branchIconUrl:String,
    links:[{
        label:String,
        url:String
    },
],
})
module.exports=mongoose.model("detail",Detail);