// Basic types, static typing
let age:  number= 25
age = 25
let hobby: string = "cooking"
let isAdult: boolean = true

//declare an array
let fruits: string[] = ["apple", "orange"]
let arr: any[] = [22, "a", true]
let numArr: number[][] = [[1], [2]]

//tuples: only 2 values
let employees: [number, string] = [1, "dog"]
let employe: [number, string] [] = [
    [2, "Moe"],
    [3, "mandy"]
]

//objects
let cart: {
    brand: string,
    year:  number
} = {
    brand: "lexus",
    year: 2020
}

//custom types
type Car ={
   brand: string,
    year:  number
}


//intterface
interface Car1 {
    brand: string,
    year: number
}

let newCar: Car1 = {
    brand: "civis",
    year: 2020
}

//union, change to diffrent things
let x : string | number = "number"

type occupation = "employed" | "student"
let jack: occupation = "employed"