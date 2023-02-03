import AnalogInterface from './AnalogInterface.js';

export default class VGA extends AnalogInterface {
    handleAnalogSignal() {
        console.log('Handling analog signal...')
        return "Analog signal implementation...";
    }
}
