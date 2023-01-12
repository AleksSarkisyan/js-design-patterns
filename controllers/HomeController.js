
import OrderManager from "../patterns/command/orderManager.js";
import { placeOrderCommand } from "../patterns/command/commands/placeOrderCommand.js";
import { trackOrderCommand } from "../patterns/command/commands/trackOrderCommand.js";
import { rangeIterator } from '../patterns/iterator/RangeIterator.js';
import { rangeGenerator } from '../patterns/generator/RangeGenerator.js';

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

export const iterator = (req, res) => {
  let numbersIterator = rangeIterator(1, 10, 2);
  let result = numbersIterator.next();

  while (!result.done) {
    console.log('number is', result.value);
    result = numbersIterator.next();
  }

  res.render('index.hbs')
}

export const generator = (req, res) => {
  for (let number of rangeGenerator(1, 10, 2)) {
    console.log('number is', number);
  }

  res.render('index.hbs')
}
