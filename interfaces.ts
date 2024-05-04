// Interfaces: Creates a new type, describing the property nsmes and value types of an obhect

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

// generi looking inteface
interface Reportable {
  summary(): string;
}

// Long type annotations
const oldCivic = {
  name: "civic",
  year: new Date("2000-10-01"),
  broken: true,
  summary(): string {
    return `this.name ${this.name} was made at ${this.year} and it is ${
      this.broken ? "broken" : "not broken"
    }`;
  },
};

const printVehicle = (vehicle: {
  // long annotation
  name: string;
  year: Date;
  broken: boolean;
}): void => {
  console.log("name: ", vehicle.name);
  console.log("year: ", vehicle.year);
  console.log("broken: ", vehicle.broken);
};

printVehicle(oldCivic);

// improve repeating long annotations by using interfaces

const printVehicle2 = (vehicle: Reportable): void => {
  // the object passed nust satisfy the Reportable interface
  console.log(vehicle.summary());
};

printVehicle2(oldCivic); // the interface requirements are satisfied

const oldYaris = {
  name: "yaris",
  year: new Date("2002-10-10"),
  broken: false,
  summary: function (): string {
    return `this  ${this.name} was made at ${this.year}, has since done ${
      this.klms
    } kmeters and it is ${this.broken ? "broken" : "not broken"}`;
  },
  klms: 290000,
};

printVehicle2(oldYaris); // the interface requirements are satisfied

console.log(oldCivic.summary());
console.log(oldYaris.summary());

// new object with differnt properties but with
// summary function defined
const oldPC = {
  model: "Acer 2000",
  osSystem: "Windows Milenium",
  hardDiskCapacity: 1200,
  summary(): string {
    return `This pc wan ${this.model}, it had ${this.osSystem} operating system and a HD capacity of ${this.hardDiskCapacity}MB`;
  },
};

// better functon definition
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

// if it complies with the Reportable  interface .. no problem
// thats the only rerquirement that is checked from the  argument passed
// to the function in order for printSummary function to work
printSummary(oldPC);

// General Strategy for reusable code in TS
// 1. Create functions that accept arguments that are tyoed with interfaces
// 2. Object/Classes can decide toi 'implement' a given interface to work with a function
