export default class BaseAnimal {
    constructor() {
        if (this.constructor == BaseAnimal) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    eat() {
        console.log("eating");
    }

    speak() {
        throw new Error("You cannot call an abstract method!");
    }
}
