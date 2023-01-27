import BaseAnimal from './BaseAnimal.js';

export default class Dog extends BaseAnimal {
    speak() {
        console.log('bark..');
    }
    eat() {
        console.log('om-nom-nom');
    }
}
