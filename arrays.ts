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
