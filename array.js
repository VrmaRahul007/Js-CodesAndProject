//array
const myArr=[0,1,2,3,4,5,"hitesh"]
const myHeros = ["Shaktiman","Nagraj"]
const myArr2 = new Array(2,4,5,6,7)
console.log(myArr[6]);
//array methods

// myArr.push(6)
// myArr.push(9)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr=myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);
const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);

const marvel_heros =["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros= marvel_heros.concat(dc)
// console.log(allheros);

// const all_new_heros=[...marvel_heros,...dc]
// console.log(all_new_heros);

// const anothername=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = anothername.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("hitesh"))
// console.log(Array.from("hitesh"))
// console.log(Array.from({name:"hitesh"})); //intresting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


