console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item){
    basket.push(item);
    if(item){
        return true;
    }else{
        return false;
    }
}
console.log(`it's`,addItem('eggs'),`eggs were added to the basket`);
// console.log(`basket has:`,basket);
addItem('milk');
addItem('oatmeal');
console.log(basket);

function listItems(array){
    for(let items of array){
        console.log(items);
    }
}
listItems(basket);

function empty(array){
    while(array.length > 0){
        array.pop();
    }
}
empty(basket);
console.log(basket);