const buttonValues = [
    'AC','+/-','%','÷',
    '7','8','9','×',
    '4','5','6','-',
    '1','2','3','+',
    '0','.','='
];

const rightSymbols = [
    '÷','×','-','+','='
];

const topSymbols = [
    'AC','+/-','%'
];

const numbers = [
    '7','8','9',
    '4','5','6',
    '1','2','3',
    '0','.'
];

const display = document.querySelector('.display');

let a = 0;
let operator = null;
let b = null;

function reset(){
    a = 0;
    operator = null;
    b = null;
}

for(let i = 0;i < buttonValues.length;i++){
    let value = buttonValues[i]; //string
    let button = document.createElement('button');
    button.innerText = value;
    button.classList = value;

    button.addEventListener('click',()=>{
        if(numbers.include(value)){
            if(value == '.'){
                if(display.value != '' && display.value.include('.')){ //avoid multiple '.'
                    display.value += value;
                }
            }
            else if(display.value == '0'){
                display.value = value; //this is hard, avoid multiple 0. It means 0 = reset at first.
            }
            else{ //numbers
                display.value += value;
            }
        }

        if(topSymbols.include(value)){
            if(value == 'AC'){
                display.value = ''; //reset the look
                reset(); //reset the function
            }
            if(value == '+/-'){
                if(display.value != '' && display.value != '0'){
                    display.value = Number(display.value)*(-1);
                }
            }
            if(value == '%'){
                display.value = Number(display.value)/100; //need to convert into number
            }
        }

        if(rightSymbols.include(value)){

        }

    })
}