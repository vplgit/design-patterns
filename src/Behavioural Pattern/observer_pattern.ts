// Observer interface
interface Observer {
  update(data: any): void;
}

// Subject (Observable) interface
interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(data: any): void;
}

// Concrete Observer
class ConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(data: any): void {
    console.log(`${this.name} received update with data: ${data}`);
  }
}

// Concrete Subject
class ConcreteSubject implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data: any): void {
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
