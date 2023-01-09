
import OrderManager from "../patterns/command-pattern/orderManager.js";
import { placeOrderCommand } from "../patterns/command-pattern/commands/placeOrderCommand.js";
import { trackOrderCommand } from "../patterns/command-pattern/commands/trackOrderCommand.js";

export const command = (req, res) => {

  const manager = new OrderManager();

  console.log('START!')

  let placeOrder = new placeOrderCommand("Shopska salata", "1");
  let trackOrder = new trackOrderCommand("1");
  manager.execute(placeOrder);
  manager.execute(trackOrder);

  console.log('END!')

  res.render('index.hbs')
}
