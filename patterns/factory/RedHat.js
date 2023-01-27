import LinuxDistribution from './LinuxDistribution.js';

export default class RedHat extends LinuxDistribution {
    constructor() {
        super(RedHat.name);
    }
}
