function getNameOfUser(firstName, lastName) {
    const myFullName = firstName + " " + lastName;
    return myFullName;
};

// console.log(myFullName); // ReferenceError: myFullName is not defined
console.log(getNameOfUser('Ha', "Em"));
