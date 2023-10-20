/* data*/
let userExpenseData = getUserData();
/* balance card */
let txtBalance = getHtmlIds("balance-total");
let txtIncome = getHtmlIds("income-total");
let txtExpense = getHtmlIds("expense-total");


function getUserData() {

    const setDefaultSchema = () => {
        let expenseTrackerSchema = {
            balance: 0,
            expense: 0,
            income: 0,
            transactions: [
            ]
        }
        saveSesionData(expenseTrackerSchema);
    }

    let data = localStorage.getItem("userExpenseData");
    if (!data) {
        setDefaultSchema();
        return getUserData();
    }
    return JSON.parse(data);
}

function getHtmlIds(elementId) {
    return document.getElementById(elementId);
}

function addTransactionRow(amount, description) {
    const listTransactions = getHtmlIds("transaction-list");
    let itemli = document.createElement("li");
    itemli.setAttribute("class", "list-item t-normal");


    let itemliAmount = document.createElement("span");
    let itemliDesc = document.createElement("span");

    [itemliAmount.textContent, itemliDesc.textContent] = [amount, description];

    // add amount and description to row item
    itemli.appendChild(itemliAmount);
    itemli.appendChild(itemliDesc);
    // add new row
    listTransactions.appendChild(itemli);

}

function saveTransaction(amount, description) {
    let { transactions } = userExpenseData;
    transactions.push({ amount, description });

}

function updateExpenseData(userExpense) {
    let money = []
    userExpense.transactions.forEach(({ amount }) => {
        money.push(parseInt(amount));
    });
    // a, c -> accumulator, current value
    // get balance
    userExpense.balance = money.reduce((a, c) => a + c, 0);
    // get income
    userExpense.income = money.filter(n => n > 0).reduce((a, c) => a + c, 0);
    // get expense 
    userExpense.expense = money.filter(n => n < 0).reduce((a, c) => a + c, 0);
}

function saveSesionData(data) {

    let jsonStr = JSON.stringify(data);
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
export { userExpenseData, getHtmlIds, getUserData, saveTransaction, saveSesionData, updateExpenseData, showData }