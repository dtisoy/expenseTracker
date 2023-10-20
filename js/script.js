import { getHtmlIds, addTransactionRow, saveTransaction } from "./module.js";
const btnAddTransaction = getHtmlIds("add-transaction");
/* form input */
const inpAmount = getHtmlIds("amount");
const inpDescription = getHtmlIds("description");

const updateTransaction = (amount, description) => {
    addTransactionRow(amount, description);
    saveTransaction(amount, description)

}

btnAddTransaction.addEventListener("click", () => updateTransaction(inpAmount.value, inpDescription.value))
