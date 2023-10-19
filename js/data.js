/*script to manage saved data*/
import { txtBalance, txtIncome, txtExpense, addTransactionRow } from "./module.js";
/* DOM variables */


/* workflow */
let userExpenseData = getUserData();

if (!userExpenseData) {
    setDefaultSchema();
    userExpenseData = getUserData();
}
showData(userExpenseData);


/* funtions */
function getUserData() {
    let data = localStorage.getItem("userExpenseData");
    return JSON.parse(data);
}
function setDefaultSchema() {
    let expenseTrackerSchema = {
        balance: 0,
        expense: 0,
        income: 0,
        transactions: [
        ]
    }

    let jsonStr = JSON.stringify(expenseTrackerSchema);
    localStorage.setItem("userExpenseData", jsonStr);
}

function showData({ balance, expense, income, transactions }) {
    txtBalance.textContent = balance;
    txtExpense.textContent = expense;
    txtIncome.textContent = income;
    showTransactionList(transactions)

}

function showTransactionList(list) {
    list.forEach(({ amount, description }) => {
        addTransactionRow(amount, description)
    });
}