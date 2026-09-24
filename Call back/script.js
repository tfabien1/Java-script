sum(displaypage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);

}
function displayconsole(result){
    console.log(result);

}
function displaypage(result){
    document.getElementById("myH1").textContent= result;

}