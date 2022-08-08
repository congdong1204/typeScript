// --------------- BASIC TYPE --------------- //

// String
let firstName = 'DongPham'
let lastName : string
lastName = 'Cong'

// Number
let age = 30
let days : number
days = 31

// Boolean
let isValid = true
let isActive : boolean
isActive = false

// Undefined, null
let u : undefined
let n : null

// Any
let anyType : any
anyType = 30
anyType = true
anyType = 'Dong'

// --------------- OBJECT TYPE --------------- // 

let singer = {name: 'Den Vau'}
singer.name = 'My Tam'

let singerA : {name: string, age: number}
singerA.name = 'Lan Ngoc'
singerA.age = 30

let actor : { name: string, age?: number} = {name: 'Chris'} // Them dau cham hoi => optional

// --------------- ARRAY TYPE --------------- // 

// Array Any
 let array = []
 array.push(3)
 array.push('string')
 array.push(true)

// Array String
let array1 = ['a', 'b', 'c']
array1.push('d')

let array2 : string[]
array2.push('Dong')

// Array Number
let array3 : number[]
array3.push('hello'.length)

// Array boolean
let array4 : boolean[]
array4.push(true)
array4.push(false)

// Array Object
let array5 : {title: string, body: string}[]
array5.push({title: 'News', body: 'Content'})

// --------------- FUNCTION TYPE --------------- // 

// Function return value
const sum = (num1, num2) => {
    return num1 + num2
}
sum('hello', 2)

const sum2 = (num1: number, num2: number) : number => {
    return num1 + num2
}
sum2(4, 9)

const calcLength = (string1: string, string2: string) : number => {
    return string1.length + string2.length
}

type functionType = (num1: number, num2: number) => number
const sum3 : functionType = (a, b) => {
    return a + b
}

// Function not return value
const hello = () : void => {
    console.log('Hello World')
}

// --------------- UNION TYPE AND ENUM TYPE --------------- // 

// Union
let size : string | number
size = 36
size = 'XL'

// Enum
enum Colors {
    red = 'red', green = 'green', blue = 'blue'
}

let backgroundColor = Colors.blue 

// --------------- INTERFACE TYPE --------------- // 

let actorA : {name: string, age: number}
let singerB : {name: string, age: number} // Viet lap lai kieu nhu nay khong toi uu => Interface

interface Iperson {
    name: string,
    age: number
}

let actorB : Iperson
let singerC : Iperson

actorB = {name: 'Thanh Hang', age: 35}

// --------------- GENERIC TYPE --------------- // 

const helloo = <T>(a: T) => {
    console.log(a)
    return 3
}

helloo(99)
helloo('Hi')
helloo<boolean>(true) // Syntax khac khi dung voi Generic

// --------------- CLASS --------------- // 

// Public
class Car {
    public name: string
    year: number           // De mac dinh (khong ghi public) thi se la public
    constructor (name: string, year: number) {
        this.name = name,
        this.year = year
    }
}

let car1 = new Car('Audi', 45)
car1.name = 'Mazda'
car1.year = 24

// Private
class Cake {
    public name: string
    private date: number
    constructor (name: string, year: number) {
        this.name = name,
        this.date = year
    }
}

let cake = new Cake('Pancake', 30)
cake.name = 'Mazda'
// cake.date ---- KHONG THE TRUY CAP THUOC TINH date VI PRIVATE

// Readonly
class Milk {
    readonly name: string
    private date: number
    constructor (name: string, year: number) {
        this.name = name,
        this.date = year
    }
}

let milk = new Milk('Vinamilk', 15)
// milk.name = 'DustLady' --- KHONG THE GAN LAI GIA TRI CHO name VI readonly

// Short version
class Computer {
    constructor (public name: string, readonly year: number, private CPU: boolean) {
    }
} // Với phiên bản rút gọn thì TS sẽ tự khai báo thuộc tính ban đầu và nội dung bên trong constructor


let computer = new Computer('Dell', 2, false)