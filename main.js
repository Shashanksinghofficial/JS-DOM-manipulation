/*change css*/
  function insert(){
    document.getElementById("insert").style.color="blue"
  }
  //-----------------------------//
  /* 2nd Example*/
  /*change text by innerHtml*/
  function change(){
    document.getElementById("change").innerHTML="Rahul is my Best Friend"
  }
  //-----------------------------//
  /*3 rd */
  /* this is not clickable because there use const not function and getelementbyId [transfer]and use innerHtml*/
  const element= document.getElementById("transfer");
  element.innerHTML="Hello Everyone";
  //-----------------------------//
  /*4th*/
document.getElementById("demo").innerHTML = "Date : " + Date();
/*always D capital in date*/
document.write(Date());
  //-----------------------------//
/*5th*/
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    if(x ==""){
      document.forms["myForm"]["fname"].style.border="2px solid red"
    
   return false;
  }
}
}
//-----------------------------//
/*6*/
function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("text").innerHTML = text;
}
//-------------------------------//
//getElementbyTagName//
// index start from 0,1,2,3.....n

const div=document.getElementsByTagName("div");
console.log(div[1]);
console.log(div[2]);       
/*-------------------------------*/// get element by class name//
//index value is compulsory//
const U =document.getElementsByClassName("className");
console.log(U[0]);
/*-------------------------------*/
//getelementbyQuerySelector//
//we use query by giving query with # for id, .dot for class//
const querySelectorclass = document.querySelector(".query");
console.log(querySelectorclass);
/*------------------------------*/
const querySelectorid = document.querySelector("#query");
console.log(querySelectorid);
/* ------------------------------*/
//if i have multiple same class or id then i use querySelecorAll //
//not work💯//
/*const Q =document.querySelectorAll(".queryall");
Q.forEach(function(e) {
  console.log(e);
})
/* ------------------------------*/
/* ChildNode & parentNode*/
/*-------------------------------*/
/* previous siblings*/
const s =document.querySelector("h3");
console.log(s.previousElementSibling);
/*-------------------------------*/
/* for next sibling*/
const ns =document.querySelector("h3");
console.log(ns.nextElementSibling);
/*-------------------------------*/
/* text manipulation using innerHtml*/
const m =document.querySelector("#manipulation");
m.innerHTML=("This is change by InnerHtml");
m.style.fontSize="16px";
m.style.color="green";
//-------------------------------//
/* add & remove & classlist*/
//-------------------------------//
/*remove a tag using remove*/
function r(){
document.getElementById("remove").remove();
}
/*-------------------------------*/
/*append text*/
const appnd =document.createElement("span");
appnd.innerHTML="ankit";
const my =document.querySelector("#append");
my.appendChild(appnd);
my.style.color="red";
console.log(appnd);
//appendchild ए केवल एक value जोड़ सकते है जबकि append() के द्वारा कई सारी value जोड़ सकते है।//
//--------------------------------
/*Prepend text*/
const prepnd =document.createElement("span");
prepnd.innerHTML="ankit";
const you =document.querySelector("#prepend");
you.prepend(prepnd);
you.style.color="blue";
console.log(prepnd);
//--------------------------------
// -------DOM EVENT (CLICK)-----//

const B = document.querySelector("#switch");
const R = document.querySelector("#result");

B.addEventListener("click", function (event) {
  R.style.color = "purple";
  console.log("button clicked", event);
});
//---------------------------------
/*fatch api and get output in web page,not in console*/
/*"What is DOM?
--> 4 Pillars of DOM
--> Simple example of bulb or whatever clicking on the same button
--> Multiple events
--> selecting multiple elements at a same time
--> setTimeout
--> setInterval
--> future projects"*/
/*------------------------------"*/
//DOM- DOCUMENT OBJECT MODEL 
/*-------------------------------*/
//4 PILLERS -
//1.selection of an Element 
//2.Changing Elements 
//3.Changing Css
//4.Event listener 
/*-------------------------------*/
/* select an element*/
var a = document.querySelector("#a");
console.log(a);
//--------------------------------
/* changing Element*/
var b = document.querySelector("#b").innerHTML="This is changed element";
console.log(b);
//---------------------------------
/* changing Css*/
var c =document.querySelector("#c").style.color="orange";
console.log(c)
//---------------------------------
/* add event listener*/
var d =document.querySelector("#d");
d.addEventListener('click',function() {
  d.innerHTML="123456";
  d.style.color="purple";
  console.log(d);
})
//-------------------------------//
//diffrence between innerHTML & textContent
const e=document.querySelector("#e").innerHTML="<h1>it's innerHtml</h1>";
var f=document.querySelector("#f").textContent="<h1>it's textContent</h1>";
//---------------------------------------------------------------//
//attributes change//
//g.placeholder,g.value, g.setAttributes("placeholder","Enter Mobile Number");

var g=document.querySelector("#g");
g.setAttribute("placeholder" ,"Enter mobile Number");
var g = document.querySelector("#g");
g.placeholder=("Enter your Mobile Number");
//*******************************//
