window.addEventListener('load', funMood);

var levels = {easy:6, medium: 4, hard: 2 }
var currentLevel;
var time;

function funMood(){
    this.setTimeout(function open(event){
        document.querySelector(".pop-up").style.display="block";
    }, 1000)
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        document.querySelector(".pop-up").style.display="none";
        init();
        switch (button.id){
            case 'easy':
                currentLevel=levels.easy;
                time=levels.easy;
                seconds.innerHTML = currentLevel;
                break;
            case 'medium':
                currentLevel = levels.medium;
                time = levels.medium;
                seconds.innerHTML = currentLevel;
                break;
            case 'hard':
                currentLevel = levels.hard;
                time = levels.hard;
                seconds.innerHTML = currentLevel;
                break;
        }
    });
});

let score = 0;
let isPlaying;
const wordInput = document.querySelector("#wordInput");
const currentWord = document.querySelector("#currentWord");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const word = ['hat', 'river', 'javascript', 'sai', 'praveen', 'sai praveen', 'lucky', 'statue', "giraffe", "rainbow", "tornado", "kite", "whale", "banana", "vase", "pencil", "jellyfish", "lighthouse",
    "elephant", "dolphin", "quilt", "watermelon","xylophone", "zebra", "fireworks", "quokka", "jacket", "dog", "octopus", "monkey", "flower",
    "helicopter", "orange", "mountain", "ice cream", "airplane", "notebook", "grape", "tiger", "carrot", "candle", "noodle", "lemon", "umbrella",
    "sunglasses", "apple", "penguin", "zebra", "volcano", "kangaroo", "rabbit", "honey" ];



function init(){
    wordInput.addEventListener('input', startMatch);
    randomWord(word);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 100);
}

function startMatch(){
    if(matchWord()){
        isPlaying = true;
        score = score+1 ;
        time = currentLevel+1;
        randomWord(word);
        wordInput.value = "";
    }
    if(score === -1){
        scoreDisplay.innerHTML = '0';
    } else{
        scoreDisplay.innerHTML = score;
    }
}
function matchWord(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'currect!';
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
}
randomWord=(word)=>{
    const randomIndex = Math.floor(Math.random() * word.length);
    currentWord.innerHTML = word[randomIndex];
}
countdown = ()=>{
    if((time>0) &&(isPlaying)){
        time--;
    }else if(time === 0 ){
        isPlaying=false;
    }
    timeDisplay.innerHTML = time;
}
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML="Game Over! ";
        score = -1;
    }
}
