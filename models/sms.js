var mongoose   =require("mongoose")
var SmsSchema=new mongoose.Schema({
    title:String,
    mobile:String,
    email:String,
    message:String,
   
	
	
});
module.exports=mongoose.model("Sms",SmsSchema);