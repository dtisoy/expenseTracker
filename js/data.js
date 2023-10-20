/*script to manage saved data*/
import { userExpenseData, getUserData, saveSesionData, showData } from "./module.js";
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


