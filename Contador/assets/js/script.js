resultado = 0;
let currentNumberWrap = document.getElementById("currentNumber");
let currentNumber = 0;
function decrement(){
    if(currentNumber <= 0){
        currentNumberWrap.style.color = "Red";
     
    }
    currentNumber = currentNumber -= 1;
    currentNumberWrap.innerHTML = currentNumber;

}
function increment(){
    if(currentNumber >= 0){
        currentNumberWrap.style.color = "Green";
    }

    currentNumber = currentNumber += 1;
    currentNumberWrap.innerHTML = currentNumber;
    
    }
    