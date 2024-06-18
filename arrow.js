const user = {
    userName:"Hitesh",
    price:799,

    WelcomeMessage:function(){
        console.log(`${this.userName}, Welcome To website`);
        console.log(this);
    }

}
// user.WelcomeMessage()
// user.userName="Sam"
// user.WelcomeMessage()

// console.log(this);


// function chai(){
//     let username="Hitesh"
//     console.log(this.username);
// }

// chai()


const chai= () => {

    let username="hitesh"
    console.log(this);
}

// chai()

// const addtwo=(num1,num2) => {
//     return num1+num2

// }
// const addtwo=(num1,num2) => num1+num2
// const addtwo=(num1,num2) => (num1+num2)
// const addtwo=(num1,num2) => ({username:"hitesh"})

console.log(addtwo(12,4));

const myarray=[23,5,6,7,2]
// myarray.forEach()
