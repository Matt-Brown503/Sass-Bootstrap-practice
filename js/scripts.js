var emptyLink = document.querySelectorAll("a[href='#']");

$(document).ready(function(){
	$('#slideshow').carousel({
  				interval: 0
		});
});


$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('#nav').toggleClass('darknav',
     //add 'darknav' class when div position match or exceeds else remove the 'ok' class.
      scroll >= $('#about').offset().top - 50
    );
});
//trigger the scroll
$(window).scroll();

//Scroll to section for nav
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 35
    });
});
$("#about-btn").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 35
    });
});

//Empty Links will not reload page
$(emptyLink).click(function(e) {
    e.preventDefault();

});



