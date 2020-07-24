//Global
    //Local
     //Local
    //Local

//let name = 'Nadia';

if(true) {
    //let name = 'Mike' // It is variable shadowing
    if(true){
        name = 'jen'; // it is a leaked global. it is treated as a global variable as it is leaked because it was not defined as let name = 'jen'. Inorder to fix the leaked global, we need to define either in the global or 
                        // or local scope as let name = 'jen'
        console.log(name);
    }
}

if (true) {
    console.log(name);
}