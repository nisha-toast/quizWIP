// Variables to store user's answers
let answer1 = "";
let answer2 = "";
let answer3 = "";

// // Go to the quiz page when the user clicks "Start the Quiz"
// document.getElementById('startQuizBtn').addEventListener('click', () => {
//     // Hide the ground rules and show the quiz page
//     document.getElementById('groundRules').style.display = 'none';
//     document.getElementById('quizPage').style.display = 'block';
    
//     // Hide the "Start Quiz" button after starting the quiz
//     document.getElementById('startQuizBtn').style.display = 'none';
    
//     // Show the first question
//     showQuestion(1);
// });

// Go to the quiz page when the user clicks "Start the Quiz"
document.getElementById('startQuizBtn').addEventListener('click', () => {
    // Hide the ground rules and show the quiz page
    document.getElementById('groundRules').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
    
    // Hide the "Start Quiz" button after starting the quiz
    document.getElementById('startQuizBtn').style.display = 'none';
    
    // Reset answers and hide all questions
    answer1 = answer2 = answer3 = '';
    hideAllQuestions();
    
    // Show the first question
    showQuestion(1);
});

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
	showQuestion(nextQuestion);
	document.getElementById(`question${nextQuestion - 1}`).style.display = 'none';
	document.getElementById(`question${nextQuestion}`).style.display = 'block';
	if (nextQuestion === 3) {
		document.getElementById('nextBtn3').style.display = 'none';
	}
}

 function showQuestion(questionNumber) {
            const questions = document.querySelectorAll('.question');
            // Hide all questions
            questions.forEach(question => question.style.display = 'none');
            // Show the current question
            document.getElementById(`question${questionNumber}`).style.display = 'block';
        }

// Hide all questions
function hideAllQuestions() {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => question.style.display = 'none');
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
			resultImage = 'Tumblr_l_516229382419372.jpg';
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

	// resultImageContainer.innerHTML = `<img src="assets/images/${resultImage}" alt="Result Image">`;
	// resultText.textContent = resultMessage;

	// // Show result page
	// document.getElementById('quizPage').style.display = 'none';
	// document.getElementById('result').style.display = 'block';


 //    // Show the result page
 //    document.getElementById('result').style.display = 'block';
	// Set the result image and message
    setResultImage(resultImage);  // Calls the new setResultImage function
    resultText.textContent = resultMessage;

    // Show result page
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}

// Set the result image dynamically
function setResultImage(resultImage) {
    const resultImageContainer = document.getElementById('resultImageContainer');
    resultImageContainer.innerHTML = ''; // Clear the previous image before adding a new one
    
    // Create an img element
    const imgElement = document.createElement('img');
    imgElement.src = `assets/images/${resultImage}`;
    imgElement.alt = 'Result Image';
    
    // Append the image to the container
    resultImageContainer.appendChild(imgElement);
}


// Restart the quiz when the button is clicked
document.getElementById('restartQuizBtn').addEventListener('click', () => {
    // Show the ground rules and start the quiz again
    document.getElementById('groundRules').style.display = 'block';
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('result').style.display = 'none';

    // Show the "Start Quiz" button again
    document.getElementById('startQuizBtn').style.display = 'block';

    // Reset the answers
    answer1 = answer2 = answer3 = '';

    // Ensure only the "Start Quiz" button and ground rules are visible
    document.getElementById('startQuizBtn').style.display = 'block';

    // Ensure the first question is displayed after restarting
    showQuestion(1);
});
