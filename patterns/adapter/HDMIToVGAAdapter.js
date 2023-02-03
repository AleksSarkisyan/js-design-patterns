import DigitalInterface from './DigitalInterface.js';
import VGA from './VGA.js';

export default class HDMIToVGAAdapter extends DigitalInterface {
    constructor() {
        super();
        this.vga = new VGA();
    }

    handleDigitalSignal() {
        return this.vga.handleAnalogSignal();
    }
}