//Number Guessing Game

const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random()*(maximum-minimum +1)+minimum);

let attempts =0 ;
let guess;

let running = true;

while(running==true){
    guess = window.prompt(`Guess a number berween ${minimum} & ${maximum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number ");
    }
    else if(minimum>guess || maximum<guess){
        window.alert("please enter a valid number");
    }
    else{
        attempts ++;
        if(guess <answer){
            window.alert("Too Low ! Try agian");
        }
        else if(guess> answer){
            window.alert("Too high try again");
        }
        else{
            window.alert(`congrajulations It took you  ${attempts} attempts to guess the number ${guess}`);
            running=false;
        }
    }
}



    