

import Observer from './Observer.js';

export default class Observable extends Observer {
    constructor() {
        super();
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter((obs) => {
            return obs !== observer
        });
    }

    notifyObserver(observer) {
        let index = this.observers.indexOf(observer);

        if (index > -1) {
            this.observers[index].notify(index);
        }
    }
    notifyAllObservers() {
        for (let [key, index] of Object.entries(this.observers)) {
            this.observers[key].notify(key);
        }
    }
}