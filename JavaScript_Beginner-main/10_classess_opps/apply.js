// The call() method takes arguments separately.
// The apply() method takes arguments as an array.


function setUsername(username) {
    // Complex DB calls
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password) {
    setUsername.apply(this, [username]); // Using apply with an array of arguments
    this.email = email;
    this.password = password;
}

const mydetails = new createUser("Mukesh", "Mky@google.com", "123");
console.log(mydetails);
