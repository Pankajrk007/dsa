const appNode = document.getElementById("app");
const fruits = ["Apple", "Banaana", "orange", "grapes"];
const animal = ["Tiger", "Lion", "Monkey", "Gorilla"];
function iterate_means(arr) {
  appNode.innerHTML = " <br />";
  for (let i = 0; i < arr.length; i++) {
    console.log(appNode.innerHTML)
    appNode.innerHTML = arr[i]
    if (i < arr.length - 1) {
      appNode.innerHTML += ", ";
    } else {
      appNode.innerHTML += ".";
    }
  }

iterate_means(fruits);

appNode.innerHTML += "<br />" + fruits[0];
fruits[0] = "lemon";
// fruits[2]="Kaju";
appNode.innerHTML += "<br />" + fruits[0];
iterate_means(fruits);

// insertion at begining by using inbuild unshift function

fruits.unshift("chiku", "mango");
iterate_means(fruits);

// insertion at end by using inbuild push  function

fruits.push("kela")

}

iterate_means(fruits);


// insertion at middle at any position by using self made  function 
// for this first we have to make space in the array then we can put item inside an arrya

function insert_array_at_middle(arr, position, data) {
  for (i = arr.length - 1; i >= position; i--) {
    arr[i + 1] = arr[i]
  }
  arr[position] = data;

}
insert_array_at_middle(fruits, 2, "carrot");
iterate_means(fruits);


insert_array_at_middle(fruits, fruits.length, "papita")
// ab array me kitne item ye toh humko pata nhi toh last item ki value ko change karne k liye arry ki length ka use krte hai (ex : fruits.length ) 
iterate_means(fruits);

// demo for new array 


// The best short cut method to add item in array at any position is splice 
document.write(fruits+"<br>");
fruits.splice(0,0,"potato")
// ye hame 3 chiz mangta hai 1st postion second uske aage k item ko kha jau ya nhi 3rd item ka name 
document.write(fruits);
fruits.splice(1,0,"orange")
document.write(fruits);
fruits.splice(3,0,"Apple")
document.write(fruits);






