import Order from "./models/order.js";
import * as servicoFrete from "./services/shipping-service.js"
import * as servicoTotal from "./services/order-service.js"

const dados1 = document.getElementById("exemplo1").innerHTML.split("\n");
const order1 = new Order(Number (dados1[0]), parseFloat(dados1[1]), parseFloat(dados1[2]));

console.log(order1);
console.log(`Pedido código: ${order1.code}`);
const totalA = servicoTotal.total(order1);
console.log(`Total: ${totalA.toFixed(2)}`);
console.log(`---------------------------------`);

const dados2 = document.getElementById("exemplo2").innerHTML.split("\n");
const order2 = new Order(Number (dados2[0]), parseFloat(dados2[1]), parseFloat(dados2[2]));

console.log(order2);
console.log(`Pedido código: ${order2.code}`);
const totalA1 = servicoTotal.total(order2);
console.log(`Total: ${totalA1.toFixed(2)}`);
console.log(`---------------------------------`);

const dados3 = document.getElementById("exemplo3").innerHTML.split("\n");
const order3 = new Order(Number (dados3[0]), parseFloat(dados3[1]), parseFloat(dados3[2]));

console.log(order3);
console.log(`Pedido código: ${order3.code}`);
const totalA2 = servicoTotal.total(order3);
console.log(`Total: ${totalA2.toFixed(2)}`);