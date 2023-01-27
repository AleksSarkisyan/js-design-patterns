import LinuxDistribution from './LinuxDistribution.js';

export default class Debian extends LinuxDistribution {
    constructor() {
        super(Debian.name);
    }
}
