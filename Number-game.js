const slider = document.getElementById("myRange");
const maxWindow = document.querySelector(".max");
const minus = document.querySelector('.minus');
const plus  = document.querySelector('.plus');
const diapason_Alert = document.querySelector('.diapason');
let diapason, randomNumber, tries, number;;
const numberField = document.getElementById("search-number"); 
const infoField = document.querySelector('.info-wrapper')
numberField.disabled = true;
slider.oninput = function() {
    maxWindow.innerHTML = slider.value;
    diapAlert()
}
const start = document.getElementById('start');
start.addEventListener('click',generateNum);
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



function NBG(i){
    document.querySelector(".number-icon").onclick = function() {
        number = numberField.value;
        numberField.value='';
        if (i <= tries && i > 0) {
                if(isNaN(number) || number == 0){
                infoField.innerHTML = 'введіть,будь ласка,корректно' + `ти використав ${i} спроб`
                i--
                }
                else if(number < RandomNumber) {
                    infoField.innerHTML = 'твоє число замале' + `ти використав ${i} спроб`
                }
                else if(number > RandomNumber) {
                    infoField.innerHTML = 'твоє число завелике' + `ти використав ${i} спроб`
                }
                
                else if(number == RandomNumber){
                    infoField.innerHTML = ('you win')
                    start.disabled = false;
                    numberField.disabled = true;
                }
            i++
        }
        else{
            infoField.innerHTML = ('you are failed!!')
            start.disabled = false;
            numberField.disabled = true;
        }
    }


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
    numberField.disabled = false;
    start.disabled = true;
    NBG(1)
}

document.getElementById('search-number')/addEventListener('keypress',function(){
    if(event.key == 'Enter'){
        this.event.preventDefault();
        this.document.querySelector('.number-icon').click();
    }    
})