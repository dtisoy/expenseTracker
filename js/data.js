/*script to manage saved data*/
import { userExpenseData, txtBalance, txtIncome, txtExpense, addTransactionRow, getUserData, saveSesionData } from "./module.js";
/* DOM variables */


/* workflow */
// no user data stored then set default data
if (!userExpenseData) {
    setDefaultSchema();
    userExpenseData = getUserData();
}

showData(userExpenseData);


/* funtions */
function setDefaultSchema() {
    let expenseTrackerSchema = {
        balance: 0,
        expense: 0,
        income: 0,
        transactions: [
        ]
    }
    saveSesionData(expenseTrackerSchema);
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