import { getHtmlIds, saveTransaction, saveSesionData, userExpenseData, updateExpenseData, showData } from "./module.js";
const btnAddTransaction = getHtmlIds("add-transaction");
/* form input */
const inpAmount = getHtmlIds("amount");
const inpDescription = getHtmlIds("description");

const updateTransaction = (amount, description) => {
    saveTransaction(amount, description);
    updateExpenseData(userExpenseData);
    saveSesionData(userExpenseData);
    showData(userExpenseData);


}

btnAddTransaction.addEventListener("click", () => updateTransaction(inpAmount.value, inpDescription.value))
