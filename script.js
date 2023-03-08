console.log("Hello");
document.getElementById("reference").style.display = "none";

const navbar = document.getElementById('navbar');
const myButton = document.getElementById('menu');
const bars = document.getElementById('bars');
const xmark = document.getElementById('xmark');
const header = document.getElementById("header");



myButton.addEventListener('click', () => {
  if (navbar.style.height === 'max-content') {
    navbar.style.height = '0';
    bars.style.display = 'block';
    xmark.style.display = 'none';
  } else {
    navbar.style.height = 'max-content';
    bars.style.display = 'none';
    xmark.style.display = 'block';
  }
});



window.addEventListener("scroll", function (){
  if (window.pageYOffset > 50){
    header.classList.add("scroll");
  }else{
    header.classList.remove("scroll");
  }
  
  if (navbar.style.height === 'max-content'){
    myButton.click();
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