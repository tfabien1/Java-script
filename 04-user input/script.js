//how to accept user input
//1.EASY WAY
//2.PROFFESIONAL WAY*/

let username;
username = window.prompt("what is your age");
console.log(username);

//professional way
let Age;
document.getElementById("mysubmit1").onclick = function(){
   Age = document.getElementById("myage").value;
    console.log(Age);

};

let firstName;
document.getElementById("mysubmit").onclick = function(){
    firstName = document.getElementById("firstName").value;
    console.log(firstName);
}
