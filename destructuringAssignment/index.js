// # Destructuring Assignment
// ## Array Matching
// > Intuitive and flexible destructuring of Arrays into individual variables during assignment.
const peoples = ["Sam", "Jame", "Brown", "John", "Em"];
const [sam, jame, ...other] = peoples;
console.log({sam, jame, other});

// Default Values of Arrays.
const [,, brown,,, william = "William"] = peoples;
console.log({brown, william});

// ## Object Matching, Shorthand Notation
// > Intuitive and flexible destructuring of Objects into individual variables during assignment.
const userInfo = {
    firstName: "Anthony",
    lastName: "William",
    age: 27,
    address: "NYC",
    avatar: "https://picsum.photos/720",
    // ## Deep Matching
    phones : {
        home: '777',
        company: '666',
        fax: {
            home: '111',
            company: '222'
        }
    }
};

const {
    firstName, lastName, avatar,
    phones: { 
        home, fax: {
            home: faxHome // alias assigment.
        }
    },
    // Default Values of Objects.
    company = "Milky Way",
    // Fail-soft destructuring
    someThingWrong // undefined
} = userInfo;

console.log({firstName, lastName, avatar, home, faxHome, company, someThingWrong});
