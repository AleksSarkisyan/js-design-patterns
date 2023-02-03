
import OrderManager from "../patterns/command/orderManager.js";
import { placeOrderCommand } from "../patterns/command/commands/placeOrderCommand.js";
import { trackOrderCommand } from "../patterns/command/commands/trackOrderCommand.js";
import { rangeIterator } from '../patterns/iterator/RangeIterator.js';
import { rangeGenerator } from '../patterns/generator/RangeGenerator.js';
import Mediator from "../patterns/mediator/Mediator.js";
import BookmarksManager from "../patterns/memento/BookmarksManager.js";
import Observable from "../patterns/observer/Observable.js";
import Observer from "../patterns/observer/Observer.js";
import Product from "../patterns/strategy/Product.js";
import Cat from "../patterns/template/Cat.js";
import Dog from "../patterns/template/Dog.js";
import LinuxFactory from "../patterns/factory/LinuxFactory.js";
import HDMIToVGAAdapter from "../patterns/adapter/HDMIToVGAAdapter.js";

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

export const mediator = (req, res) => {
  let game = new Mediator();
  game.updateScore(10)

  res.render('index.hbs')
}

export const memento = (req, res) => {
  const bookmarksManager = new BookmarksManager();

  let pages = ['google.com', 'facebook.com', 'yahoo.com', 'twitter.com', 'instagram.com', 'yahoo.com', ''];

  for (let page of pages) {
    bookmarksManager.saveBookmark(page);
  }

  console.log('first page is -', bookmarksManager.getFirstBookmark());
  console.log('last page is -', bookmarksManager.getLastBookmark());
  console.log('all bookmarks -', bookmarksManager.getAllBookmarks());

  res.render('index.hbs')
}

export const observer = (req, res) => {
  let observable = new Observable();

  let observer1 = new Observer();
  let observer2 = new Observer();
  let observer3 = new Observer();
  let observer4 = new Observer();

  observable.subscribe(observer1);
  observable.subscribe(observer2);
  observable.subscribe(observer3);
  observable.subscribe(observer4);

  observable.unsubscribe(observer1);
  observable.notifyAllObservers();

  res.render('index.hbs')
}

export const strategy = (req, res) => {
  const product = new Product();
  let productPrice = product.getPrice(10);

  productPrice = product.getPrice(5, 'pre-sale');
  console.log('productPrice ='.productPrice)

  productPrice = product.getPrice(20, 'something');
  console.log('productPrice ='.productPrice)

  productPrice = product.getPrice(30, 'black-friday');
  console.log('productPrice ='.productPrice)

  res.render('index.hbs')
}

export const template = (req, res) => {
  let cat = new Cat();
  let dog = new Dog();

  cat.eat();
  cat.speak();

  dog.eat();
  dog.speak();

  res.render('index.hbs')
}

export const factory = (req, res) => {
  let debian = new LinuxFactory();
  let debianDistro = debian.getLinuxDistribution('debian');

  let redhat = new LinuxFactory();
  let redhatDistro = redhat.getLinuxDistribution('redhat');

  let ubuntu = new LinuxFactory();
  let ubuntuDistro = ubuntu.getLinuxDistribution('ubuntu');

  console.log(debianDistro.boot());
  console.log(redhatDistro.boot());
  console.log(ubuntuDistro.boot());

  res.render('index.hbs')
}

export const adapter = (req, res) => {

  const hdmiToVgaAdapter = new HDMIToVGAAdapter();
  hdmiToVgaAdapter.handleDigitalSignal();

  res.render('index.hbs')
}