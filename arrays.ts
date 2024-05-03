const carMakers = ["ford", "toyota", "chevy"]; // array type type is inferred
const carMakersDeclared: string[] = ["ford", "toyota", "chevy"]; // array type type is declared

// declare type annotation when you initialize with empty array
const futureDates: Date[] = [];

const carsByMake: string[][] = [
  // array that contains arrays of strings
  ["ford"],
  ["corola"],
  ["camaro"],
];

// help with inference when extracting values
const car = carMakers[0]; // sting is inferred here
const car2 = carMakers.pop();

// prevent incompatible values to they array
carMakers.push(123);

// get help when using map, foreach, reduce
carMakers.map((car: string) => {
  return car.toUpperCase();
});

// flexible types - arays can stiil contain different types
// const importantDays: (Date | string)[] = [];
const importantDays: (Date | string)[] = [new Date(), "230-10-10"];
importantDays.push("2024-10-01");
importantDays.push(new Date("2023-11-07"));

// typed arrays -> used any time we need to represent a collection
// of records with some arbitrary sort order
