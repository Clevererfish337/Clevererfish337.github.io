document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let score = 0;
  let total = 5;
  let resultsHTML = "<h2>Quiz Results</h2><ul>";

  // Question 1
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1) {
    if (q1.value === "1") {
      score++;
      resultsHTML += "<li>Question 1: Correct &#10004;</li>";
    } else {
      resultsHTML += "<li>Question 1: Incorrect &#10006; (Correct: 2014)</li>";
    }
  } else {
    resultsHTML += "<li>Question 1: No answer &#10006;(Correct: 2014)</li>";
  }

  // Question 2 (multiple correct)
  const q2 = document.querySelectorAll('input[name="q2"]');
  let q2Correct = [true, true, false, false];
  let allCorrect = true;
  q2.forEach((checkbox, index) => {
    if (checkbox.checked !== q2Correct[index]) {
      allCorrect = false;
    }
  });
  if (allCorrect) {
    score++;
    resultsHTML += "<li>Question 2: Correct &#10004;</li>";
  } else {
    resultsHTML += "<li>Question 2: Incorrect &#10006;(Correct: WebAuthn, Content Security Policy)</li>";
  }

  // Question 3
  const q3 = document.querySelector('input[name="q3"]:checked');
  if (q3) {
    if (q3.value === "1") {
      score++;
      resultsHTML += "<li>Question 3: Correct &#10004;</li>";
    } else {
      resultsHTML += "<li>Question 3: Incorrect &#10006;(Correct: Web Content Accessibility Guidelines)</li>";
    }
  } else {
    resultsHTML += "<li>Question 3: No answer &#10006;(Correct: Web Content Accessibility Guidelines)</li>";
  }

  // Question 4 (fill-in-the-blank)
  const q4 = document.getElementById("q4").value.trim().toLowerCase();
  const correctQ4Answers = ["tim berners-lee", "berners-lee", "tim berners lee"];
  if (q4) {
    if (correctQ4Answers.includes(q4)) {
      score++;
      resultsHTML += "<li>Question 4: Correct &#10004;</li>";
    } else {
      resultsHTML += "<li>Question 4: Incorrect &#10006;(Correct: Tim Berners-Lee)</li>";
    }
  } else {
    resultsHTML += "<li>Question 4: No answer &#10006;(Correct: Tim Berners-Lee)</li>";
  }

  // Question 5
  const q5 = document.querySelector('input[name="q5"]:checked');
  if (q5) {
    if (q5.value === "1") {
      score++;
      resultsHTML += "<li>Question 5: Correct &#10004;</li>";
    } else {
      resultsHTML += "<li>Question 5: Incorrect &#10006;(Correct: HTML)</li>";
    }
  } else {
    resultsHTML += "<li>Question 5: No answer &#10006;(Correct: HTML)</li>";
  }

  resultsHTML += "</ul>";

  // Pass/Fail determination
  let pass = score >= 3 ? "<strong style='color: green;'>PASS &#10004;</strong>" : "<strong style='color: red;'>FAIL &#10006;</strong>";

  // Display result
  const result = document.getElementById("result");
  result.innerHTML = `<h2>Your Score: ${score} / ${total}</h2>${resultsHTML}<p>${pass}</p>`;
});

function resetQuiz() {
  document.getElementById("quiz-form").reset();
  document.getElementById("result").innerHTML = "";
}
