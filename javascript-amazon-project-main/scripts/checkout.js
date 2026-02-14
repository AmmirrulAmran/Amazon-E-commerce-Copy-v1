import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js'
//import '../data/backend-practice.js';

//waits all promises to finish before going to then
Promise.all([
  new Promise((resolve) => {
    //resolve runs when loadProducts is done running
    loadProducts(() => {
      resolve("value1"); //value will be a paramter for then
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  renderPaymentSummary();
  renderOrderSummary();
});

/*
// promise runs immediately
//resolve controls when to go to next step
new Promise((resolve) => {
  //resolve runs when loadProducts is done running
  loadProducts(() => {
    resolve("value1"); //value will be a paramter for then
  });
}).then(() => {
  //to add a new promise
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }).then(() => {
    renderPaymentSummary();
    renderOrderSummary();
  });

  //then is the next step once loadProducts has finished running
});
/*
loadProducts(()=>{
renderPaymentSummary();
renderOrderSummary();
});
*/
