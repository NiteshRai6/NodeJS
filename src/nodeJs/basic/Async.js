// 1. NodeJS Asynchronous Advantage Example
// console.log('1st Program');

// setTimeout( () => {
//     console.log('2nd Program');
// }, 3000);

// console.log('3rd Program');


// 2. NodeJS Asynchronous Drawback Example
// let a = 10;
// let b = 0;

// setTimeout(() => {
//     b = 20;
// }, 3000);

// console.log(a + b);


// 3. By using JS Promise, Remove Async Drawbacks
// let a = 10;
// let b = 0;

// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(20)
//     }, 3000);
// });

// waitingData.then((data) => {
//     b = data;
//     console.log(a + b);
// });

// 4. NodeJS Architecture Example
console.log('1st Program');

setTimeout( () => {
    console.log('2nd Program - 2 Second Log');
}, 2000);

setTimeout( () => {
    console.log('3rd Program - 0 Second Log');
}, 0);

console.log('4th Program');