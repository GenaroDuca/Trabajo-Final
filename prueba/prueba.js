"use strict"

let btn = document.getElementById("btn")

let input = document.getElementById("input").value
console.log(input)

for (let index = 0; index < 10; index++) {
    if (index<5) {
        console.log("hola")
        break
    }
}