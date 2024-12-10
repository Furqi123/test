// var subject1 = prompt("enter Subject 1 name")
// var subject2 = prompt("enter Subject 2 name")
// var subject3 = prompt("enter Subject 3 name")


// var subject1Marks = +prompt("enter " + " "  + subject1 + " "  +"Marks" )
// var subject2Marks = +prompt("enter " + " "  +subject2 + " "  +"Marks" )
// var subject3Marks = +prompt("enter " + " "  +subject3 + " "  +"Marks" )


// var totalMarks = 100;


// document.write("sno Subject Total Marks Obtained Marks")

// document.write("1)" + subject1 + " " + totalMarks + "  " + subject1Marks)


// var email = "abc@gmail.com"
// var password = "123456"



// var userEmail = prompt("enter email")
// var userPassword = prompt("enter Password")


// if(email == userEmail && password == userPassword){
//     alert("login successfully")
// }


// else{
//     alert("invalid email or password")
// }



// arr.splice(1,0,"pink")
// console.log(arr)
// var arrCopy = arr.slice(1,4)
// console.log(arrCopy)





// var arr = ["yellow","black","white","green","pink","brown"];
// console.log(arr)
// for(var i = 0;i<arr.length;i++){
//    console.log(arr[i])

// }


//  var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

//  for(var i = 0;i<fruits.length;i++){
//     document.write(fruits[i] + "<br/>")

//  }


//  for(var i = 0;i<fruits.length;i++){
//     document.write("Element At Index " + i + " " + fruits[i] + "<br/>")

//  }

// var evenNum;
// for(var i = 0;i<=10;i++){
   
//     if(i%2 == 0)
//     console.log(i)
// }


// var num2 =  7.553664;
// var update = Math.round(num2);
// var update = Math.ceil(num2)
// var update = Math.floor(num2)
// console.log(update)

// var randomNumbers = Math.floor(Math.random()*2);
// console.log(randomNumbers)
// var userInput1 = prompt("Enter had aur tail");
// var userInput2 = prompt("Enter head aur tail")

// if(randomNumbers == 0){
//     alert("head win")
// }

// else if(randomNumbers == 1){
//     alert("tail win")
// }


// var i = 0
// var arr = ["monday","tuesday","wednesday","thursday","friday"]
// while(i<arr.length){

//     console.log(arr[i])
//     i++;
// }


// var i = 0;
// do{
//     console.log(i)
//     i++;

// }
// while(i>5)

// 
// var arr = ["monday","tuesday","wednesday","thursday","friday"]
// for(var v of arr){
//     console.log(v)
// }

// var counter = document.getElementById("counter")
// var value = 0


// function countValue(){
//     value++
// counter.innerText = value

// }


let title = document.getElementById('title')
let para = document.getElementById('para')
var main = document.getElementById('main')

function submit(){
   main.innerHTML += `<div class="card">
   <h2>${title.value}</h2>
   <p>${para.value}</p>
   </div>`
}