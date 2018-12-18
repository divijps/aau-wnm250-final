
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backup").style.display = "block";
  } else {
    document.getElementById("backup").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

function fullname(){
	var i = document.getElementById("language");
	var n = i.value
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
    var greeting0 = "Please select a language";
	var greeting1 = "Thank you " + firstname+" " + lastname +". "+ "We will be in touch";
	var greeting2 = "欢迎 " + firstname +" "+ lastname + ". " + "周末愉快！";
    var greeting3 = "ようこそ " + firstname +" "+ lastname + ". " + "良い週末を！";
    var greeting4 = "Benvenuto " + firstname +" "+ lastname + ". " + "Passa un bel weekend！";
    var greeting5 = "Bienvenido " + firstname+" "+ lastname + ". " + "Qué tenga un buen fin de semana！";
    
	
	console.log( n )

	

 if (n == 1) 
 	document.querySelector("#greeting").innerHTML = greeting1;
 else if (n == 2)
	document.querySelector("#greeting").innerHTML = greeting2;
    else if (n == 3)
	document.querySelector("#greeting").innerHTML = greeting3;
    else if (n == 4)
	document.querySelector("#greeting").innerHTML = greeting4;
    else if (n == 5)
	document.querySelector("#greeting").innerHTML = greeting5;
 else	
 	document.querySelector("#greeting").innerHTML = greeting0;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}