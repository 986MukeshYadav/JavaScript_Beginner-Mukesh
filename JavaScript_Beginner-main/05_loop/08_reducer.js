const myNums=[1,2,3,4]

// const total=myNums.reduce(function(acc,currn){
//     console.log(`acc:${acc} and currn:${currn}`);
//     return acc + currn
// },0);

const total = myNums.reduce((acc,curr)=>acc+curr,0)


console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 599
    },
    {
        itemName: "mobile dev course",
        price: 8999
    },
    {
        itemName: "data science course",
        price: 2999
    },
]

const pay = shoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(`Total cost of items in cart: ${pay}`);