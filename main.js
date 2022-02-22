// 1
let a = Number(prompt('A'));
let b = Number(prompt('B'));
num();
function num() {
    if (a > b){
        console.log('Первое больше');
    }else if (a < b){
        console.log('Второе больше');
    }else{
        console.log('Равно');
    }
}

// 2

let weight = Number(prompt("Weight"));
let height = Number(prompt("Height"));
S();

function S(){
    if (height == 0){
        console.log(Math.pow(weight, 2));
    }else if (weight == 0){
        console.log(Math.pow(height, 2));
    }else{
        console.log(weight*height);
    }
}

// 3

let num_first = Number(prompt("first_num"));
let num_second = Number(prompt("second_num"));
Sum();

function Sum(){
    if (num_first == 0){
        console.log("Ошибка");
    }else if (num_second == 0){
        console.log("Ошибка");
    }else{
        console.log(num_first + num_second);
    }
}

// 4

let number = Number(prompt("num"));
let degree = Number(prompt("degree"));
num_degree();

function num_degree(){
    if (degree == 0){
        console.log(Math.pow(number, 2));
    }else{
        console.log(Math.pow(number, degree));
    }
}

// 5

let Name = prompt("Name");
let Year = Number(prompt("Year"));
Hello();

function Hello() {
    if(Year <= 25){
        console.log(Name + ", добрый день");
    }else if(Year >= 25){
        console.log(Name + ", добрый вечер");
    }
}

// 6

let Sex = prompt("Your sex");
Your_sex();

function Your_sex() {
    if(Your_sex === "M"){
        console.log("Ваш пол мужской");
    }else if(Your_sex === "F"){
        console.log("Ваш пол женский");
    }else{
        console.log("Ваш пол не опеределен");
    }
}

// 7

let day = Number(prompt("day"));
Your_day();

function Your_day(){
    switch (day) {
        case 1:
            console.log("Понедельник");
            break;
        case 2:
            console.log("Вторник");
            break;
        case 3:
            console.log("Середа");
            break;
        case 4:
            console.log("Четверг");
            break;
        case 5:
            console.log("Пятница");
            break;
        case 6:
            console.log("Суббота");
            break;
        case 7:
            console.log("Воскресенье");
            break;
    }

}

// 8

let numbers = [1.5, -2.828983928938727, 3, 8, 11];
medium_num();

function medium_num(){
let cum = 0;
let result = 0;
let divide = 0;
for (num of numbers) {
    cum += num;
    divide ++;
}
result = cum / divide;
console.log(Math.round(result));
}