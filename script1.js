/* 
/* let a=20;
let b=10;

document.write(a+b);

document.write(a*b);

document.write(a==b);

document.write(a!=b);

document.write(a>20);

document.write(a<20); */

/* let a=20;
let b=10;

console.log(a+b);

console.log(a*b);

console.log(a==b);

console.log(a!=b);

console.log(a>b);

console.log(a<b); */

/* var a;
var a=10;
var b;
var b=9;
document.write(a,b);  */

/* let b=10;
document.write(b);
let a=10;
document.write(a,b);
 */


/* var a=10;
var b;
console.log(b); */

/* console.log(a);// Hoisting
var a=10;
 */
/* let result =confirm("Do you want to continue"); */
/* var a =(prompt ("Enter first number"));
var a= (prompt("Enter last number")); */
//document.write(a);
//var a=10;

/* document.write("Hello world");

var a=20;
var b=20;
document.write(a+b);

let a=Number(prompt("Enter the first number of a: "));
let b=Number(prompt("Enter the number of b:"));
document.write(a-b);
 
let a=Number(prompt("Enter the first number of a: "));
let b=Number(prompt("Enter the number of b:"));
document.write(a+b); 

var a=20;
var b=20;
document.write(a*b);

var a=20;
var b=20;
document.write(a/b);*/

/* let a=5;
a++;
document.write(a);//6
let a=5;
a--;
document.write(a); //4 */

/* let a=5;
++a;
document.write(a); //6 */

/* let a=5;
--a;
document.write(a); //4 */

/* var num=prompt("Enter any number:");
if(num%2==0)
{
    console.log("The number is even");
}
else{
console.log("The number is odd");
}

(num%2==0)?console.log("Number is even"):console.log("Number is odd"); */

/* var bg_color="dark";
(bg_color=="dark")?console.log("color white"):("color dark"); */

/*var  mark=60;
if(mark>=70)

{
console.log("Eligible for exam");
}
else{
    console.log("Not eligible");
}

var id="admin";
if(id=="admin" || id=="admin" || id=="abcd")
    {
    console.log("login successfully")
}
else{
    console.log("Admin not found");
}

var username="admin";
var password="id";

if(username=="admin" && password=="12345"){
    console.log("login");
}
else{
    console.log("Failed");
} */




/* let a = Number(prompt("Enter firsrt number: "));
let b = Number(prompt("Enter second number: "));
let choice = Number(prompt("Enter Choice")); */

/* switch (choice) {
    case 1:
        console.log(a + b); */
/*         break;

    case 2:

        console.log(a - b);
        break;

    case 3:

        console.log(a * b);
        break;

    case 4:
        console.log(a / b);
        break;

    default:

        console.log("Wrong choice");
        break;
}
 *//* 
var i =0;
for( ;i<10;i++);
{
console.log(i);
}

var i =0;
for( ;i<10;i++);
{
console.log(i);
}

var i =0;
for( ;i<10;i++);
{
console.log(i);
}

var i =0;
for( ;i<10;i++);
{
console.log(i);
} */

//While Loop
/*  
var i=0;  // initialization
while(i<=10){  // condition
    console.log(i)
    i++;  // increment
}

//do while
var j=0;
do{
    console.log(j);
    j++;
    }
    while(j<10); 
 */
//Object

/* const country={
    name:"india",
    state:36,
    population:123456789
};
console.log(country.name);
console.log(country.state);
console.log(country.population);
console.log(country); */

/* const product={
    name:"HP Laptop",
    price:50000,
    module:5
};
//console.log(product.name);
console.log(product[Price]);
//console.log(product.module);
product.rating=5;
product.name="DELL";
delete product.module; */

/* let student=["ashu","mahi",101,102];
console.log(student[1]); */

/* const product={
    laptop:["hp",5678,"hp-78689"]
    laptop:[] }*/

    // array

/* let student=["ashu","mahi",101,102];
console.log(student);
student.push("result");
student.push(345.8);
student.unshift(109);
console.log(student.includes("ashu"));
console.log(student.length);
console.log(typeof(student));

for(let i=0; i<student.length;i++)
{
    console.log(student[i])
}

let number=[109,909,78,56]
for(let i=0; i<student.length;i++)
    console.log(number[i])
//for each
numbers.forEach(num =>{
    console.log(num);
})
// for of
for(let i=0;i<=10;i++)
{
    console.log(num);
} */
 
    /* let a=10;
    while(a<=10)
    {
        console.log(a);
        a++;
    } */
    /* let a=10;
    while(i>10)
    {
        console.log(i)
    } */
   // String Method
/* var name="ashu";
var devloper=prompt("Enter profession");
    {
console.log(`hi, ${i} am ${name}, i am ${devloper}`);
}
 */


//let  msg="Hello world";
/* let star="*";
let input=prompt("Enter string");
/* console.log(msg.length); */

/* console.log(msg.charAt(10));

console.log(msg.toUpperCase());
console.log(msg.toLowerCase()); */

/* console.log(star.repeat());
console.log(input.length); ------*/ 

/* let msg="Good morning Javascript";
console.log(msg.slice(5,12));
console.log(msg.slice(13));
console.log(msg.spilt);
console.log(msg.replace("Good Evining")); ------*/

/* console.log(location.href);

console.log(location.hostname);

// FUNCTION 
// DOM

 */
//function sendOTP(){
/*     document.getElementById("msg").innerText = "Sending OTP....";
    setTimeout(() => {
        document.getElementById("msg").innerText ="OTP Sent";
    },3000);
}

/* function startTimer(){
    document.getElementById("msg").innerText = "Sending....";
    setTimeout(() => {
        document.getElementById("msg").innerText ="Hi";
    },3000);
} */

/* function startTimer(){
    let count =0;
    setInterval(() =>
    {
        count++;
        console.log(count);
    },3000)} */

    //Event Listner

/* let button=document.getElementById("btn");
button.addEventListener("dblclick" ,()=>{
    console.log("Button Click");
})
 */

// Project

const btn = document.querySelector("button");

function random(number){
    return Math.floor(Math.random() * (number+1));
}
function ChangeBackground(){
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
   
}
 btn.addEventListener("click",ChangeBackground);


















