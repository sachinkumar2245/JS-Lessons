"use strict"; //treat all js code as newer version

// primitive data types

// 7 types: string, number, boolean, null, undefined, symbol, bigInt;

// defining symbol;
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId);

const bigNumber = 963499289692n;

// refrence(non primitve)

// array, objects, functions

const heros = ["shaktimaan", "nagraaj", "doga"];

let myObj = {
  name: "hitesh",
  // age: 22
};

// function

const myFunction = function () {
  console.log("hello world");
};

console.log(typeof bigNumber);
