const user = {
    username:"Mukesh",
    loginCount: 9,
    signedIn: true,

    getUserDetails:function(){
        // console.log("Got user details form database");
        // console.log (`Username:${this.name}`);
        console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


//  Constructor

function User(username,loginCount,signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Hello ${this.username}`);
    }

    return this
}
const userOne = new User("kumar" , 15,true)
const userTwo = new User("yadav",5,true)
console.log(userOne);
console.log(userTwo);