import Command from "./command.js";

export function placeOrderCommand(order, id) {
    return new Command(orders => {
        orders.push(id);
        console.log(`You have successfully ordered ${order} with id - (${id})`);
    });
}