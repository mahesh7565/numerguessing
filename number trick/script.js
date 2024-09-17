

let btn = document.getElementById('btn')
let output = document.getElementById('outputtext')

let number = [Math.floor(Math.random() * 100)]


btn.addEventListener('click', function (){
    let input = document.getElementById('userInput').value;
    if(input == number){
        output.innerHTML = `you guess right, your number was ${number}`;

    }
    else if(input < number){
        output.innerHTML = "you guessed too Low!"
    }

    if(input > number ){
         output.innerHTML = "you guessed too High!"
    }
});
