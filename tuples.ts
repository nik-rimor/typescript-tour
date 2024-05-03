// Tuple: Array like structure where each element
// represents some property of a record in a fixed order

// e.g object representing a drink with properties (color-> brown, carbonated-> true, sugar-> 40)

// object literal
// const drink = {
//   color: "brown",
//   carbonated: true,
//   sugar: 40
// }

// declare it as a tuple = bracket with specific order in types
const pepsi: [string, boolean, number] = ["brown", true, 40];
pepsi[0] = true;

// or use a type alias
type Drink = [string, boolean, number]; // this is a brand new type declare
const sprite: Drink = ["white", true, 35];
const beveragee: Drink[] = []; // array of tuples of type Drink

// you can use them with csv files when you want specific properties to specific order

// using tuples sometimes has amiguity about the meanning of the values
// e.g. here is a tuple with values for pressure and rounds per minute (rpms)
const carStats: [number, number] = [400, 4500];
// it is nearly impossible to know what these numnbers are without a reference

// if we use an object insrtead , it is pretty clear what each value represents
const carStats2 = {
  pressure: 400,
  rpms: 4500,
};
