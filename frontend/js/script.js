class Slotmachine{
    constructor(){
        this.bet = 0;
        this.money = 10;
        this.icons = ['cherry', 'barBlue', 'barGreen', 'barRed', 'sevenBlue', 'sevenGreen', 'sevenRed', 'bonus'];
    }

    roll(icons){
        return Math.floor(Math.random() * this.icons.length)
    }
    game(){
        let gamematch = [];
        for(let i = 0; i < 3; i++){
            gamematch.push(this.icons[this.roll(this.icons)]);
        }
        return gamematch
    }
    match(gamematch){
        if (gamematch[0] == gamematch[1] && gamematch[1] == gamematch[2]){
            console.log("entrei tudo igual", this.icons.indexOf(gamematch[0]) += 3);
            return this.icons.indexOf(gamematch[0]) += 3
        }
        let bar = ['barBlue', 'barGreen', 'barRed'];
        for(let i = 0; i < 3; i++){
            if(bar.indexOf(gamematch[i]) >= 0){
              bar.splice(bar.indexOf(gamematch[i]),1);
            }
          }
          if (bar.length == 0){
            console.log("entrei no BAR");
            return 1
          }
        let seven =['sevenBlue', 'sevenGreen', 'sevenRed'];
        for(let i = 0; i < 3; i++){
            if(seven.indexOf(gamematch[i]) >= 0){
              seven.splice(seven.indexOf(gamematch[i]),1);
            }
          }
          if (seven.length == 0){
            console.log("entrei no SEVEN");
            return 2
        }
        console.log("fui direto pro final");
        return 0
    }

    wallet(bet){
        this.bet = bet;
        this.money = this.money - this.bet;
        return this.money
    }

    win(game){
      let numero;
      let oi;
      const teste = ['barBlue', 'barGreen', 'barRed'];
       console.log("TESTE",this.match(teste), this.bet);
        numero =this.bet * this.match(teste);
      this.money = this.money + numero;
      oi = 0.75 * 2;
        console.log('DINDIN',numero, oi, this.money);
        return this.money  
    }
    resetGame(){
        const beginGame = ['?', '?', '?'];
        return beginGame
    }
}

const slotmachine = new Slotmachine;

const btnRightElement = document.getElementById('btnRight');

const firstColum = document.getElementById('columOne');
const secondColum = document.getElementById('columTwo');
const thirdColum = document.getElementById('columThree');

const yourMoney = document.getElementById('cupom');
const plus10 = document.getElementById('btn10');
const plus25 = document.getElementById('btn25');
const plus50 = document.getElementById('btn50');
const plusDollar = document.getElementById('btnDollar');
const takeBack = document.getElementById('takeMoney');
const betMoney = document.getElementById('bet');

let din = 0;

let cash = (cents) => {
    if (cents === 'x'){
        din = 0;
        return betMoney.innerHTML = din;
    }
    din += cents;
    betMoney.innerHTML = din;
}

function printWalletBet(din){
    const cash = slotmachine.wallet(din);
    yourMoney.innerHTML = cash;
    betMoney.innerHTML = 0;
}
function printWalletWin(icons){
    const winCash = slotmachine.win(icons);
    console.log("ICONS", icons, "winCash", winCash);
    yourMoney.innerHTML = winCash;
}

function convertChar(icons){
    let iconsRound = [];
     
    for(let i = 0; i < icons.length; i++)
    {
        switch(icons[i]){
            case 'cherry':
                iconsRound.push('&#127826');
                break;
            case'barBlue':
                iconsRound.push('BAR');
                break;
            case'barGreen':
                iconsRound.push('BAR<br>BAR');
                break;
            case'barRed':
                iconsRound.push('BAR<br>BAR<br>BAR');
                break;
            case'sevenBlue':
                iconsRound.push('7');
                break;
            case'sevenGreen':
                iconsRound.push('7');
                break;
            case'sevenRed':
                iconsRound.push('7');
                break;
            case'bonus':
                iconsRound.push('&#127826;');
                break;
        }
    }
    printluckyGame(iconsRound);
    printWalletWin(icons);
}

function color(icons){
    if(icons[0] === 'barBlue' || icons[0] === 'sevenBlue'){
            firstColum.classList.toggle('blue');
            firstColum.classList.toggle('color');
    }
    if(icons[0] === 'barGreen' || icons[0] === 'sevenGreen'){
            firstColum.classList.toggle('green');
            firstColum.classList.toggle('color');
    }
    if(icons[0] === 'barRed' || icons[0] === 'sevenRed'){
            firstColum.classList.toggle('red');
            firstColum.classList.toggle('color');
    }
    if(icons[1] === 'barBlue' || icons[1] === 'sevenBlue'){
            secondColum.classList.toggle('blue');
            secondColum.classList.toggle('color');
    }
    if(icons[1] === 'barGreen' || icons[1] === 'sevenGreen'){
            secondColum.classList.toggle('green');
            secondColum.classList.toggle('color');
    }
    if(icons[1] === 'barRed' || icons[1] === 'sevenRed'){
        secondColum.classList.toggle('red');
        secondColum.classList.toggle('color');
    }
    if(icons[2] === 'barBlue' || icons[2] === 'sevenBlue'){
        thirdColum.classList.toggle('blue');
        thirdColum.classList.toggle('color');
    }
    if(icons[2] === 'barGreen' || icons[2] === 'sevenGreen'){
        thirdColum.classList.toggle('green');
        thirdColum.classList.toggle('color');
    }
    if(icons[2] === 'barRed' || icons[2] === 'sevenRed'){
        thirdColum.classList.toggle('red');
        thirdColum.classList.toggle('color');
    }
    convertChar(icons);
}

function printluckyGame(iconsRound){
    firstColum.innerHTML = iconsRound[0];
    secondColum.innerHTML = iconsRound[1];
    thirdColum .innerHTML = iconsRound[2];
}
function anotherGame(){
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('start');
    btnRightElement.innerText = 'SPIN';
}

function play(){
    let icons = [];
    printWalletBet(din);
    icons = slotmachine.game();
    color(icons);
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('start');
    btnRightElement.innerText = 'NEW GAME'; 
}
function cleanIcons(){
    firstColum.classList.remove("blue", "green", "red");
    firstColum.classList.add("color");

    secondColum.classList.remove("blue", "green", "red");
    secondColum.classList.add("color");

    thirdColum.classList.remove("blue", "green", "red");
    thirdColum.classList.add("color");
}
function newGame(){
    cleanIcons();
    anotherGame();
    const iconsRound = slotmachine.resetGame(); 
    firstColum.innerText = iconsRound[0];
    secondColum.innerText = iconsRound[1];
    thirdColum .innerText = iconsRound[2];
}

btnRightElement.addEventListener('click', () => {
    if (btnRightElement.innerText === 'SPIN' && din > 0){
        play(); 
    }
    else{
        din = 0;
        newGame(); 
    }
});

plus10.addEventListener('click', () =>{
    cash(0.1);  
});
plus25.addEventListener('click', () =>{
    cash(0.25);  
});
plus50.addEventListener('click', () =>{
    cash(0.50);  
});
plusDollar.addEventListener('click', () =>{
    cash(1);  
});
takeBack.addEventListener('click', () =>{
    cash('x');  
});

console.log("PLAY",play());