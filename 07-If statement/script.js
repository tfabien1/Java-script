 //if statement:these they are statements that help us to compare different contracepting statements


const myText = document.getElementById("myText");
const mysubmit = document.getElementById("mysubmit");
const myresults = document.getElementById("myresults");
let age;
mysubmit.onclick = function(){
    age =myText.value;
    age = Number(age);
    
    
 if(age >=50){
    myresults.textContent = "you are too old for the event";
 }
 else if(age <= 50){
    myresults.textContent = "you allowed to attend the event";
 }
 if(age == 17){

    myresults.textContent = "To attend the event you should be 18+"; 
 }
 else if(age <= 0 ){ myresults.textContent =  " Age can not go below zero";
 }

