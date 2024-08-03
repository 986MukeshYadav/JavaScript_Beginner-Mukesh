// let myname="Mukesh    ";
// let mychannel="Code   ";

//console.log(myname.trueLength);

let myHeros = ["Thoer","SpiderMan"]

let heroPower={
    thor:"hammer",
    spiderMan:"webslinger",
   
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderMan}`);
    }
}

Object.prototype.mukesh = function(){
    console.log(`Mukesh's is present in all object`);
}

Array.prototype.heyMukesh = function(){
    console.log(`Mukesh says hello`);
}
// heroPower.mukesh()
// myHeros.mukesh()
// myHeros.heyMukesh()
// heroPower.heyMukesh()


//inheritance

const User={
    name:"Mukesh",
    emai:"mky@google.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailabe:false
}

const TASupport ={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "HamTum    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`);
}
anotherUsername.trueLength()
"Rajkumar".trueLength()
"iceCream".trueLength()
