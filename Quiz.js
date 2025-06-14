function checkAnswer() {
    const correctAnswer = "4"; // Example correct answer

    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! well done.";
        } else {
            document.getElementById("feedback").textContent = "Incorrect.";
        }
    } else {
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", checkAnswer);