export default class DigitalInterface {
    constructor() {
        if (this.constructor == DigitalInterface) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    handleDigitalSignal() {
        throw new Error("You cannot call an abstract method!");
    }
}
