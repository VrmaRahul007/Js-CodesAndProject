

function SaymyName()
{
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
}
// SaymyName()

function Addtwonumber(number1,number2)
{

    
    // console.log(number1+number2);
    let result = number1+number2
    console.log("Hitesh");
    return result
    // console.log("Hitesh");

 }
    // Addtwonumber(3,"5")
    // console.log(3,"a");
    const result=Addtwonumber(3,7)
    // console.log(result);

function loginuser(username="Sam")
{   
    if(!username){
        console.log("Please enter username");
        return 
    }
    return `${username} just logged in`
}
//  console.log(loginuser("hitesh"))
//  console.log(loginuser());
//  console.log(loginuser("hitesh"))

 function calculateCartPrice(val1,val2,...num1){
    return num1

 }
//  console.log(calculateCartPrice(200,400,600,2000,390))

const user={
    username:"hitesh",
    price:290
}
 function handleObjet(anyobject)
 {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

 }
//  handleObjet(user)
handleObjet(
    {username:"sam",
        price:500
    }
)
const MynewArr = [200,400,100,600]
function returnSecondvalue(getArray)
{
    return getArray
}
// console.log(returnSecondvalue(MynewArr))
console.log(returnSecondvalue([200,400,500,600]))

