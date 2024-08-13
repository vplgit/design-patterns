"use strict";
// Concrete Observer
class ConcreteObserver {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`${this.name} received update with data: ${data}`);
    }
}
// Concrete Subject
class ConcreteSubject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }
    notify(data) {
        this.observers.forEach((observer) => observer.update(data));
    }
}
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("First Update");
subject.unsubscribe(observer1);
subject.notify("Second Update");
