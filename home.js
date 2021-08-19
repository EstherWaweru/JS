console.log("Yello");
function greeting(name){
    return "Hello "+name;

}
// console.log(greeting(prompt("Enter your name?")));

function sumNumbers(num1,num2){
    return num1+num2
}
var num1 = 10;
var num2 = 89;
console.log(sumNumbers(num1,num2))

// while loops
var num = 0
while(num<10){
    num++;
    console.log(num);
}
// for loop
let i = 0
for(i = 0;i<10;i++){
    console.log(i);
}
//Data types
let age = 18; //number
let yourName = 'Bob';//string
let name = {'first':'Jane','last':'Goe'} //object
let truth = false; //boolean
let groceries = ['Apple','Banana'] //array
let random; //undefined
let nothing = null; //value null

//Strings in Javascript(common methods)
let fruit = 'banana';
let morefruit = 'banana\napple'
console.log(morefruit);
console.log(fruit.length);
console.log(fruit.indexOf('q'));
console.log(fruit.slice(2,5));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''))//split by character
console.log(fruit.split('a'))

//Arrat
let fruits = ['banana','apple','pineapple','orages']
fruits = new Array('banana','apple','pineapple','orages')
console.log(fruits[2]);
for (let i = 0 ;i<fruits.length;i++){
    console.log(fruits[i]);
}
//array common methods
console.log('to string',fruits.toString());
console.log(fruits.join(' '));
console.log(fruits.pop(),fruits);
console.log(fruits.push('blackberruies'),fruits);
fruits[5] = 'blueberries';
console.log(fruits);
fruits.shift(); //remove firest element from array
console.log(fruits);
fruits.unshift('kiwi');//add first eelement in the array
console.log(fruits);
let veg = ['asparegaeous','tomato','brocolli']
let allGroceries = fruits.concat(veg)
console.log(allGroceries);
console.log(allGroceries.slice(2,4))
console.log(allGroceries.reverse());
let someNumbers = [1,2,3,67,3,4]
console.log(someNumbers.sort(function(a,b){return b-a}))//sorted in descending order

let emptyArray = new Array();
for (let num = 0;num < 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);
//objects
let student = {'first':'Essy','last':'Programmer',age:25,'height':170,
               studentInfo:function(){
                   return this.first + '\n' + this.last;
               }};
console.log(student['first']);
console.log(student['age']);
console.log(student['last']);
student['first'] = 'Maybelle'
console.log(student);
console.log(student.studentInfo());
console.log(student.toString())
//conditional statements
var ages = 45;
if( ages >=18 && ages<=35){
    status = 'target demo';
    console.log(status);
}else{
    status = 'not my audience';
    console.log(status);
}
//Switch statetments 
switch(6){
    case 0:
        text ='Weekend';
        break;
    case 5:
        text = 'Weekend';
        break;
    case 6:
        text = 'Weekend';
        break;
    default:
        text = 'Weekday';
        
}
console.log(text);

