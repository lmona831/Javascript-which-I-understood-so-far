let myAccount = {
    name:'Nadia',
    expenses:0,
    income:0
}

let addExpense = function(account,amount){
    account.expenses = account.expenses + amount;
}

let addIncome = function (account,amount) {
    account.income = account.income + amount;
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let accountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name}  has ${balance} in balance and $${account.income} in income. $${account.expenses} in expenses`;
}

addIncome(myAccount,2000);
addExpense(myAccount,2.50);
addExpense(myAccount, 160);
console.log(accountSummary(myAccount));
resetAccount(myAccount);
console.log(accountSummary(myAccount));