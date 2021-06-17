var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "https://i.ibb.co/HTL7bwV/Page-2-Image-2.jpg";
images[1] = "https://i.ibb.co/DYrPCrQ/Page-1-Image-1.jpg";
images[2] = "https://i.ibb.co/VV9wQMn/Page-3-Image-3.jpg";


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads

$("#dr").hover(function () {
    // over
    $("#drd").slideDown(500);
   
  }, function () {
    // out
   $("#drd").addClass("none")
   
  }
);
$(".drop").hover(function () {
    // over
    $(this).css({
      display:"block"
    })
    
  }, function () {
    // out
    $(this).css({
      display:"none"
    })
  }
);
$(".products").hover(function(){
  $(".drop").css({
    display:"none"
  })
})
// $(".slide").slideDown(500);
$(".slide").fadeIn(1000);

$(".kjh").click(function (e) { 
     alert("SMS SENT")
});
console.log(screen.width)
if(screen.width <400){
    $("#slider").css({
      display:"none"
    })
}
window.onload=changeImg;