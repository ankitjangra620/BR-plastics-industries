var mongoose   =require("mongoose")
var quickSchema=new mongoose.Schema({
      name:String,
      mail:String,
      phone:String,
      review:String
});
module.exports=mongoose.model("quick",quickSchema);