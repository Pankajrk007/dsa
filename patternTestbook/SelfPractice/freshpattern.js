let n=5;
let s= "";

// for (let i =1;i<=n;i++){
//     for (let j=1;j<=i;j++){
//         s+="*"

//     }s+="\n"
// }console.log(s)
// output is
// *
// **
// ***
// ****
// *****

// for (let i =n;i>=1;i--){
//     for (j=1;j<=i;j++){
//         s+="*"
//     }s+="\n"
// }console.log(s) 

// output is 
// *****
// ****
// ***
// **
// *


// for (let i=1;i<=n;i++){
//     let star=i;
//     let space =n-i;
    
//    while(space!=0){
//     s += " ";
//     space--;
//    }
//    while(star !=0){
//     s+="*"
//     star--
//    }
//    s+="\n"
// }console.log(s)

console.log("============================================")

for (let i=n;i>=1;i--){
    let star=i;
    let space =n-i;
    
   while(space!=0){       ///agar space 0 se bade hai toh space ka decremenr karo
    s += " ";
    space--;
   }
   while(star !=0){              //agar star 0 se bada hai toh star ka decreemtn karo
    s+="*"
    star--
   }
   s+="\n"
}console.log(s)
