//alert("hello");

// --------------------------------------------------------------
// CAROUSEL
// --------------------------------------------------------------

$("#carousel").skippr({
   autoPlayDuration: 2000,
   speed: 1000,
   navType: 'bubble',
   arrows: true,
   autoPlay: true
});


// --------------------------------------------------------------
// SEARCH BAR
// --------------------------------------------------------------



$(".form").keypress(function (e) {
   if (e.which == 13) {
      $(this).val("");
   }
})

// --------------------------------------------------------------
// MOBILE SLIDE OUT NAV
// --------------------------------------------------------------


function openNav() {
   document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
   document.getElementById("myNav").style.width = "0%";
}



var span = document.getElementsByClassName("closebtn")[0];

function myFunction() {
   var x = document.getElementById("myDIV");
   if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
 }



// --------------------------------------------------------------
// SCROLL TO TOP
// --------------------------------------------------------------



$(".scrollToTop").on("click",function(){
   var rootElement = document.documentElement;
   rootElement.scrollTo({
     top: 0,
     behavior: "smooth"
   }) 
 });
