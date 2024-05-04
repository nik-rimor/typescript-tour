// Class: Blueprint to create an object with some fields (values)
// and methods (functions) to represet a thing/concept

// definitio e.g

class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  // adding methods (functionality)
  protected drive(): void {
    console.log("i am driving!");
  }

  public honk(): void {
    console.log("Beeep Beeep!");
  }
}

// create an instance of a Class Vehicle
const vehicle1 = new Vehicle("red");

// now we have access to methos of the class on this instance
//vehicle1.drive();
vehicle1.honk();

class Car extends Vehicle {
  // all the different methods from Vehicle Class are passed to the Car class

  constructor(color: string, public wheels: number) {
    super(color);
  }

  // we can override the implentation of a method by redifing it in the Car class
  protected drive(): void {
    console.log("I am driving a Car!!");
  }

  public startDrivingProcess(): void {
    // this can use drive
    this.drive();
  }

  // Method overloading - NOT supported , the example below produces an error
  // drive(model: string ): void {
  //   console.log(`I am driving a ${model}Car!!`);
  // }
}

const car1 = new Car("blue", 4);
//car1.drive();
car1.startDrivingProcess();
car1.honk();
