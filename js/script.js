function submitAnswers() {
	var total = 5, score = 0;

	//get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	// Validation
	for (var i = 1; i <= total; i++) {
		if ( eval('q' + i) == null || eval('q' + i) == '' ){
			alert('You missed question ' + i);
			return false;
		}
	}

	//set correct answers
	var answers = ["b", "a", "d", "b", "d"];

	//check answers
	for (var i = 0; i < total; i++) {
		if (eval('q' + (i+1)) == answers[i]) {
			score++;
		}
	}

	//display results
	var results = document.getElementById('results');
	results.innerHTML = '<h3> You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	alert("You scored " + score + " out of " + total);

	//Catch submission before it goes to server
	return false;
}