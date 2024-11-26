import createItem from "./services/item.js";

const cart = [];

console.log("bem vindo ao seu carrinho de compras da Shopee!");

const item1 = await createItem("ventilador", 180.0, 1);
const item2 = await createItem("cama box", 500, 2);

console.log(item2.subtotal());
