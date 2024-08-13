"use strict";
// Abstract handler class
class AbstractHandler {
    constructor() {
        this.nextHandler = null;
    }
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}
// Concrete handlers
class FirstHandler extends AbstractHandler {
    handle(request) {
        if (request === "First") {
            return `FirstHandler: I can handle the ${request} request.`;
        }
        return super.handle(request);
    }
}
class SecondHandler extends AbstractHandler {
    handle(request) {
        if (request === "Second") {
            return `SecondHandler: I can handle the ${request} request.`;
        }
        return super.handle(request);
    }
}
class ThirdHandler extends AbstractHandler {
    handle(request) {
        if (request === "Third") {
            return `ThirdHandler: I can handle the ${request} request.`;
        }
        return super.handle(request);
    }
}
// Client code
const firstHandler = new FirstHandler();
const secondHandler = new SecondHandler();
const thirdHandler = new ThirdHandler();
firstHandler.setNext(secondHandler).setNext(thirdHandler);
const requests = ["First", "Second", "Third", "Unknown"];
requests.forEach((request) => {
    const result = firstHandler.handle(request);
    if (result) {
        console.log(result);
    }
    else {
        console.log(`${request} was not handled.`);
    }
});
