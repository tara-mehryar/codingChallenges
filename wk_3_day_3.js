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
        this.firstName;
        this.lastName;
        this.username;
        this.password;
        this.email;
        this.subscribe = false;
    }

    subscribe(){
        this.subscribe = !this.subscribe;
        return this.subscribe ? `${this.username} is now subscribed.` : `${this.username} is now unsubscribed.`;
    }
}

const users = [
    new User('tara','mehryar','tmehryar','password','tmehryar@icloud.com'),
    new User('john', 'jacob', 'jjacob', 'passw0rd', 'jjacobs@icloud.com'),
    new User(),
    new User(),
    new User()
];

function subscribeUsersWithStartingLetters(arr){
    arr.forEach(user => {
        const 
    });
}