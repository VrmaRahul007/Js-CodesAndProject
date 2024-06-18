//for
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5)
        {
            // console.log("5 is best");
        }
        // console.log(element);   
}
for (let i = 1; i < 10; i++) {
    // console.log(`Outer Loop value : ${i}`)
    for (let j = 1; j < 10; j++) {
        // console.log(`Outer Loop value : ${j} and inner loop ${i}`)

        // console.log(i + '*' + j + '='+ i*j)
        
    }    

}
let Myarray=["Flash","batman","Superman"]
for (let index = 0; index < Myarray.length; index++) {
    const element = Myarray[index];
    console.log(element);
    
}

//break AND CONTINUE

// for (let index = 1; index <=20; index++) {
//     if(index==5)
//    { console.log("detected 5");
//      break
// }   
//     console.log(`value of i is: ${index}`);

// }
for (let index = 1; index <=20; index++) {
    if(index==5)
   { console.log("detected 5");
     continue
}   
    console.log(`value of i is: ${index}`);

}

//array Loops

// ["","",""]
// [{}, {}, {}]

const arr=[1,2,3,4,5]
for (const num  of arr) {
    // console.log(num);
    
}
const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


//MAps

const map=new Map()
map.set('US',"United State america")
map.set('IN',"India")
map.set('Fr',"France")

console.log(map)

for (const [Key,value] of map) {
    // console.log(Key,':-',value)
    
}
const Mybject={
    game1:'NFS',
    game2:'Spiderman'
}
// for (const [key,vaue] of Mybject) {
//     console.log(Key,':-',value)
// }

const MyObject={
    js:'Javascript',
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by apple"
    
}
for (const key in MyObject) {
    console.log(MyObject[key]);
    
}

const programming=["js","rb","py","java","cpp"]
for (const key in programming) {

console.log(programming[key]);  

}


