// const myNumers=[1,2,3,4,5,6,7,8,9,10]

// // const newNums=myNumers.map((num)=>num+10)
// const newNums=myNumers.
//             map((num)=>num*10).
//             map((num)=> num + 1)

// console.log(newNums);


const myNums=[1,2,3]
// const myTotal=myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval:${currval}`);
//     return acc+currval

// },3)
const myTotal=myNums.reduce( (acc,curr) => acc+curr,0)

console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"mobile dev course",
        price:5999

    },
    {
        itemName:"Data science",
        price:12999
    }
]
const PriceTopay=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(PriceTopay);