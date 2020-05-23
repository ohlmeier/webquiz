
const api = 'https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple'

var correct_answer = ''

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

async function loadQuestion() {
  const response = await fetch('https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple');
  const apiResponse = await response.json(); //extract JSON from the http response
  if (apiResponse["response_code"] == 0) {
    apiResponse["results"].forEach(element => {
      $("#header").html(element["category"])
      $("#question").html(element["question"])
      
      correct_answer = element["correct_answer"]
      var answers = [...element["incorrect_answers"]];
      answers.push(correct_answer)
      var shuffled = shuffle(answers)
      shuffled.forEach(function (value, i) {
        $("#answer" + i).val(value)
      });
    });
  }
}



loadQuestion();