function age(){
    var d1 = document.getElementById("Date").value; //15
    var m1 = document.getElementById("Month").value; //10
    var y1 = document.getElementById("Year").value; //1992
//d1 m1 and y1 ye vo variable jisme user hame value dega uski date of birth
    var date= new Date();
    // new date ek already javacript ka method hai jo apke device me se time and date batata hai 
    var d2= date.getDate();
// fir d2 me humne aj ki date set ki
    var m2= 1+date.getMonth();
    //fir m2 aj ka month set kiya aur +1 kiya kkyuki javascript months ko 0-11 me count karta hai 
    // so +1 count 12 hote  1-12 jo hamare month hote hai 
    var y2 =date.getFullYear();
    // y2 me aaj ka year 
    var month = [31,28,31,30,31,30,31,31,30,31,30,31];
// per month kitne days hote hai ye is varible me bataya hai

    if(d1 > d2){
        // suppose user dob date hai 15 aur aj ki date hai 8
        // agar dob date aj se badi hai 
        d2 = d2 + month[m2-1];
        // d2 = aj ki date + month[10-1]
         // d2 = 8 + month[9] 
         //month 9 is october as per js and there are 30 days in oct
        // d2 = 8 + 30
        // d2 = 38 

        // toh aj ki daate = aj ki date + [31,28,31,30,31,30,31,31,30,31,30,31][1+10-1] 
        m2 = m2-1;
        // m2 = 10-1
        // m2 = 9
        // aj ka month = aj ka month -1 
    }
    if(m1 > m2){
        m2= m2 + 12;
        // m2 = 9+12
        // m2 = 21
        y2= y2 - 1;
        // y2 = 2023-1
        // y2 = 2022


    }

    var d = d2 - d1;
    // d = 38 - 15
    // d = 23
    var m = m2 - m1;
    // m = 21 -10
    // m = 11
    var y = y2 - y1;
    // 2022-1992=30
    // y=30

document.getElementById("age").innerHTML = "Your age is "+y+" Years "+m+" Months "+ d +" Days ";
}
// 30 years 11 months 23 days 

// function age(){
//     var d1 = document.getElementById("Date").value; //15
//     var m1 = document.getElementById("Month").value; //10
//     var y1 = document.getElementById("Year").value; //1992
//     var date= new Date();
//     var d2= date.getDate();
//     var m2= 1+date.getMonth();
//     var y2 =date.getFullYear();
//     var month = [31,28,31,30,31,30,31,31,30,31,30,31];

//     if(d1 > d2){
//         d2 = d2 + month[m2-1];
//      m2 = m2-1;
//      }
//     if(m1 > m2){
//         m2= m2 + 12;
     
//         y2= y2 - 1;
       

//     }

//     var d = d2 - d1;
   
//     var m = m2 - m1;
   
//     var y = y2 - y1;
   

// document.getElementById("age").innerHTML = "Your age is "+y+" Years "+m+" Months "+ d +" Days ";
// }