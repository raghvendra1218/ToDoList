$("ul").on("click","li", function() {
	$(this).toggleClass("completed");
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// } else {
	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// });
	// }
});
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type ='text']").keypress(function (event) {
	if(event.which === 13) {
		//Grabbing new to do text from input
		var todoText = $(this).val();
		//Clear the input field
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+ todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type ='text']").fadeToggle();
});