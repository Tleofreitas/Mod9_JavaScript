// Retornar valor do frete
export function shipment(order) {
    let frete  = 0;
    const valorComDesconto = order.basic - (order.basic * (order.discount/100));
    if (valorComDesconto < 100){
        frete = 20;
    } else if (valorComDesconto < 200){
        frete = 12;
    } else {
        null;
    }
    return frete;
}