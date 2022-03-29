// Exporting module
console.log('Exporting module');
// all top level variables are private variables
const shippingCost = 10;
export const cart = [];

// two tapes of exports :
// named exports: put export in front of what you want to export
export const addToCart = function(product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as tq};

// default exports: We usually use them when we want to export one thing per module 

export default function(product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} added to cart`);
};