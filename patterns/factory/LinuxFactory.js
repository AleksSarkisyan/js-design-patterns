import Debian from './Debian.js';
import RedHat from './RedHat.js';
import Ubuntu from './Ubuntu.js';

export default class LinuxFactory {

    getLinuxDistribution(name) {
        let distros = {
            'debian': new Debian(),
            'redhat': new RedHat(),
            'ubuntu': new Ubuntu(),
        };

        if (!distros[name]) {
            console.log("Linux distribution not found.");
            throw new Error("Linux distribution not found.");
        }

        return distros[name];
    }
}