"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    showMessage() {
        console.log("Singleton instance method called!");
    }
}
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
singleton1.showMessage();
console.log(singleton1 === singleton2);
