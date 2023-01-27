export default class LinuxDistribution {
    constructor(name) {
        if (this.constructor == LinuxDistribution) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this.name = name;
    }

    boot() {
        return `Booting into ${this.name}...`;
    }
}

