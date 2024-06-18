//Singleton
// Object.create

//object literals
const mySym=Symbol("key1")

const JsUser={
    name:"Hitesh",
    "full name":"Hitesh Chaudhary",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastlogindays:["Monday","Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// myarray=["h","i"]
// console.log(myArr[0]);

JsUser.email="hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="microsoft.com"
// console.log(JsUser);

JsUser.greeting=function()
{
    console.log("Hello js User");
}

JsUser.greetingtwo=function()
{
    console.log(`Hello js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

