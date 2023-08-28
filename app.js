function add(a, b) {
    console.log(a + b);
}

const fatAdd = (a, b) => {console.log(a + b)};
const fatSub = (a, b) => {console.log(a - b)};
const fatDivide = (a, b) => {console.log(a / b)};
const fatMult = (a, b) => {console.log(a * b)};
const tenX = (value) => {console.log(value * 10)};

 let numberList = [1, 2, 3];

numberList.map(function (value, index, array) {
    return value * 10;      //with let numbers set to above it returns 
    });                     // [10, 20, 30]

const tenTimes = numberList.map(nums) => {console.log(nums * 10)};
    
const numbers = [21, 37, 64, 99, 142];

const negatives = numbers.map(function(num) {
    return num * -1;
});     //Returns numbers with a negatrive value
        // [-21, -37, -64, -99, -142]

const double = numbers.map(function(num) {
    console.log(num * 2);
});

const toDos = [{
    id: 1,
    text: 'walk the dog',
    priority: 'high'
}, {
    id: 2,
    text: 'walk the chickens',
    priority: 'medium'
}, {
    id: 3,
    text: 'feed the cats',
    priority: 'low'
}, {
    id: 4,
    text: 'put out the fire in my garage',
    priority: 'Very High'
}];

const todoID = toDos.map(function(toDos) {
    return toDos.id;
});
const todoText = toDos.map(function(toDos) {
    return toDos.text;          // ['walk the dog', 'walk the chickens', 'feed...]
});
const todoPriority = toDos.map(function(toDos) {
    return toDos.priority;
})


const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function(a) {
    return a.href;
});

//Our version of maps

function myMap(arr, callback) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        const val = callback(arr[i], i, arr);
        mappedArray.push(val)
    }
    return mappedArray;
}

const priorityMap = myMap(toDos, function(todoPriority) {
    return todoPriority.priority;
});     //['high', 'medium', 'low', 'Very high']
const idMap = myMap(toDos, function(todoid) {
    return todoid.id;
});
const textMap = myMap(toDos, function(todoText) {
    return todoText.text;
});

const repeatedString = myMap([ 'a', 'b', 'c', 'd', 'e' ], function(str, idx) {
    return str.repeat(idx);
});     //['', 'b', 'cc', 'ddd', 'eeee']

