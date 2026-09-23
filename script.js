/* =================================
   TASK EARN - WEBSITE JAVASCRIPT
   Demo / Educational Version
   ================================= */


// Get saved wallet data
let balance = Number(localStorage.getItem("taskEarnBalance")) || 0;
let completed = Number(localStorage.getItem("taskEarnCompleted")) || 0;


// Get completed task list
let completedTasks =
  JSON.parse(localStorage.getItem("taskEarnCompletedTasks")) || [];


// =================================
// UPDATE WALLET
// =================================

function updateWallet() {

  const balanceElement = document.getElementById("balance");
  const completedElement = document.getElementById("completed");
  const withdrawBalanceElement =
    document.getElementById("withdrawBalance");

  if (balanceElement) {
    balanceElement.textContent = balance;
  }

  if (completedElement) {
    completedElement.textContent = completed;
  }

  if (withdrawBalanceElement) {
    withdrawBalanceElement.textContent = balance;
  }
}


// =================================
// SAVE DATA
// =================================

function saveData() {

  localStorage.setItem(
    "taskEarnBalance",
    balance
  );

  localStorage.setItem(
    "taskEarnCompleted",
    completed
  );

  localStorage.setItem(
    "taskEarnCompletedTasks",
    JSON.stringify(completedTasks)
  );
}


// =================================
// COMPLETE TASK
// =================================

function completeTask(reward, button) {

  // Find which task button was clicked
  const allTaskButtons =
    document.querySelectorAll(".task-card button");

  const taskNumber =
    Array.from(allTaskButtons).indexOf(button) + 1;


  // Prevent completing the same task twice
  if (completedTasks.includes(taskNumber)) {

    button.textContent = "Completed ✓";
    button.disabled = true;

    return;
  }


  // Add reward
  balance += Number(reward);

  completed += 1;


  // Save task number
  completedTasks.push(taskNumber);


  // Save everything
  saveData();


  // Update button
  button.textContent = "Completed ✓";
  button.disabled = true;


  // Update wallet
  updateWallet();


  // Show message
  alert(
    "Task completed!\n\n" +
    "Demo reward added: Rs. " +
    reward
  );
}


// =================================
// RESTORE COMPLETED TASKS
// =================================

function restoreCompletedTasks() {

  const allTaskButtons =
    document.querySelectorAll(".task-card button");


  allTaskButtons.forEach(function(button, index) {

    const taskNumber = index + 1;


    if (completedTasks.includes(taskNumber)) {

      button.textContent = "Completed ✓";
      button.disabled = true;

    }

  });
}


// =================================
// DEMO WITHDRAWAL
// =================================

function requestWithdrawal() {

  const amountInput =
    document.getElementById("withdrawAmount");

  const methodInput =
    document.getElementById("paymentMethod");

  const accountInput =
    document.getElementById("accountNumber");

  const message =
    document.getElementById("withdrawMessage");


  const amount =
    Number(amountInput.value);

  const method =
    methodInput.value;

  const account =
    accountInput.value.trim();


  // Clear previous message
  message.textContent = "";


  // Validate amount
  if (!amount || amount <= 0) {

    message.textContent =
      "Please enter a valid amount.";

    return;
  }


  // Check balance
  if (amount > balance) {

    message.textContent =
      "Insufficient demo balance.";

    return;
  }


  // Check payment method
  if (method === "") {

    message.textContent =
      "Please select a payment method.";

    return;
  }


  // Check demo account ID
  if (account === "") {

    message.textContent =
      "Please enter a demo account ID.";

    return;
  }


  // Deduct demo balance
  balance -= amount;


  // Save updated balance
  saveData();


  // Update wallet
  updateWallet();


  // Show success message
  message.textContent =
    "Demo withdrawal request submitted: Rs. " +
    amount +
    " via " +
    method +
    ".";


  // Clear form
  amountInput.value = "";
  methodInput.value = "";
  accountInput.value = "";


  alert(
    "Demo withdrawal request submitted!\n\n" +
    "No real money was transferred."
  );
}


// =================================
// START WEBSITE
// =================================

updateWallet();

restoreCompletedTasks();
