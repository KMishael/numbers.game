const slider = document.getElementById("myRange");
const maxWindow = document.querySelector(".max");
const minus = document.querySelector('.minus');
const plus  = document.querySelector('.plus');
const diapason_Alert = document.querySelector('.diapason');
let diapason,randomNumber,tries;
slider.oninput = function() {
    maxWindow.innerHTML = slider.value;
    diapAlert()
}
const start = document.getElementById('start');
start.addEventListener('click',NBG);
minus.addEventListener('click',sliderminus);
plus.addEventListener('click',sliderplus);

function sliderminus() {
    slider.value--;
    maxWindow.innerHTML = slider.value;
    diapAlert()
}
function sliderplus() {
    slider.value++;
    maxWindow.innerHTML = slider.value;
    diapAlert()
}
function diapAlert() {
    diapason_Alert.innerHTML = `you must guess number from 1 to ${slider.value}`
}



function NBG(){
    alert('ok')

    // let number;
    // for (let i=1;i<=tries;i++) {
    //     number = +prompt('what number?')
    //     if(number < RandomNumber) {
    //         alert('твоє число замале')
    //     }
    //     else if(number > RandomNumber) {
    //         alert('твоє число завелике')
    //     }
    //     alert(`ти використав ${i} спроб`)
    //     if(RandomNumber==number){
    //         alert('you win')
    //         break;
    //     }
    // }
}
function generateNum(){
        diapason = Number(slider.value)

    let triesButton = document.getElementsByName("tries")
    for(let i=0; i<triesButton.length;i++) {
        if (triesButton[i].checked){
        if (triesButton[i].id == 'easy') {
                tries = 15;
            }
            else if (triesButton[i].id == 'medium') {
                tries = 10;
            }
            else if (triesButton[i].id == 'hard') {
                tries = 5;
            }
            else if (triesButton[i].id == 'extreme') {
                tries = 3;
            }
        }
    }
    RandomNumber = Math.floor(Math.random() * diapason+1);
    NBG()
}
