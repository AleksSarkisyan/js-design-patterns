export default class AnalogInterface {
    constructor() {
        if (this.constructor == AnalogInterface) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    handleAnalogSignal() {
        throw new Error("You cannot call an abstract method!");
    }
}
