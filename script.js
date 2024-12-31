// Variables to store user's answers
let answer1 = "";
let answer2 = "";
let answer3 = "";

// // Show the uplifting page after the Ground Rules page
// document.getElementById('startQuizBtn').addEventListener('click', () => {
// 	document.getElementById('groundRules').style.display = 'none';
// 	document.getElementById('upliftingPage').style.display = 'block';
// });

// Go to the quiz page when the user clicks "Start the Quiz"
document.getElementById('startQuizBtn').addEventListener('click', () => {
	document.getElementById('encouragementPage').style.display = 'none';
	document.getElementById('quizPage').style.display = 'block';
	showQuestion(1);
});

// Show a question
function showQuestion(questionNumber) {
	document.getElementById(`question${question}`).style.display = 'block';
	if (questionNumber > 1) {
		document.getElementById(`question${question - 1}`).style.display = 'none';
	}
	if (questionNumber === 3) {
		document.getElementById('nextButton').style.display = 'none';
	}
}

// Handle answers for each question
document.getElementById("q1a").addEventListener("click", () => { answer1 = 'A'; goToNextQuestion(2); });
document.getElementById("q1b").addEventListener("click", () => { answer1 = 'B'; goToNextQuestion(2); });
document.getElementById("q1c").addEventListener("click", () => { answer1 = 'C'; goToNextQuestion(2); });

document.getElementById("q2a").addEventListener("click", () => { answer2 = 'A'; goToNextQuestion(3); });
document.getElementById("q2b").addEventListener("click", () => { answer2 = 'B'; goToNextQuestion(3); });
document.getElementById("q2c").addEventListener("click", () => { answer2 = 'C'; goToNextQuestion(3); });

document.getElementById("q3a").addEventListener("click", () => { answer3 = 'A'; calculateResult(); });
document.getElementById("q3b").addEventListener("click", () => { answer3 = 'B'; calculateResult(); });
document.getElementById("q3c").addEventListener("click", () => { answer3 = 'C'; calculateResult(); });

// Proceed to the next question
function goToNextQuestion(nextQuestion) {
	document.getElementById(`question${nextQuestion - 1}`).style.display = 'none';
	document.getElementById(`question${nextQuestion}`).style.display = 'block';
	if (nextQuestion === 3) {
		document.getElementById('nextBtn3').style.display = 'none';
	}
}

// Calculate result based on answers
function calculateResult() {
	const resultImageContainer = document.getElementById('resultImageContainer');
	const resultText = document.getElementById('resultText');

	// Combine answers
	const answers = answer1 + answer2 + answer3;

	// Determine the result based on answers
	let resultImage = '';
	let resultMessage = '';

	switch (answers) {
		case 'AAA':
			resultImage = 'Dydy.jpeg';
			resultMessage = "You can't spend all your time eating and not IN HERO TRAINING??? but go off I guess..";
			break;
		case 'AAB':
			resultImage = 'IMG_20240304_131346_631.png';
			resultMessage = "Whoops...you need to hang on for your meals!!! Don't give up!";
			break;
		case 'AAC':
			resultImage = 'Tumblr_l_516229372.jpg';
			resultMessage = "YEA YOU GOT THIS!!!!!";
			break;
		case 'ABA':
			resultImage = 'FrodESRXwAAmkZP.jpeg';
			resultMessage = "You may stress out but know you will TRIUMPH!!!";
			break;
		case 'ABB':
			resultImage = 'IMG_20220721_051350.jpg';
			resultMessage = "CORRECT! NUTRIENTS AND DETERMINATION WILL GET YOU ANYWHERE!";
			break;
		case 'ABC':
			resultImage = 'IMG_20220221_163605.jpg';
			resultMessage = "You're not gonna give up I KNOW IT YOU CAN BEAT THE struggling artist allegations.";
			break;
		case 'ACA':
			resultImage = 'FwIKLjuWYAIuAGq.jpeg';
			resultMessage = "YOU'RE gonna be the BEST W THE ENERGY U HAVE!";
			break;
		case 'ACC':
			resultImage = 'GFyo3fQa4AAfUlk.jpeg';
			resultMessage = "WITH this will you'll do anything";
			break;


		case 'BAA':
			resultImage = 'Screenshot_20240315_001613_Opera.jpg';
			resultMessage = "dynamight says eye on the PRIZE";
			break;
		case 'BAB':
			resultImage = 'GHO3vI9W0AATXds.jpeg';
			resultMessage = "dynamight says try AGAIN";
			break;
		case 'BAC':
			resultImage = 'Ddd.jpeg';
			resultMessage = "corporate life sucks i know";
			break;
		case 'BBA':
			resultImage = 'Screenshot_20240314_013721_Opera.jpg';
			resultMessage = "The center spot was made for you.";
			break;

		case 'BBB':
			resultImage = 'IMG_20220721_051348.jpg';
			resultMessage = "hottie <3";
			break;
		case 'BBC':
			resultImage = 'IMG_20220721_051348.jpg';
			resultMessage = "hottie <3";
			break;
		case 'BCA':
			resultImage = 'Tumblr_l_747306078884667.jpg';
			resultMessage = "you will progress~~~~~~~";
			break;
		case 'BCB':
			resultImage = 'Screenshot_20240314_015328_Opera.jpg';
			resultMessage = "bakugou mask :)";
			break;
		case 'BCC':
			resultImage = 'Ggg.jpg';
			resultMessage = "WITH this will you'll do anything :)";
			break;
		case 'CAA':
			resultImage = 'Ggg.jpg';
			resultMessage = "WHEWWWWWWWW";
			break;
		case 'CAB':
			resultImage = 'EdueIUXU0AAbdYU.jpeg';
			resultMessage = "remember to exercise";
			break;
		case 'CAC':
			resultImage = 'EdueIUXU0AAbdYU.jpeg';
			resultMessage = "remember to exercise";
			break;
		case 'CBA':
			resultImage = 'Screenshot_20240315_004230_Opera.jpg';
			resultMessage = "yeaaaaaaaaaa";
			break;
		case 'CBB':
			resultImage = 'Tt.jpeg';
			resultMessage = "popular ;)";
			break;
		case 'CBC':
			resultImage = 'Ggg.jpg';
			resultMessage = "WHEWWWWWWWW";
			break;
		case 'CCA':
			resultImage = 'GFyo3fQa4AAfUlk.jpeg';
			resultMessage = "You're adapting well, success is in your future!";
			break;
		case 'CCB':
			resultImage = 'IMG_20220721_051350.jpg';
			resultMessage = "im tired have a bakugou";
			break;
		case 'CCC':
			resultImage = 'Tumblr_l_755273888979314.jpg';
			resultMessage = "get coffee";
			break;

		default:
			resultImage = 'Screenshot_20240314_013721_Opera.jpg';
			resultMessage = "You have unique potential!";
			break;
	}

	resultImageContainer.innerHTML = `<img src="assets/images/${resultImage}" alt="Result Image">`;
	resultText.textContent = resultMessage;

	// Show result page
	document.getElementById('quizPage').style.display = 'none';
	document.getElementById('result').style.display = 'block';
}

// Restart the quiz when the button is clicked
document.getElementById('restartQuizBtn').addEventListener('click', () => {
	window.location.reload();
});

