 let myDate=new Date()
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(typeof myDate);

// let myCreatedate=new Date(2023,0,23,5,3)
// let myCreatedate=new Date("2023-01-14")
let myCreatedate=new Date("01-14-2023")
// console.log(myCreatedate.toDateString());
// console.log(myCreatedate.toLocaleString());
let myTimestamp=Date.now()
// console.log(myTimestamp);
// console.log(myCreatedate.getTime());
// console.log(Math.floor(Date.now()/1000));

let Newdate=new Date()
console.log(Newdate.getMonth()+1);
console.log(Newdate.getDay());
// `${Newdate.getDate()}` and the time
Newdate.toLocaleString('default',
    {
        weekday: "long",
        
    }
)






