import { getHtmlIds, addTransactionRow } from "./module.js";
const btnAddTransaction = getHtmlIds("add-transaction");
/* form input */
const inpAmount = getHtmlIds("amount");
const inpDescription = getHtmlIds("description");

btnAddTransaction.addEventListener("click", () => addTransactionRow(inpAmount.value, inpDescription.value))
