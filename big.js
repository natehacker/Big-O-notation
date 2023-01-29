//lesson 1 

//linear function 
function linearFunc(arr){
for (let i = 0; i < arr.length; i++){
    console.log(1000 * 10000) // this line of code takes constanat time o(n) functionn 
}
}
const arr = [1,2,3,4,5,6,7]
linearFunc(arr)
 

function constFunc (arr){
    // for(let i = 0; i < arr.length; i++){
        console.log(1000 * 10000)

    }
// }
constFunc() // the function is 0(1)


// O(n2)
 function square(n){
    for(i = 0; i < n; i++){
        for(let j = 0; j < n;) {
            console.log(i, j);
        }

    }

 }
 square(4)
