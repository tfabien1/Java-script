 const fullname = "keza feza";
//let firstname = fullname.slice(1,3);
//let secondname = fullname.slice(0,3);


//console.log(firstname);
//console.log(secondname);
let firstname = fullname.slice(-1, fullname.indexOf(""));
let lastname = fullname.slice(fullname.indexOf("")+1);
console.log(firstname);
console.log(lastname);