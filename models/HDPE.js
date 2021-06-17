var mongoose   =require("mongoose")
var SampleSchema=new mongoose.Schema({
	title:String,
	image:String,
    description:String,
    features:String,
    Uses:String,
    application:String,
    type:String,
    material:String,
    grade:String,
    color:String
});
module.exports=mongoose.model("HDPE",SampleSchema);
