// check off specific todos by clicking
$("li").click(function(){
	$(this).toggleClass("done");
});

// click on x to delete todo
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});