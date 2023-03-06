console.log("Hello");
document.getElementById("reference").style.display = "none";

window.addEventListener("scroll", function (){
  var header = document.getElementById("header");
  if (window.pageYOffset > 50){
    header.classList.add("scroll");
  }else{
    header.classList.remove("scroll");
  }
});


function toggle() {
  console.log("push");
  var div = document.getElementById("reference");
  if (div.style.display === "none") {
    div.style.display = "block";
    div.scrollIntoView({behavior:"smooth"});
  } else {
    div.style.display = "none";
    window.scrollBy(0, -1);
  }
}



window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 400) {
    document.getElementById("scrollUpButton").style.display = "block";
  } else {
    document.getElementById("scrollUpButton").style.display = "none";
  }
} 
  
 document.getElementById("scrollUpButton").addEventListener("click", function() { 
   window.scrollTo({top: 0, behavior: 'smooth'}); 
 });