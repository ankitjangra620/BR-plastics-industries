var mongoose   =require("mongoose")
var orderSchema=new mongoose.Schema({
      name:String,
      mail:String,
      phone:String,
      quantity:String,
      unit:String,
      orderPrice:String,
      details:String
});
module.exports=mongoose.model("order",orderSchema);