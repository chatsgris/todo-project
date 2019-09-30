// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

// click on x to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// add event listener on keypress in input
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
	}
})