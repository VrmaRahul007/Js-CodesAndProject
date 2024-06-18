// const tinderuser=new Object()
const tinderuser={}

tinderuser.id="11223abc"
tinderuser.name="Sammy"
tinderuser.isLoggedin=false

// console.log(tinderuser);

const regularuser={
    email:"Some@gmail.com",
    fullname:{
        userfullname:
        {
            firstname:"Hitesh",
            lastname:"chaudhary"
        }

    }
}
// console.log(regularuser.fullname?.userfullname.lastname);

const obj1={ 1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"h",6:"d"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com",
    },
    {

    },
]
users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


// console.log(tinderuser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename:"Js in Hindi",
    price:"999",
    courseinstructor:"hitesh"
}

// course.courseinstructor

const {courseinstructor : instructor} = course
// console.log(courseinstructor);
console.log(instructor);

//jSon

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}

]





