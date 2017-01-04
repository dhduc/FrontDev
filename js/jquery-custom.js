// Mouseover --> hand cusor
// Click --> hide 
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
