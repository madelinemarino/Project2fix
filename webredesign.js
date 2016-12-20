$(document).ready(function() {

});

$(function(){
  $(".ourstoryimg").slidesjs({
    width: 1000,
    height: 600,
    navigation: {
    	active: false,
          effect: "fade"
        },
    pagination: {
      active: false,
        // [boolean] Create pagination items.
        // You cannot use your own pagination. Sorry.
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    },
    play: {
          active: false,
          auto: true,
          interval: 4000,
          swap: true,
          effect: "fade"
        }
  });
});

$(document).ready(function() {
	
	var images = ['<img id="ladyone" src="aboutus5.jpg" />', '<img id="ladyone" src="aboutus2.jpg" />', '<img id="ladyone" src="aboutus3.jpg" />', '<img id="ladyone" src="aboutus1.jpg" />', '<img id="ladyone" src="aboutus4.jpg" />'];

	$(".slide_1").html(images[Math.floor(Math.random() * images.length)]);
});

$(document).scroll(function() {
	var y = $(document).scrollTop();

	$("#update").html(y);

	if (y > 50) {
		$("#pie2").fadeIn();
	}

	if (y > 500) {
		$("#pie2des").fadeIn();
	}

	else {
		$("#pie2des").fadeOut();
	}

	if (y > 800) {
		$("#pie1").fadeIn();
	}

	else {
		$("#pie1").fadeOut();
	}

	if (y > 950) {
		$("#pie1des").fadeIn();
	}

	else {
		$("#pie1des").fadeOut();
	}

	if (y > 800) {
		$("#pie3").fadeIn();
	}

	else {
		$("#pie3").fadeOut();
	}

	if (y > 950) {
		$("#pie3des").fadeIn();
	}

	else {
		$("#pie3des").fadeOut();
	}

		if (y > 1100) {
		$("#pie4").fadeIn();
	}

	else {
		$("#pie4").fadeOut();
	}
		if (y > 1700) {
		$("#pie4des").fadeIn();
	}

	else {
		$("#pie4des").fadeOut();
	}

		if (y > 2100) {
		$("#cake").fadeIn();
	}

	else {
		$("#cake").fadeOut();
	}
		if (y > 2300) {
		$("#cakedes").fadeIn();
	}

	else {
		$("#cakedes").fadeOut();
	}
		if (y > 2100) {
		$("#bread").fadeIn();
	}

	else {
		$("#bread").fadeOut();
	}
		if (y > 2300) {
		$("#breaddes").fadeIn();
	}

	else {
		$("#breaddes").fadeOut();
	}
		if (y > 2700) {
		$("#choccup").fadeIn();
	}

	else {
		$("#choccup").fadeOut();
	}
		if (y > 2800) {
		$("#chocdes").fadeIn();
	}

	else {
		$("#chocdes").fadeOut();
	}
		if (y > 2700) {
		$("#redcup").fadeIn();
	}

	else {
		$("#redcup").fadeOut();
	}
		if (y > 2800) {
		$("#reddes").fadeIn();
	}

	else {
		$("#reddes").fadeOut();
	}
});










