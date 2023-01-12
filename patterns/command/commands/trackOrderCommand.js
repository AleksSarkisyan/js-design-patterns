import Command from "./command.js";

export function trackOrderCommand(id) {
    return new Command(() =>
        console.log(`Your order ${id} will arrive in 20 minutes.`)
    );
}