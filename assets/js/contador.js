let valueWrapper = document.getElementById("currentNumber")
let currentNumber = 0;

function decrement() {
    currentNumber = currentNumber - 1;
    valueWrapper.innerHTML = currentNumber;


}

function increment() {
    currentNumber = currentNumber + 1;
    valueWrapper.innerHTML = currentNumber;

}