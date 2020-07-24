
//Javascript uses lexical scoping(static scope)
// Global Scope - Defined outside of all code block.
//Local Scope - Defined inside a code block

//In a scope, you can access variables defined in that scope, or in other parent/ancestor scope

//varOne is a global scope
    //varTwo is a local scope
    //varThree is a local scope

let varOne = 'varOne';

if(true) {
    console.log(varOne);
    let varTwo ='varTwo';

    if(true){
        let varfour = 'varfour';
    }
}
if(true) {
    let varThree = 'varThree';
}

console.log(varTwo);