var num1 = 10;
var num2 = 20;
console.log(num1 + num2);
var num1 = 10;
var num2 = 2.4;



var str1 = 'This  is a string';
var str2 = 'This is another string';
console.log(str1 + str2);

var mark = {
    ravi: 34,
    shib: 65,
    ashsu: 656.56

}
console.log(mark);


var arr = [1, 565, 5, 65, 6, 6];
console.log(arr[2]);
console.log(arr);

var num = 20;
for (var i = 0, j=20; i < num; ++i,j--) { console.log(i,j) }


var num = 30;
for (var i = 0; i > num; i++) { console.log(i) }



var  num =10;
console.log("this block is before if condition");
if ( num%2==0)
{
    console.log("I have executed the if block");
}
console.log("this block is after the if condition");



var  color ='blue';
console.log("this block is before if condition");
if (color == 'blue');
document.body.style.backgroundColor = 'blue';

{
    console.log("I have executed the if block");
}
console.log("this block is after the if condition");




var numi =10;
if (numi % 2 ==0) 
{
    console.log( numi+ "is even number");
    document.body.style.backgroundColor = 'green';

}
else {
    console.log(numi + "is odd number");
    document.body.style.backgroundColor = 'yellow';
}




var numr = 25;
if ( numr <= 10){
    console.log( numr + " is less than or equal to 10");
}


else if (numr > 10 && numr < 20)
{
   console.log( numr + " is between 10 and 20");
}

else if (numr > 20 && numr < 30)
{
   console.log( numr + " is between 10 and 20");
}
else {
    console.log( numr + "is greater than or equal to 20");
}




var nu =30;
switch(num) {
    case 10:
        console.log( "number is : 10");
break;
case 20:
    console.log( "number is : 20");
    break
    case 30:
        console.log("number is : 30");
        break

        default:
            console.log("This is the default block");
    }