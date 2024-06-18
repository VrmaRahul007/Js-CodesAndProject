//if
const isUserLoggedIn=true
const temperature=41
// if(2=="2")------>True Dega
    // if(2==="2")------>False Hai
    // if(2!=3)
// if(temperature<50)
//     {
//         console.log("Temperature is less Than 50");
//     }
//     else
//     {
//         console.log("Temperature is More Than 50");
//     }
// <,>,<=,>=,==,!=,===(checks type Also)

// const Score=200
// if(Score>100)
//     {
//         // var power="Fly"----->Scope Outside If bhi
//         let power="fly"
//         console.log(`User Power: ${power}`);
//     }
    // console.log(`User Power: ${power}`);
const balance=1000
// if(balance>500) console.log("Test"),console.log("test 2")

// if(balance < 500)
//     {
//         console.log("less than")   
//     }
//     else if(balance <750)
//  {
//       console.log("Less than 750");
//  }
//  else{
//     console.log("less than 1200");
//  }

 const userLoggedIn=true
 const DebitCard=true
 const LoggedInFromGoogle=false
 const LoggedInFromEmail=true

//  if(userLoggedIn && DebitCard && 2==2){

//     console.log("Allow To Buy Courses");
//  }
// if(LoggedInFromEmail || LoggedInFromGoogle)
//     {
//         console.log("User Logged In")
//     }
//Switch Case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// const month="March"
// switch (month) {
//     case "January":
//         console.log("January");
//         break;
//     case "February":
//         console.log("February");
//         break;
//     case "March":
//         console.log("March");
//         break;
//     case "April":
//         console.log("April");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

//------->truthy
// const Useremail="h@hitesh.ai"
// const Useremail=""
const Useremail=[]
if(Useremail)
    {
        // console.log("Got User email");

    }
    else{
        // console.log("dont have user email");
    }
    //Falsy Values
    // false,0,-0,BigInt 0n,"",null,undefined,NaN

    //truthy Values
    // "0",'false'," ",[],{},function(){}
    if(Useremail.length==0)
        {
            // console.log("Array is Empty");
        }
const emptyObject={}
if(Object.keys(emptyObject).length)
    {
        // console.log("Object is empty");
    }
//Nullish Coalescing operator(??) : null defined
let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15
val1=null ?? 10 ?? 15
// console.log(val1);

//Terniary Operator
// conditon ? true : false 

const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("More than 80")




