// VARIABLES

const myQuestions = [
	{
		question: "Which month of the year has the least number of days?",
		answers: {
			a: 'december',
			b: 'february',
			c: 'april'
		},
		correctAnswer: 'b'
	},
    {
        question: "How many days are there in a year?",
        answers: {
            a: '365',
            b: '465',
            c: '265'
        },
        correctAnswer: 'a'
    },
	{
		question: "How many days do we have in a week?",
		answers: {
			a: '3',
			b: '5',
			c: '7'
		},
		correctAnswer: 'c'
	},
    {
        question: "Which animal is known as the ‘Ship of the Desert?’",
        answers: {
            a: 'cow',
            b: 'camel',
            c: 'lion'
        },
        correctAnswer: 'b'
    },
    {
        question: "Which is the largest country in the world?",
        answers: {
            a: 'India',
            b: 'Australia',
            c: 'Russia'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is 90/3?",
        answers: {
            a: '10',
            b: '30',
            c: '50'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 50+50?",
        answers: {
            a: '100',
            b: '200',
            c: '300'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which country is called the land of rising sun?",
        answers: {
            a: 'korea',
            b: 'Australia',
            c: 'Japan'
        },
        correctAnswer: 'c'
    },
    {
        question: " How many letters are there in the English alphabet?",
        answers: {
            a: '25',
            b: '26',
            c: '27'
        },
        correctAnswer: 'b'
    },
    {
        question: "How can we take breathe",
        answers: {
          a: "by eyes",
          b: "by hands",
          c: "by nose"
        },
        correctAnswer: "c"
    }
];

// SELECTORS

const quizContainer = document.querySelector(".quiz");
const submitButton = document.querySelector(".submit");
const resultsContainer = document.querySelector(".results");
const genQuizButton = document.querySelector(".gen-quiz");
const filterQuestions = document.querySelector(".filter-questions");
const getResultDiv = document.querySelector("#get-result-div");

// EVENT LISTENER

genQuizButton.addEventListener("click", showQuestions);
submitButton.addEventListener("click", showResults);

// FUNCTIONS

let output = [];

function showQuestions(event){
    // Place to store the output and the answer choices

    let answers;

    // for each question...
    for(let i=0; i<filterQuestions.value; i++){

        // first reset the list of answers
        answers = [];

        // for each available answer...
        for(letter in myQuestions[i].answers){

            // add a html radio button
            answers.push(
                '<label class="label">'
                    + '<input type="radio" class="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + myQuestions[i].answers[letter]
                + '</label>'
            );
        }

        // add this question and its answers to the output
        output.push(
            '<div class="question">' + (i+1) + '. ' + myQuestions[i].question + '</div>'
            + '<div class="answers"> <span class="check">' + answers.join('') + '</span> </div>'
        );
    }

    // finally combine output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
    getResultDiv.style.visibility = "visible";

}


function showResults(event){

    // gather answer containers from our quiz
    let answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let userAnswer = '';
    let numCorrect = 0;

    // for each question...
    for(let i=0; i<filterQuestions.value; i++){

        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        const check = answerContainers[i].querySelector(".check");
        check.addEventListener("click", function(event){
            console.log(event);
        });

        // if answer is correct
        if(userAnswer===myQuestions[i].correctAnswer){
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
            // color the answers red
            answerContainers[i].style.color = 'red';
        }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + filterQuestions.value;
}
