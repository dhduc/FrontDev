$(document).ready(function() {
	$("h2#title-connect").click(function() {
		$(".ico-github").hide();
        $(this).hide();
	});
	$("#ico-linkedin").focus(function(){
            $(this).css("border", "solid 1px red");
            $(this).css("background", "yellow");
            $(this).css("color", "pink");
    });
    $("#ico-github").hover(function(){
        $(this).css("color", "blue");
        alert("Pleas click me!");
    });
    var allPanels = $('.accordion > .content-accordion').hide();
    
	  $('.accordion > .title-accordion > span').click(function() {
	    allPanels.slideUp();
	    $(this).parent().next().slideDown();
	    return false;
	});

});


$(document).click(function() {
   $(".contact").parent().css({"border": "solid 1px blue", "background": "gray"}); 
});