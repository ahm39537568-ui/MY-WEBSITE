
let balance = Number(localStorage.getItem("balance")) || 0;
let completed = Number(localStorage.getItem("completed")) || 0;

function updateWallet() {
  document.getElementById("balance").textContent = balance;
  document.getElementById("completed").textContent = completed;
  document.getElementById("withdrawBalance").textContent = balance;
}

function completeTask(reward, button) {

  if (button.disabled) {
    return;
  }

  balance += reward;
  completed += 1;

  localStorage.setItem("balance", balance);
  localStorage.setItem("completed", completed);

  button.textContent = "Completed ✓";
  button.disabled = true;

  updateWallet();

  alert("Task completed! You earned Rs. " + reward);
}

function requestWithdrawal() {

  let amount = Number(
    document.getElementById("withdrawAmount").value
  );

  let method =
    document.getElementById("paymentMethod").value;

  let account =
    document.getElementById("accountNumber").value.trim();

  let message =
    document.getElementById("withdrawMessage");

  if (amount <= 0) {
    message.textContent = "Please enter a valid amount.";
    return;
  }

  if (amount > balance) {
    message.textContent = "Insufficient balance.";
    return;
  }

  if (method === "") {
    message.textContent = "Please select a payment method.";
    return;
  }

  if (account === "") {
    message.textContent = "Please enter your account number.";
    return;
  }

  message.textContent =
    "Withdrawal request submitted for Rs. " +
    amount +
    " via " +
    method +
    ".";

  /*
    IMPORTANT:
    This demo does NOT actually send money.
    A real withdrawal system needs a secure backend,
    database and payment-provider integration.
  */
}

updateWallet();
