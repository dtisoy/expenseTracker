const btnAddTransaction = getHtmlIds("add-transaction");
const listTransactions = getHtmlIds("transaction-list");
/* form input */
const inpAmount = getHtmlIds("amount");
const inpDescription = getHtmlIds("description");

btnAddTransaction.addEventListener("click", () => addTransactionRow(inpAmount.value, inpDescription.value))

/* functions */
function addTransactionRow(amount, description) {
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

function getHtmlIds(elementId) {
    return document.getElementById(elementId);
}