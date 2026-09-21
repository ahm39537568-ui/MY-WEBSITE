
let points = Number(localStorage.getItem("taskPoints")) || 0;

function updateBalance() {
  document.getElementById("points").textContent = points;
}

function completeTask(reward, taskId) {

  if (localStorage.getItem(taskId)) {
    alert("You have already completed this task.");
    return;
  }

  points += reward;

  localStorage.setItem("taskPoints", points);
  localStorage.setItem(taskId, "completed");

  updateBalance();

  alert("Task completed! You earned " + reward + " points.");
}

function requestWithdrawal() {

  const method = document.getElementById("method").value;
  const account = document.getElementById("account").value.trim();
  const amount = Number(document.getElementById("withdrawPoints").value);

  if (amount < 500) {
    document.getElementById("withdrawMessage").textContent =
      "Minimum withdrawal is 500 points.";
    return;
  }

  if (amount > points) {
    document.getElementById("withdrawMessage").textContent =
      "You do not have enough points.";
    return;
  }

  if (account.length < 10) {
    document.getElementById("withdrawMessage").textContent =
      "Please enter a valid account number.";
    return;
  }

  document.getElementById("withdrawMessage").textContent =
    "Withdrawal request submitted for " +
    amount + " points through " + method +
    ". It will require admin approval.";

  points -= amount;
  localStorage.setItem("taskPoints", points);

  updateBalance();
}

updateBalance();
