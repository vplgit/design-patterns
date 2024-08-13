"use strict";
class Car {
    displayInfo() {
        console.log(`Car Details: Engine=${this.engine}, Wheels=${this.wheels}, Color=${this.color}`);
    }
}
class SportsCarBuilder {
    constructor() {
        this.car = new Car();
    }
    setEngine(engine) {
        this.car.engine = engine;
        return this;
    }
    setWheels(wheels) {
        this.car.wheels = wheels;
        return this;
    }
    setColor(color) {
        this.car.color = color;
        return this;
    }
    build() {
        return this.car;
    }
}
class CarDirector {
    constructor(builder) {
        this.builder = builder;
    }
    constructSportsCar() {
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
