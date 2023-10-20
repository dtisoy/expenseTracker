/* data*/
let userExpenseData = getUserData();
/* balance card */
let txtBalance = getHtmlIds("balance-total");
let txtIncome = getHtmlIds("income-total");
let txtExpense = getHtmlIds("expense-total");


function getUserData() {
    let data = localStorage.getItem("userExpenseData");
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
    saveSesionData(userExpenseData);
}

function saveSesionData(data) {

    let jsonStr = JSON.stringify(data);
    localStorage.setItem("userExpenseData", jsonStr);
}

export { userExpenseData, txtBalance, txtIncome, txtExpense, getHtmlIds, addTransactionRow, getUserData, saveTransaction, saveSesionData }