
let balance = Number(localStorage.getItem("balance")) || 0;
let completed = Number(localStorage.getItem("completed")) || 0;

document.getElementById("balance").textContent = balance;
document.getElementById("completed").textContent = completed;

function completeTask(reward, button) {

  balance += reward;
  completed += 1;

  localStorage.setItem("balance", balance);
  localStorage.setItem("completed", completed);

  document.getElementById("balance").textContent = balance;
  document.getElementById("completed").textContent = completed;

  button.textContent = "Completed ✓";
  button.disabled = true;

  alert("Task completed! You earned Rs. " + reward);
}

function withdrawMoney() {

  let name = document.getElementById("name").value;
  let method = document.getElementById("method").value;
  let account = document.getElementById("account").value;
  let amount = Number(document.getElementById("amount").value);

  let message = document.getElementById("withdrawMessage");

  if (!name || !method || !account || !amount) {
    message.textContent = "Please fill all fields.";
    return;
  }

  if (amount < 100) {
    message.textContent = "Minimum withdrawal is Rs. 100.";
    return;
  }

  if (amount > balance) {
    message.textContent = "Insufficient balance.";
    return;
  }

  message.textContent =
    "Withdrawal request submitted successfully. Amount: Rs. " +
    amount +
    " via " +
    method;

  balance -= amount;

  localStorage.setItem("balance", balance);

  document.getElementById("balance").textContent = balance;
}
