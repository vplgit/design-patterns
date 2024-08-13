class Car {
  public engine: string | undefined;
  public wheels: number | undefined;
  public color: string | undefined;

  displayInfo(): void {
    console.log(
      `Car Details: Engine=${this.engine}, Wheels=${this.wheels}, Color=${this.color}`
    );
  }
}

// Builder interface
interface CarBuilder {
  setEngine(engine: string): this;
  setWheels(wheels: number): this;
  setColor(color: string): this;
  build(): Car;
}

class SportsCarBuilder implements CarBuilder {
  private car: Car;

  constructor() {
    this.car = new Car();
  }

  setEngine(engine: string): this {
    this.car.engine = engine;
    return this;
  }

  setWheels(wheels: number): this {
    this.car.wheels = wheels;
    return this;
  }

  setColor(color: string): this {
    this.car.color = color;
    return this;
  }

  build(): Car {
    return this.car;
  }
}

class CarDirector {
  private builder: CarBuilder;

  constructor(builder: CarBuilder) {
    this.builder = builder;
  }

  constructSportsCar(): Car {
    return this.builder
      .setEngine("V8 Engine")
      .setWheels(4)
      .setColor("Red")
      .build();
  }
}

const sportsCarBuilder = new SportsCarBuilder();
const carDirector = new CarDirector(sportsCarBuilder);
const sportsCar = carDirector.constructSportsCar();
sportsCar.displayInfo();
