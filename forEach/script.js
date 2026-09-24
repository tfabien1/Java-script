let numbers = [1 , 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
    array[index]= element * 2; 
}


function triple(element, index, array){
    array[index]= element * 3;


}
function square(element, index, array){
    array[index]=Math.pow(element, 2);
}


function cube(element,index,array){
    array[index]=Math.pow(element, 3);


}
function display(element){
    console.log(element);
}
