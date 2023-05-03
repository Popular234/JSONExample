const myArray = ['milk', 'coffee', 'tea', 'soda', 'water'];

console.log(myArray);

const myJSONarray = JSON.stringify(myArray);

console.log(myJSONarray)

const myObj = {
    Name: "Cain",
    Age: "17",
    Job: "fast food worker",
    kids: "what?"
}

console.log(myObj)

const MyJSONobject = JSON.stringify(myObj)

console.log(MyJSONobject)

localStorage.setItem('myObj', MyJSONobject);

console.log(localStorage)

let info = localStorage.getItem('myObj')

console.log(info)

let newObject = JSON.parse(info);

console.log(newObject)