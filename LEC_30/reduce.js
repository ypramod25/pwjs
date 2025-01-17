const shoppingCart = [
    { product: 'Shoes', price: 80, quantity: 1 },
    { product: 'Bag', price: 120, quantity: 2 },
    { product: 'Watch', price: 250, quantity: 4 }
];

const result = shoppingCart.reduce(function reducer(acc, curr) {
    return acc + curr.price * curr. quantity;
}, 0);

console.log(result);

// I want to calculate total price of the cart

/**
 * let value = 0;
 * shoppingCart.forEach(product => {
 *  value += product.price * product.quantity;
 * })
 */

const resultSanket = shoppingCart.reduce(function reducer(accumulator, currentValue) {
    console.log(accumulator, currentValue);
    return accumulator + currentValue.price * currentValue.quantity;
} ,0);

console.log(resultSanket);


