console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item){
    basket.push(item);
    return true;
}
console.log(`it's`,addItem('eggs'),`eggs were added to the basket`);
console.log(`basket has:`,basket);
addItem('milk');
addItem('oatmeal');
console.log(basket);

function listItems(array){
    
}
