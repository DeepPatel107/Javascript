// console.log("Hello JS");
// const student = {
//     fullName:"Rahul Kumar",
//     age:20,
//     cgpa:8.2,
//     isPass: true,

// };

// student.name="Rahul Sharma";

// console.log(student.name);
// console.log(student.fullName);

// const product={
//     title:"Ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270,
// };

// const profile={
//     userName:"@shradhakhapra",
//     isFollow: false,
//     bluetick: true,
//     followers: 123,
//     following: 123,
//     bio:"tgfgwegtgegfrdfefrgfqrqrfqdfdd",
// }


// let num=prompt("Enter a number :");
// if(num%3===0){
//     console.log(num,"is a multiple of 3");
// }
// else{
//     console.log(num,"is NOt a multiple of 3");
// }

// let score=prompt("Enter your score :");
// let grade;
// if(score<101 && score>89){
//     grade="A";
// }
// else if(score<90 && score>79){
//     grade="B";
// }else if(score<80 && score>69){
//     grade="C";
// }else if(score<70 && score>59){
//     grade="D";
// }else if(score<60 && score>49){
//     grade="E";
// }
// console.log(score);
// console.log(grade);


// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// console.log(sum/marks.length);

// let price=[250,645,300,900,50];
// let i=0;
// for(let val of price){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val/10;
//     price[i]=price[i]-offer;
//     console.log(`value after offer = ${price[i]}`);
//     i++;
// }

// let arr=[1,2,3,4,5];
// arr.forEach(val=>{
//     console.log(val*val);
// });

// let newArr = arr.map(val =>{
//     return val*2;
// })
// console.log(newArr);

// let new2Arr = arr.filter(val => {
//     return val%2!==0;
// })
// console.log(new2Arr);

// const sum = arr.reduce((res,curr)=>{
//     return res+curr;
// })

// console.log(sum);

// const opt = arr.reduce((res,curr)=>{
//     return res>curr ? res:curr;
// })
// console.log(opt);

// let marks=[98,87,76,96,64];

// let filterMarks = marks.filter(val=>{
//     return val>90;
// }) 
// console.log(filterMarks);

// let n = prompt("Enter a number :" );
// let arr=[];

// for(let i=0;i<n;i++){
//     arr[i]=i+1;
// }

// console.log(arr);

// const sum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(sum);
// const prod=arr.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log(prod); 