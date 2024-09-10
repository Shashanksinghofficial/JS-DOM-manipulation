/* change color 1 st Example*/
  function insert(){
    document.getElementById("insert").style.color="blue"
  }
  /* 2nd Example*/
  function change(){
    document.getElementById("change").innerHTML="Rahul is my Best Friend"
  }
  /*3 rd */
  const element= document.getElementById("transfer");
  element.innerHTML="Hello Everyone";
  /*4th*/

document.getElementById("demo").innerHTML = "Date : " + Date();
/*5th always D capital in date*/
document.write(Date());
/*6th*/
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
   return false;
  }
}
/*7*/
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
  document.getElementById("demo2").innerHTML = text;
}