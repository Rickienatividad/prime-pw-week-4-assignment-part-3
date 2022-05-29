console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item){
    basket.push(item);
    if(item){
        return true;
    }
}
console.log(`it's`,addItem('eggs'),`eggs were added to the basket`);
console.log(`basket has:`,basket);
addItem('milk');
addItem('oatmeal');
console.log('added a couple more items',basket);

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
console.log(`basket should be empty`,basket);

//STRETCH GOALS
// 1)
basket.push('grapes','acorns','cereal','potatoes','peppers');
console.log(basket);

const maxItems = 5;
function isFull(basket){
    if(basket.length < maxItems){
        return false;
    }else{
        return true;
    }
}

function addItemUpdate(item){
    if(isFull){
        console.log('too full to add',item);
        return false;
    } else if(isFull == false){
        basket.push(item);
        console.log(basket);
        return true;
    }
}
addItemUpdate('lettuce');
console.log(basket);
