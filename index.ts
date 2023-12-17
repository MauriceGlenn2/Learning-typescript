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
let jackOccupation: occupation = "employed"

//type assertion
let y: any = "a"
y = <number> 22

//functions
function add(a: number, b: number): number {
    return a + b
}
add(1, "p") //going to be an error, only numbers
add(1, 2)

//function that don't return anything
function sayHi(): void {
    console.log("hi")
}

//Genereics
//give the function a placeholder of T, T can be anything
function copyArray<T>(arr: T[]): T[] {
    return [...arr]
}
//number & string is now the placeholder
let numCopy = copyArray<number>([1, 2, 3])
let stringCopy = copyArray<string>(["a", "b", "c"])

//Enums, buch of options

enum FaveColor {
    Red = "my fave color",
    Green = "my second fave color",
    Blue = "my third fave color"
}
//enum example
// and a ? for an optional value
interface Student {
    name: string,
    age?: number,
    faveColor: FaveColor
}

function displayStudent(student: Student): void {
    // "\n" is a new line
    const info: string = student.name + "\n" + student.age + "\n" + student.faveColor
    document.body.innerText = info
}
displayStudent({
    name: "Moe",
    age: 22,
    faveColor: FaveColor.Red
})