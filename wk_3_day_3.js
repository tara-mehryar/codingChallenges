// Create a User class. This class will receive the user's first & last name, a username, a password, and an email. It will also have a 
// "subscribed" property which will be false by default.
// Create a subscribe method. This method will set "subscribed" to true if it is false, and false if it is true, and return a 
// string relevant to their new subscription status.
// Instantiate 5 new Users, and push them into an array.
// Create a function which receives an array. This function will call the subscribe method on any user whose name starts with "S", "M", or "L".
// Use the forEach method.
// Create a function which receives an array. This function will return a new array with only subscribed users.
// Create a function called "hack". This function will receive an array and return it with all the user values updated to your information.
// Use the map method.

class User {
    constructor(firstName, lastName, username, password, email){
        this.first = firstName
        this.last = lastName
        this.user = username
        this.password = password
        this.email = email


        this.subscribe = false
    }

    subscribe = () => {
        if(this.subscribed){
            this.subscribed = false
            return `${this.user} has unsubscribed.`
        } else {
            this.subscribed = true
            return `${this.user} has subscribed. Welcome!`
        }
    }
}


let tara = new User('tara','mehryar','tmehryar','password','tmehryar@icloud.com')
let john = new User('john', 'jacob', 'jjacob', 'passw0rd', 'jjacobs@icloud.com')
let sarah = new User('sarah', 'smith', 'ssmith', 'password1', 'ssmith@icloud.com')
let jack = new User('jack', 'morris', 'jmorris', 'password2', 'jmorris@icloud.com')
let lauren = new User('lauren', 'doe', 'ldoe', 'password4', 'ldoe@icloud.com')


function subscribeUsersWithStartingLetters(arr){
    arr.forEach(user => {
        const firstLetter = user.firstName.toUppercase();
        if (firstLetter === 'S' || firstLetter === 'M' || firstLetter === 'L'){
            user.subscribe();
        }
    });
}

function getSubscribedUsers(arr){
    return arr.filter(user => user.subscribed);
}

function hack(arr){
    return arr.map(user => ({
        ...user,
        firstName: 'Sam',
        lastName: 'Smith',
        username: 's.smith',
        password: 'passwordsmith',
        email: 's.smith@icloud.com'
    }));
}

subscribeUsersWithStartingLetters(users);

console.log('Subscribed Users:');
console.log(getSubscribedUsers(users));
console.log(subscribedUsers);