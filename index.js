let app = require("./app");

let mynum = [1,2,3,4,5,6,7,7,9,0]

// for(let i=0;i<mynum.length;i++){
//      console.log(mynum[i]>2)
// }

let result = mynum.filter((item)=>{
    return item>2;
})

console.log(result);