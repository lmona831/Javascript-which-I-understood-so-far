const account = {
    name : 'Nadia',
    expenses: [],
    addExpense : function (description, amount) {
        this.expenses.push({
            description:description,
            amount:amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0;

        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount;
        })
        
        return `${this.name} has $${totalExpenses} in expenses`
    }
}

// Expenses ---> description, amount
//addExpenses ---> description,ammount
// getAccount Summary ----> total up all expenses. Nadia has $1000 in expenses.


account.addExpense('Rent', 890);
account.addExpense('Coffee',2);

console.log(account.getAccountSummary());