function concatenateNames(fName, sName, del){
    let firstName = fName;
    let secondName = sName;
    let delimiter = del;
   
    console.log(`${firstName}${delimiter}${secondName}`);
}

concatenateNames('John','Smith','->');
concatenateNames('Linda','Terry','=>');
concatenateNames('Angel', 'Devils', '>>>>>')