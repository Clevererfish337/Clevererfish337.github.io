document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let score = 0;

  // Question 1
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "1") score++;

  // Question 2 (multiple correct)
  const q2 = document.querySelectorAll('input[name="q2"]');
  let q2Correct = [true, true, false, false];
  let allCorrect = true;
  q2.forEach((checkbox, index) => {
    if (checkbox.checked !== q2Correct[index]) {
      allCorrect = false;
    }
  });
  if (allCorrect) score++;

  // Question 3
  const q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === "1") score++;

  // Question 4
  const q4 = document.getElementById("q4").value.trim().toLowerCase();
  if (q4 === "tim berners-lee" || q4 === "berners-lee" || q4 === "tim berners lee") score++;

  // Question 5
  const q5 = document.querySelector('input[name="q5"]:checked');
  if (q5 && q5.value === "1") score++;

  // Display result
  const result = document.getElementById("result");
  result.innerHTML = `<h2>Your Score: ${score} / 5</h2>`;
});

function resetQuiz() {
  document.getElementById("quiz-form").reset();
  document.getElementById("result").innerHTML = "";
}
