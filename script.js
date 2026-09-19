
let points = Number(localStorage.getItem("points")) || 0;
let completed = Number(localStorage.getItem("completed")) || 0;

function updateDisplay() {
    document.getElementById("balance").textContent = points + " Points";
    document.getElementById("completed").textContent = completed;
    document.getElementById("profilePoints").textContent = points;
}

function completeTask(button, reward) {
    if (button.disabled) return;

    points += reward;
    completed++;

    button.textContent = "Completed ✓";
    button.disabled = true;

    localStorage.setItem("points", points);
    localStorage.setItem("completed", completed);

    updateDisplay();
}

function withdraw() {
    const message = document.getElementById("withdrawMessage");

    if (points < 500) {
        message.textContent =
            "You need at least 500 points to request a withdrawal.";
        return;
    }

    message.textContent =
        "Withdrawal request submitted for review.";
}

updateDisplay();
