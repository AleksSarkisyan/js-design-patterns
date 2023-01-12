import Command from "./command.js";

export function cancelOrderCommand(order, id) {
    return new Command(orders => {
        orders = orders.filter(order => order.id !== id);
        console.log(`You have canceled your order ${id}`);
    });
}