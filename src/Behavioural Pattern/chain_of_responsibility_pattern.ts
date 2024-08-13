// Handler interface
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

// Abstract handler class
class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

// Concrete handlers
class FirstHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "First") {
      return `FirstHandler: I can handle the ${request} request.`;
    }
    return super.handle(request);
  }
}

class SecondHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "Second") {
      return `SecondHandler: I can handle the ${request} request.`;
    }
    return super.handle(request);
  }
}

class ThirdHandler extends AbstractHandler {
  public handle(request: string): string | null {
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
  } else {
    console.log(`${request} was not handled.`);
  }
});
