/* onclick function with id insert and function insert()*/
  function insert(){
    document.getElementById("insert").style.color="blue"
  }
  /* 2nd Example*/
  /* onclick function with id name [change] and function change() with change text by innerHtml*/
  function change(){
    document.getElementById("change").innerHTML="Rahul is my Best Friend"
  }
  /*3 rd */
  /* this is not clickable because there use const not function and getelementbyId [transfer]and use innerHtml*/
  const element= document.getElementById("transfer");
  element.innerHTML="Hello Everyone";
  /*4th*/
document.getElementById("demo").innerHTML = "Date : " + Date();
/*always D capital in date*/
document.write(Date());
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
/*6--++++++++++++++++++++*/
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


/*-------------------------------*/
//getElementbyTagName//
//we can get tag name by giving tag name and its index start from 0,1,2,3.....n
const tagName =document.getElementsByTagName("div");
console.log(tagName[1]);
console.log(tagName[2]);
/*--------------------------------*/
// get element by class name//
const className =document.getElementsByClassName("class");
console.log(className);
/*--------------------------------*/
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
/*const queryAll =document.querySelectorAll(".queryall");
console.log(queryAll);*/


/*-------------------------------*/
// parent access by parentNode//
/*const parent =document.getElementById("parentid");
const parents =parent.parentNode;
console.log(parents);*/
/* ------------------------------*/
/* ChildNode*/
/*-------------------------------*/


/*-------------------------------*/
/* next element sibling or previous element sibling*/

/* previous siblings*/
const sibling =document.querySelector("h3");
console.log(sibling.previousElementSibling);
/*-------------------------------*/
/* for next sibling*/
const nxtsibling =document.querySelector("h3");
console.log(nxtsibling.nextElementSibling);
/*-------------------------------*/
/* text manipulation using innerHtml*/
const manipulation =document.querySelector("#manipulation");
manipulation.innerHTML=("This is change by InnerHtml");
manipulation.style.fontSize="60px";
manipulation.style.color="green";
//---------------------------------

/* add title using add &classList*/
//not work 💯
manipulation.classList.add('title');
/*remove a tag using remove*/
//not work 💯
manipulation.classList.remove("p")
/*--------------------------------*/
/*create a heading with text using javascript and add in end of any text*/
const dom =document.createElement("span");
dom.innerHTML="ankit";
const my =document.querySelector("#manipulation");
my.appendChild(dom);
console.log(dom);
//--------------------------------
/* add in begin of text*/
/*not work 💯*/
const begin =document.createElement("span");
begin.innerHTML="ankit";
const starting =document.querySelector("#manipulation");
dom.insertAdjacentElement("beforebegin",starting)
//--------------------------------
// -------DOM EVENT -------------
//not work 💯
/*const btn = document.querySelector("#switch");
const result = document.querySelector("#result");

btn.addEventListener("click", function (event) {
  result.style.color = "purple";
  console.log("button clicked", event);
});*/

//---------------------------------
/*fatch api and get output in web page , not in console,
"*/