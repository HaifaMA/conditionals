let number = 10;
if(number % 2 === 0){
    console.log(`${number} is even`);
}
else{
    console.log(`number is odd`);
}

let age = 24;
if(age < 18){
    console.log('You are a minor');
}
else if(age >= 18 && age <= 65){
    console.log('You are an adult');
}
else{
    console.log('You are a senior');
}

let letter = 'e';
if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
    console.log('The letter is a vowel');
}
else{
    console.log('The letter is not a vowel');
}

let num1 = 30;
let num2 = 15;
num3 = 45;
if(num1 >= num2 && num1 >= num3){
    greatest = num1;
}
else if(num2 >= num1 && num2 >= num3){
    greatest = num2;
}
else{
    greatest = num3;
}
console.log(`The greatest number is ${greatest}`);

let password = 'Test1233';
if(password.length < 8){
    console.log('Password too short');
}
else if(`/\d\.test(password) && /[a-zA-Z]/.test(password)`){
    console.log('passowrd is accepted');
}
else{
    console.log('passowrd is rejected');
}