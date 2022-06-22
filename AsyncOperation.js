// const getData = async() =>{
//     var data ="Hello world";
//     return data;
// }
// getData().then(data => console.log(data));

// const getData = async() =>{
//     var data = await "Hello World";
//     console.log(data);
// }
// console.log(1);
// getData();
// console.log(2);

// function resolveafter5secs() {
//     return new Promise((resolve) => resolve("Hello"));
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(abc);
//         }, 5000);
//     });
// }
// async function asyncCall() {
//     let abc = 6;
//     console.log("Calling");
//     const result = await resolveafter5secs();
//     console.log("result --->>", abc);
//     console.log("after resolve");
// }
// asyncCall();

// function asyncOperationalMethod(){
//     let first_Promise = new Promise((resolve) => resolve("Hi"));
//     let second_Promise = new Promise((resolve) =>{
//         setTimeout(() =>{
//             resolve("Hello");
//         },2000);
//     });
//     let combined_Promise = Promise.all([first_Promise,second_Promise]);
//     return combined_Promise; 
// }
// function Display(){
//     const data = await asyncOperationalMethod();
//     console.log(data);
// }
// Display();

const uno = () => {
    return "I am One";
};

const dos = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("I am Two");
        },3000);
    });
};

const tres =() =>{
    return "I am three";
};

const callAll = async() => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};
callAll();