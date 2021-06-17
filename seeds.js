var mongoose=require("mongoose");
const HDPE = require("./models/HDPE");

var Sms=require("./models/sms");
var hdpedata=[
    {
        title:"HDPE BLUE DRUM GRANULES ",
        image:"https://i.ibb.co/DYrPCrQ/Page-1-Image-1.jpg",
        description:"We manufacture, supply & distribute excellent quality of HDPE Blue Drum Grade Granules. We understand that HDPE Granules are suitable for use in diverse industries therefore we use only the best quality raw materials to manufacture it. Hygienically processed using active ingredients, these HDPE Blue Granules have linear hydrocarbons and also conform to international quality standards The entire range of HDPE Blue Granules possesses quality attributes like high durability strength, flow & flame retardation. HDPE Blue drum Granules are manufactured using industrial drum procured from reliable sources. Moreover, these HDPE Blue drum Granules are packaged in safe material to ensure convenient transportation. These HDPE Blue drum Granules are available at industry leading prices. ",
        features:"High quality filter. Excellent & Strength.  Accurate raw material is used. Available at reasonable prices. ",
        Uses:"Blue Pipe .Blue Drum.",
        application:"Black Agriculture/Sprinkler Pipe.",
        type:"HDPE Granules",
        material:"HDPE",
        color:"Blue",
        grade : "Pipe Grade",
        price:"INR 70.00 /kg",

    },
    {
        title:"HDPE EXTRUSION GRADE GRANULES ",
        image:"https://i.ibb.co/HTL7bwV/Page-2-Image-2.jpg",
        description:"The company is a prominent Black HDPE Granules Manufacturer and Supplier in India. The Black HDPE Granules, that we provide, are used in numerous industrial applications. These Black HDPE Granules are available in different specifications, to meet the various demands of our customers.   We are a prestigious company engaged in offering a superior quality HDPE Granules. These granules are used in the production of various plastic products. Our team of engineers and technicians ensure proper selection of raw materials to process into HDPE grade suitable to extrude into grades with low melt flow index (MFI) and good melt strength. The offered granules are processed using modern techniques by our qualified professionals. Our granules are tested on a series of parameters to assure their unmatchable quality.  ",
        features:"High quality.High Filter.Available at reasonable prices.First rate raw material is used . ",
        Uses:"Black Pipe.Black Dram.Mix Color Plastic Jerry Cans ",
        application:"Black Agriculture/Sprinkler Pipe.Black Drum. " ,
        type:"HDPE Granules",
        material:"HDPE",
        color:"Black",
        grade : "Extrusion Grade",
        price:"INR 64.00 /kg",
    },
    {
        title:"HDPE BLOW MOLDING GRANULES BLACK ",
        image:"https://i.ibb.co/VV9wQMn/Page-3-Image-3.jpg",
        description:"The company is a prominent Black HDPE Granules Manufacturer and Supplier in India. The Black HDPE Granules, that we provide, are used in numerous industrial applications. These Black HDPE Granules are available in different specifications, to meet various demands of our customers.We Manufacture, Supply and Export excellent HDPE Black Granules. We understand that HDPE Granules are suitable for use in diverse industries; therefore, we use only the best quality raw materials to manufacture it. Moreover, these Black Granules are packaged in a safe material to ensure convenient transportation. These Black Granules are available at industry leading prices. ",
        features:" High quality. High Filter. Available at reasonable prices. First rate raw material is used. ",
        Uses:"Containers. Mix Color Jerry Can. Household Item. ",
        application:"Agriculture/Sprinkler Pipe Coating. Garbage Carry Bag. UGPL Pipe. " ,
        type:"HDPE Granules",
        material:"HDPE",
        color:"Grey",
        grade : "",
        price:"INR 64.00 /kg"
    },
    {
        title:"HDPE BLOW MOLDING GRANULES NATURAL",
        image:"https://i.ibb.co/jvhsZ20/Page-4-Image-4.jpg",
        description:"We are the leading manufacturers of HDPE Regular Natural Blow Grade Granules. Our company is backed by rich experience and a competent team of professionals. We are able to offer the finest quality of HDPE Granules. The offered range of reprocessed granules is suitably inspected in varied characteristics to ensure its adherence with the highest quality norms & standards. Along with this, the offered range of reprocessed HDPE granules is known for its flexibility and excellent thermal stability. ",
        features:"Free Flow. Durable. Reliable. Stress Resistance.  ",
        Uses:"Containers. Jerri cans. Bottles ",
        application:"Carry Bags. HDPE Tirpal. Telecom Pipe Industries." ,
        type:"HDPE Granules",
        material:"HDPE",
        color:"Brown",
        grade : "Extrusion Grade",
        price:"INR 64.00 /kg",
    },
    {
        title:"HDPE BLOW MOLDING MILKY WHITE GRANULES",
        image:"https://i.ibb.co/pRZ0s11/Page-5-Image-5.jpg",
        description:"In line with variegated specifications of our esteemed patrons, we are engaged in manufacturing distributing, whole selling and supplying a high quality of HDPE Milky Blow Grade Granules. The offered granules are processed with high precision by our skilled professionals by using optimum quality material. We offer these granules in different sizes & colors in order to suit the requirements of our customers. ",
        features:"Flexible. Opaque in visibility. Available in various colors. ",
        Uses:"Carrier bags. Shampoo Bottle. House hold and Kitchenware. ",
        application:"Carry Bags. HDPE Tirpal. Inner Coating of Pipe. " ,
        type:"HDPE Granules",
        material:"HDPE",
        color:"Milky White",
        grade : "Extrusion Grade",
        price:"INR 64.00 /kg",
    },
  

]
 

function seedDB1(){
    HDPE.remove({},function(err){
        if(err){
            console.log(err);
        }
        else{
            hdpedata.forEach(function(seed){
                HDPE.create(seed,function(err,Sample){
                    if(err){
                        console.log(err);
                    }
                    else{
                      
                        Sample.save();
                    }
                })

            })
            
        }
    })
}


module.exports = seedDB1;

