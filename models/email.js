var mongoose   =require("mongoose")
var EmailSchema=new mongoose.Schema({
    title:String,
    mobile:String,
    mail:String,
    message:String,
   
	
	
});
module.exports=mongoose.model("Email",EmailSchema);