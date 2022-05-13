let clicked = 0;
let clickPower = 1;
let button = document.querySelector(".btn");
let redBullButton = document.querySelector(".red-bull-btn");

button.addEventListener("click", handleClick);
redBullButton.addEventListener("click", buyRedBull);

function handleClick(){
    clicked += clickPower;
    button.innerHTML = "Clicked: " + clicked;
}

function buyRedBull(){
    if (clicked >=25) {
        clicked -= 25;

        button.innerHTML = "Clicked:" + clicked;

        clickPower *= 2;
        redBullButton.disabled = true;
        
    }
}