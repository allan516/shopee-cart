import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("bem vindo ao seu carrinho de compras da Shopee!");

const item1 = await createItem("ventilador", 180.0, 3);
const item2 = await createItem("cama box", 500, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//await cartService.removeItem(myCart, 1);
await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item1);

await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myWhishList, item2);

cartService.calculateTotal(myCart);
