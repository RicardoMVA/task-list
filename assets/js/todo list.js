<<<<<<< HEAD
// check off specific todos by clicking
// select ul so that new li's also toggle class on click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


// click on span 'x' to delete todo
// select ul so that new span's also delete on click
$("ul").on("click", "span", function(event){ 
	// fade-out li that encloses the clicked span
	$(this).parent().fadeOut(500, function(){
		// removes the li after fade-out
		$(this).remove();
	});

	// stops the click event from activating other events
	event.stopPropagation();
});


// makes 'plus' button show 'new todo' text input
$("#plusSpan").click(function(){
	// toggles between display: none
	$("input[type='text']").fadeToggle();
});


// text box for new todo objects
$("input[type='text']").keypress(function(event){
	//if enter key is pressed
	if (event.which === 13) {
		// save new todo text from input
		var todoText = $(this).val();

		// clear text box
		$(this).val("");

		// creates a new li and add to the ul
		$("ul").append("<li><span class='listSpan'><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");

		// hides text input
		$("input[type='text']").fadeOut();
	}
=======
// check off specific todos by clicking
// select ul so that new li's also toggle class on click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


// click on span 'x' to delete todo
// select ul so that new span's also delete on click
$("ul").on("click", "span", function(event){ 
	// fade-out li that encloses the clicked span
	$(this).parent().fadeOut(500, function(){
		// removes the li after fade-out
		$(this).remove();
	});

	// stops the click event from activating other events
	event.stopPropagation();
});


// makes 'plus' button show 'new todo' text input
$("#plusSpan").click(function(){
	// toggles between display: none
	$("input[type='text']").fadeToggle();
});


// text box for new todo objects
$("input[type='text']").keypress(function(event){
	//if enter key is pressed
	if (event.which === 13) {
		// save new todo text from input
		var todoText = $(this).val();

		// clear text box
		$(this).val("");

		// creates a new li and add to the ul
		$("ul").append("<li><span class='listSpan'><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");

		// hides text input
		$("input[type='text']").fadeOut();
	}
>>>>>>> set up git
});