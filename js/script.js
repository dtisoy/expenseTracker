// get the button
const btnAddTransaction = getHtmlIds("add-transaction");
const listTransactions = getHtmlIds("transaction-list");
// add event listener on click
btnAddTransaction.addEventListener("click", addTransaction)
// create a function for the event listener
// function adds another row with the given data in transaction list
function addTransaction() {
    // get the amount input and desc input values
    const inpAmount = getHtmlIds("amount");
    const inpDescription = getHtmlIds("description");
    // update list
    // get a copy of a list item
    let itemli = document.querySelector(".list-item").cloneNode(true);
    let [itemliAmunt, itemliDesc] = itemli.children;
    [itemliAmunt.textContent, itemliDesc.textContent] = [inpAmount.value, inpDescription.value];
    // add new row
    listTransactions.appendChild(itemli);
    // clear input fields
    [inpAmount.value, inpDescription.value] = ["", ""];



}

function getHtmlIds(elementId) {
    return document.getElementById(elementId);
}