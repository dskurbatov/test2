// checking if the words have numbers or else besides letters

var checkIfOnlyLetters = function(string){

	var regular = /^[a-zA-z]+$/;
	if(regular.test(string)){
		return true;
	} else {
		return false;
	};
};

// replacing numbers with a words

var titleCase = function(string){	
	var newString = string.split(" ");
    var total = [];
	var result = newString.forEach(function(word){
		total.push(word.charAt(0).toUpperCase() + word.slice(1));
	});	
	return total.join(" ");	
};

$(document).ready(function(){
	$("button").click(function(event){

		event.preventDefault();

		var answer = $("input.form-control").val();

		if(isNaN(answer)){

			$("div.output").append("<div class='well'>" + titleCase(answer) + "</div>");	
		} else {
			alert("Please enter a word or a sentence");
			$("input.form-control").val(" ");
			$("input.form-control").focus();
		};

		$("div.output").find("div").click(function(){
		$(this).remove();
		$("input.form-control").val(" ");
		$("input.form-control").focus();
	});
	});
});