// Mouseover --> hand cusor
// Click --> hide   - Ex-01
var obj=".intro-message h1";
$(obj).mouseover(function(){
	$(this).css("background","red");
	$(this).css("cursor","pointer");
});

$(obj).mouseout(function(){
	$(this).css("background","yellow");
	
});

$(obj).click(function(){
        $(this).hide();
    });



// accordion - Ex 02

var jQueryAcc = $(".accordion");

$(".accordion").click(function(){
	$(this).next().toggleClass('active');
});



// Slider - ex03
$("#slideshow > li.item:gt(0)").hide();

setInterval(function() {
  $('#slideshow > li.item:first') // first item 
    .fadeOut(1000) // first item out
    .next() // call second item
    .fadeIn(1000) // show second item
    .end() // Finish second item   
    .appendTo('#slideshow');// continue slide 
}, 1000);
