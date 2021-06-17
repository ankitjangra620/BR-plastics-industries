var express=require("express"),
app=express(),
mongoose   =require("mongoose"),
Sample=require("./models/HDPE.js"),
quick=require("./models/quick.js"),
sms=require("./models/sms.js"),
order=require("./models/order.js"),
email=require("./models/email.js"),
seedDB1=require("./seeds"),
bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const api_key="8682eb599f624a011ae1105a80084e84-ea44b6dc-a600304a";
    const domain="sandbox7fdb44f40fc642cfb7f82ad01a4bcf9b.mailgun.org";
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

mongoose.connect('mongodb://localhost:27017/samples', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(express.static("public"))
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
seedDB1();


// Mail function will go there

//   MAil function end
app.get("/",function(req,res){
    Sample.find({},function(err,samp){
        if(err){
            console.log(err);
        }
        else{
            
            
            res.render("home/home",{sample:samp});
        }
    })

})

app.post("/sms",function(req,res){
     var name=req.body.name;
     var phone=req.body.number;
     var email=req.body.email;
     var message=req.body.message;
     var z={
         title:name,
         mobile:phone,
         email:email,
         message:message
     }
    sms.create(z,function(err,sms){
        if(err){
            console.log(err);

        }
        else{ 
            const data={
                from:"ankitjangra620@gmail.com",
                to:"brplasticindustries@gmail.com",
                subject:"Sending Sms from"+phone,
                text:"Sms",
                html:"<h1>SMS</h1>"+"<h1>"+name+" with mobile no."+phone+"</h1>"+"<p>"+message+"</p>"
            };
            
            mailgun.messages().send(data, function (error, body) {
                if(error){
                    console.log(error);
                }else{
                    console.log(body);
                     
                }    

              });
             
            console.log(sms);
            res.redirect("/sms");
        }
    })
})

// Email post route
app.post("/email",function(req,res){
    var name=req.body.name;
    var phone=req.body.number;
    var mail=req.body.email;
    var message=req.body.message;
    var z={
        title:name,
        mobile:phone,
        mail:mail,
        message:message
    }
   email.create(z,function(err,sms){
       if(err){
           console.log(err);

       }
       else{ 
        const data={
            from:mail,
            to:"brplasticindustries@gmail.com",
            subject:"Sending Mail from"+mail,
            text:"Email",
            html:"<h1>Email</h1>"+"<h1> Name = "+name+"</h1>"+"<h1> Email = "+mail+"</h1>"+"<h5>"+message+"<h5>"
        };
        
        mailgun.messages().send(data, function (error, body) {
            if(error){
                console.log(error);
            }else{
                console.log(body);
            }    
          });
            
           console.log(sms);
           res.redirect("/");
       }
   })
})
app.post("/show/:id/order",function(req,res){
     var name=req.body.name,
     mail=req.body.email,
     phone=req.body.mobile,
     quantity=req.body.quantity,
     unit=req.body.unit ,
     orderPrice=req.body.value,
     details=req.body.message
     var z={
         name:name,
         mail:mail,
         phone:phone,
         quantity:quantity,
         unit:unit,
         orderPrice:orderPrice,
         details:details
     }
    order.create(z,function(err,rev){
        if(err){
            console.log(err);
        }
        else{
            const data={
                from:mail,
                to:"brplasticindustries@gmail.com",
                subject:"Sending Mail from"+mail,
                text:"Quick Enquiry",
                html:"<h1>Order</h1>"+"<h1> Name = "+name+"</h1>"+"<h1> Email = "+mail+"</h1>"+"<h1> Phone  = "+phone+"</h1>"+"<h1> Quantity  = "+quantity+ unit +"</h1>"+"<h1>   orderPrice  = "+orderPrice+ "</h1>"+"<h1>  Details  = "+details+ "</h1>"
            };
            
            mailgun.messages().send(data, function (error, body) {
                if(error){
                    console.log(error);
                }else{
                    console.log(body);
                }    
              });
            console.log(rev);
            res.redirect("/show/"+req.params.id);
        }
    })
})
app.post("/",function(req,res){
    var name=req.body.name,
    mail=req.body.email,
    phone=req.body.number,
    review=req.body.message;
    var z={
        name:name,
        mail:mail,
        phone:phone,
        review:review
    }
    quick.create(z,function(err,rev){
        if(err){
            console.log(err);
        }
        else{

            const data={
                from:mail,
                to:"brplasticindustries@gmail.com",
                subject:"Sending Mail from"+mail,
                text:"Quick Enquiry",
                html:"<h1>Quick Enquiry</h1>"+"<h1> Name = "+name+"</h1>"+"<h1> Email = "+mail+"</h1>"+"<h1> Phone  = "+phone+"</h1>"+"<h5>"+review+"<h5>"
            };
            
            mailgun.messages().send(data, function (error, body) {
                if(error){
                    console.log(error);
                }else{
                    console.log(body);
                }    
              });
                
               
                
            console.log(rev);
            res.redirect("/");
            }
    })
})
app.post("/show/:id",function(req,res){
    var name=req.body.name,
    mail=req.body.email,
    phone=req.body.number,
    review=req.body.message;
    var z={
        name:name,
        mail:mail,
        phone:phone,
        review:review
    }
    quick.create(z,function(err,rev){
        if(err){
            console.log(err);
        }
        else{
            const data={
                from:mail,
                to:"brplasticindustries@gmail.com",
                subject:"Sending Mail from"+mail,
                text:"Quick Enquiry",
                html:"<h1>Quick Enquiry</h1>"+"<h1> Name = "+name+"</h1>"+"<h1> Email = "+mail+"</h1>"+"<h1> Phone  = "+phone+"</h1>"+"<h5>"+review+"<h5>"
            };
            
            mailgun.messages().send(data, function (error, body) {
                if(error){
                    console.log(error);
                }else{
                    console.log(body);
                }    
              });
                
               
           
            console.log(rev);
            res.redirect("/show/"+req.params.id);
            }
    })
})
app.get("/show/:id",function(req,res){
     Sample.find({},function(err,samp){
        if(err){
            console.log(err);
        }
        else{
            
            Sample.findById(req.params.id,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                  
                    res.render("home/show",{sample:data,Sample:samp });
                }
            })
          
            
        }
    })
        // Yes, it's a valid ObjectId, proceed with `findById` call.
    
     
   
})
app.get("/companyProfile",function(req,res){
    Sample.find({},function(err,samp){
        if(err){
            console.log(err);
        }
        else{
            
            
            res.render("home/company",{sample:samp});
        }
    })
})
app.get("/contact",function(req,res){
    Sample.find({},function(err,samp){
        if(err){
            console.log(err);
        }
        else{
            
            
            res.render("home/contact",{sample:samp});
        }
    })
    
})
app.get("/sms",function(req,res){
    res.render("home/sms");
})
app.get("/email",function(req,res){
    res.render("home/email");
})
app.listen(3000,()=>{
    console.log("Hi Buddy");

})