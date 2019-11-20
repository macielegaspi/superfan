// JavaScript is capitalized using "camel case": m
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "elem" is an abbreviation for "the element that was clicked in the HTML"
var text = document.getElementById("text");
var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var big1 = document.getElementById("big1");
var big2 = document.getElementById("brandon2");
var click = document.getElementById('click');

//generates a number between 1 and four when called
function Calculator() {
   x = Math.floor((Math.random() * 12) + 1);
   return x;
}

//uses random number to implement CSS
function bRandom(){
	Calculator();
	console.log(x);
	if (x == 1){
    icon1.src = "images/bordericon1.png";
    icon2.src = "images/bordericon2.png";
    click.play();
}
	else if (x == 2){
    icon1.src = "images/bordericon1.png";
    icon2.src = "images/icon3.png";
    click.play();
	}
	else if (x == 3){
    icon1.src = "images/bordericon1.png";
    icon2.src = "images/icon4.png";
    click.play();
	}
	else if (x == 4){
    icon1.src = "images/bordericon2.png";
    icon2.src = "images/bordericon1.png";
    click.play();
	}

  else if (x == 5){
    icon1.src = "images/bordericon2.png";
    icon2.src = "images/icon3.png";
    click.play();
  }

  else if (x == 6){
    icon1.src = "images/bordericon2.png";
    icon2.src = "images/icon4.png";
    click.play();
  }

  else if (x == 7){
    icon1.src = "images/icon3.png";
    icon2.src = "images/icon1.png";
    click.play();
  }
  else if (x == 8){
    icon1.src = "images/icon3.png";
    icon2.src = "images/bordericon2.png";
    click.play();
  }
  else if (x == 9){
    icon1.src = "images/icon3.png";
    icon2.src = "images/icon4.png";
    click.play();
  }
  else if (x == 10){
    icon1.src = "images/icon4.png";
    icon2.src = "images/bordericon1.png";
    click.play();
  }
  else if (x == 11){
    icon1.src = "images/icon4.png";
    icon2.src = "images/bordericon2.png";
    click.play();
  }
  else if (x == 12){
    icon1.src = "images/icon4.png";
    icon2.src = "images/icon3.png";
    click.play();
  }

  bRod();
}

function bRod(){
  if (icon1.src.match("images/bordericon2.png")) {
    big1.src = "images/pewpew.jpeg";
  }
  else if (icon1.src.match("images/bordericon1.png")) {
    big1.src = "images/emob5.jpeg";
  }
  else if (icon1.src.match("images/icon3.png")) {
    big1.src = "images/staystrapped.jpeg";
  }
  else if (icon1.src.match("images/icon4.png")) {
    big1.src = "images/hardbran.jpeg";
  }
  else if (icon2.src.match("images/bordericon1.png")) {
    big2.src = "images/teachingbran1.jpeg";
  }
  else if (icon2.src.match("images/bordericon2.png")) {
    big2.src = "images/teachingbran2.jpeg";
  }
  else if (icon2.src.match("images/icon3.png")) {
    big2.src = "images/hardbran.jpeg";
  }
  else if (icon2.src.match("images/icon4.png")) {
    big2.src = "images/emob5.jpeg";
  }
}






// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility
