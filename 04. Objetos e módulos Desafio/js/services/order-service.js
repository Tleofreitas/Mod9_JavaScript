import * as shipping_service from './shipping-service.js'
// Retornar valor Total
export function total(order) {
    let freteA = shipping_service.shipment(order);
    let total = order.basic - order.basic * (order.discount/100) + freteA;
    return total;
}