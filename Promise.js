// function func1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const value = true;
//             if (value) {
//                 console.log("Resolved");
//                 resolve();
//             }
//             else {
//                 console.log("Rejected");
//                 reject();
//             }
//         },2000);
//     });
// }
// func1().then(function(){
//     console.log("Thanks for resolving");
// }).catch(function(){
//     console.log("Promise not fullflled");
// })

// async function func1(){
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             resolve("Done");
//         },2000);
//     });
//     let result = await promise;
//     console.log(result);
// }
// func1();

async function Equality(){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            const a ="Manha";
            const b= "Manha";
            if(a == b){
                console.log("Resolved");
                resolve();
            }
            else{
                console.log("Rejected");
                reject();
            }
        },2000);
    });
}
Equality().then(function(){
    console.log("Both name are same");
}).catch(function(){
    console.log("Both are not same name");
});