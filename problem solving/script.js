// //  A. Adding / Removing Elements (push, pop, shift, unshift)
// //Question:
// // 1.Create an array of fruits and add "grape" at the end using push().
// const fruits = ["apple","banana","orange"]
// fruits.push("grape");
// console.log(fruits)

// //2.Remove the last fruit using pop() and print the updated array.
// console.log(fruits);
// // After adding pop()
// fruits.pop();
// console.log(fruits);

// // 3.Add "mango" at the beginning using unshift().
// console.log(fruits);
// // After adding unshift()
// fruits.unshift("mango");
// console.log(fruits);

// //4.Remove the first fruit using shift() and log the result.
// console.log(fruits);
// // After adding shift()
// fruits.shift();
// console.log(fruits);

// //5.Add multiple fruits ("pear", "kiwi") at once using push().
// console.log(fruits);
// fruits.push("pear","kiwi");

// //6.Add multiple elements at the start ("strawberry", "blueberry") using unshift().
// console.log(fruits);
// fruits.unshift("strawberry","blueberry");
// console.log(fruits);

// //7.Create a queue simulation — enqueue and dequeue names using push() and shift().

// let queue = [];

// function enqueue(name){
//     queue.push(`${name}`);
//     console.log(`${name}`);
//     console.log( queue); 
//     displayQueue();
// }
// function dequeue(name){
//     if(queue.length === 0){
//         console.log("Queue is Empty your can not remove the Element");
        
//     } 
//     else{
//         queue.shift();
//         console.log(queue);
//         displayQueue()
//     }
// }
// function displayQueue(){
//     console.log(queue)
// }
// enqueue("Abishek");
// enqueue("Arulraj");
// enqueue("praya");
// dequeue();
// dequeue();
// dequeue();
// enqueue("Vidhya")
// dequeue()
// dequeue();

// //8.Create a stack simulation — push and pop numbers like a stack.
// let Name =[];

// function adding(name){
//     Name.push(`${name}`);
//     console.log(`${name}`);
//     console.log(Name);
//     displayQueue1()
// }

// function deleted(){
//     if(Name.length === 0){
//         console.log("Name is Empty you can not remove the Element");
//     }
//     else{
//         Name.pop();
//         console.log(Name);
//         displayQueue1()
//     }
// }
// function displayQueue1(){
//     console.log("Current Status:"+Name)
// }
// adding("abishek");
// adding("Arun");
// adding("Gopi");
// deleted();
// deleted();
// deleted();
// deleted();
// adding("praya");
// adding("gv");

// //9.Start with an empty array and use only push() and unshift() to create [3, 2, 1, 4, 5].
// let array = [];
// array.unshift(1);
// array.unshift(2);
// array.unshift(3);
// array.push(4);
// array.push(5);

// //10.Combine pop() and shift() to remove both first and last elements and print remaining.
// let number = [1,2,3,4,5,6,7,8,9,10];
// number.pop()
// number.shift()
// console.log(number);
// number.pop()
// number.shift()
// console.log(number);
// number.pop()
// number.shift()
// console.log(number)
// number.pop()
// number.shift()
// console.log(number)
// // completes A.....

// // 🔹 B. Searching & Checking (includes, indexOf, lastIndexOf)

// // 1.Check if "apple" exists in ["apple", "banana", "mango"] using includes().

// let fruits =  ["apple", "banana", "mango"]
// console.log(fruits)
// const search = fruits.includes("apple")
// console.log(search);

// //2.Find the index of "mango" using indexOf().
// console.log(fruits);
// const includes = fruits.includes("mango");
// console.log(includes);

// //3.Find the last occurrence of "red" in ["red", "blue", "green", "red"].

// let colour = ["red", "blue", "green", "red"];
// console.log(colour.lastIndexOf("red"))

// //4.Write a function to check if a number exists in an array before pushing it.

// let number = [];

// function addingno(num){
//     if(!number.includes(num)){
//         number.push(num)
//         console.log(`${num} add in array`)
//     }
//     else{
//         console.log(`${num} already in the array`);
//     }
//     console.log(number)
// }
// addingno(1);
// addingno(2);
// addingno(3);
// addingno(2);
// addingno(4);

// //5.Given [10, 20, 30, 10, 50], remove the last occurrence of 10.

// //6.Check if "grape" exists before adding it to the fruit list
// console.log(fruits)
// console.log(fruits.includes("grape"));

// //7.Use indexOf() to replace "banana" with "melon".

// console.log(fruits);
// console.log(fruits.indexOf("banana"));
// fruits[1] = "melon"
// console.log(fruits);

// //8.Write a function that returns true if a string is present twice in an array.

// //9.Combine includes() with an if statement to check user access in a list.
// let acount = ["Abishek","gowtham","vidya","vinoth","kumar"]
// let username = "Abishek"

// if(acount.includes(username)){
//     console.log(`${username} has access`)
// }
// else{
//     console.log(`${username} not have acces to acount`);
// }

// //10.Create a function that returns the position of an element, or "Not Found".
// let animals = ["Lion", "Giraffe", "Fox", "Deer"];
// function animalPosition(element){
//     if(animals.includes(element)){
//         console.log(animals.indexOf(element))
//     }
//     else{
//         console.log("Not Found")
//     }
// }
// animalPosition("Lion");
// animalPosition("Giraffe");
// animalPosition("Deer");
// animalPosition("lion");

// // 🔹 C. Transforming Arrays (map, filter, reduce, flat, flatMap)

// //1.Use map() to square all numbers in [2, 4, 6, 8].
// let square = [2, 4, 6, 8].map(x=> x * x);
// console.log(square);

// //2.Use filter() to get even numbers from [1, 2, 3, 4, 5, 6].
// let numbers = [1, 2, 3, 4, 5, 6];
// let even = numbers.filter(x=>x%2==0)
// console.log(even);

// let odd = numbers.filter(x=> x%2==1)
// console.log(odd)

// //3.Use reduce() to find the sum of all numbers in [5, 10, 15].
// let sum = [5, 10, 15];
// let sumofno =sum.reduce((a,b)=>a+b)
// console.log(sumofno);

// //4.Use reduce() to find the largest number in an array.
// let number = [10,20,30,40,50,100,10];
// let largest = number.reduce((a,b)=>{
//     return a > b ? a : b
// })
// console.log(largest);

// //5.