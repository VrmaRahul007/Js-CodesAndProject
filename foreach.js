const coding=["js","ruby","cpp","python","cpp"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

function PrintMe(item)
{
    console.log(item);
}
// coding.forEach(PrintMe)

coding.forEach((item,index,arr)=> {
    // console.log(item,index,arr);
})

const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:'js'
    },
    {
        languageName:"Java",
        languageFileName:'java'
    },
    {
        languageName:"Python",
        languageFileName:'py'
    }
]
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
})