const Student: string = "Deepanshu";
const age: number = 55;
const isFetching: boolean = true;
const arr: number[] = [1, 23, 344, 34];
const arrS: string[] = ["ere", "er", "ere"];
const Fuple: [string, boolean] = ["Deep", true];
enum Developer {
  User = "Deepanshu",
  SuperUser = "Rahul",
  Admin = "Father",
  SuperAdmin = "hehe",
}
console.log(Developer.User);

const sum = (a: number, b: number): number => {
  return a + b;
};

function devide(a: number, b: number): number {
  return a / b;
}

const hello = (name: string) => {
  console.log(name);
};

hello("Deepanshuoo");

// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number

interface student {
  title: string;
  status: boolean;
  id: number;
}

const sectionA: student = {
  title: "Deepanshu",
  status: true,
  id: 23,
};

// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it

interface basicInfo {
  firstname: string;
  lastname?: string;
}
const getName = ({ firstname, lastname }: basicInfo): any => {
  return `${firstname} ${lastname ? lastname : ""}`;
};
console.log(getName({ firstname: "Deepanshu", lastname: "Chugh" }));

// create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types

interface address {
  houseNumber: number | string;
  street: number;
  city: string;
  state: string;
  postalCode: number;
  country: string;
}

// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional

interface PersonDetails {
  prefix?: string;
  phone: number[];
  addresses: string[];
  email?: string;
  firstname: string;
  lastname: string;
  middlename?: string;
}

const user_data: PersonDetails = {
  prefix: "Mr",
  phone: [9, 9, 9, 9, 9, 8, 8, 8, 8, 8],
  addresses: ["Sector 21", "Gurgaon"],
  email: "deep@gmail.com",
  firstname: "Deepanshu",
  lastname: "Chugh",
};

// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons

let persons: PersonDetails[] = [];

function PhoneBook(userData: PersonDetails) {
  persons.push(userData);
  return persons;
}

// Write a function to retrieve the type of the user or admin

interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

const dummyAdmin: Admin = {
  type: "admin",
  name: "shivam",
  age: 21,
  role: "FSD",
};
const dummyUser: User = {
  type: "user",
  name: "shivam",
  age: 21,
  occupation: "DEveloper",
};

function checktype(fn) {
  return fn.type;
}
console.log(checktype(dummyUser));
