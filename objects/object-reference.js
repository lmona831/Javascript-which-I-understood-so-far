let myAccount = {
    name:'Nadia',
    expenses:0,
    income:0
}

// Another way of creating different object which have access to previous objects .

let otherAccount = myAccount;
otherAccount.income = 1000;
otherAccount = {}
console.log(otherAccount);


let addExpenses = function(account,ammount) {
    
    //account = {} // it does not point to myAccount and the output will not be same
    account.expenses = account.expenses + ammount,
    console.log(account);
}

addExpenses(myAccount,4.50);
console.log(myAccount);

// both of the objects are same, that is because myAccount is pointer to the objects name,expenses and income. So, addExpense also point to the same object in the memory. so, the output are same. That is object by reference 