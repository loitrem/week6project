//player character class
class character {

    //constructor
    constructor(name, attack, defense, hp, mp, xp){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.mp = mp;
        this.xp = xp;
    }

    //upgrade character
    upgrade() {

    }

    //getter
    getCharacter() {
    
        //create object
        let newCharacter = {
            name: this.name,
            attack: this.attack,
            defense: this.defense,
            hp: this.hp,
            mp: this.mp,
            xp: this.xp
        }

        //return the object
        return newCharacter;
}

    //setter
    setCharacter(updatedCharacter){

        // create new character object
        let tempCharacter = new character();

        //set updated values into tempCharacter
        tempCharacter.name = updatedCharacter.name;
        tempCharacter.attack = updatedCharacter.attack;
        tempCharacter.defense = updatedCharacter.defense;
        tempCharacter.hp = updatedCharacter.hp;
        tempCharacter.mp = updatedCharacter.mp;
        tempCharacter.xp = updatedCharacter.xp;

        //return the updated object
        return tempCharacter;
    }
}

//enemy class
class enemy {

    //constructor
    constructor(type, attack,attackMax, attackMin, defense, defenseMax, defenseMin, hp, hpMax, hpMin, mp, mpMax, mpMin, xp, xpMax, xpMin){
        this.type = type;
        this.attack = attack;
        this.attackMax = attackMax;
        this.attackMin = attackMin;
        this.defense = defense;
        this.defenseMax = defenseMax;
        this.defenseMin = defenseMin;
        this.hp = hp;
        this.hpMax = hpMax;
        this.hpMin = hpMin;
        this.mp = mp;
        this.mpMax = mpMax;
        this.mpMin = mpMin;
        this.xp = xp;
        this.xpMax = xpMax;
        this.xpMin = xpMin;
    }

    //getter
    getEnemy() {
    
        //create new object
        let newEnemy = {
            type: this.type,
            attack: this.attack,
            attackMax: this.attackMax,
            attackMin: this.attackMin,
            defense: this.defense,
            defenseMax: this.defenseMax,
            defenseMin: this.defenseMin,
            hp: this.hp,
            hpMax: this.hpMax,
            hpMin: this.hpMin,
            mp: this.mp,
            mpMax: this.mpMax,
            mpMin: this.mpMin,
            xp: this.xp,
            xpMax: this.xpMax,
            xpMin: this.xpMin
        }

        //return the object
        return newEnemy;
    }
}

//enemy array class
class enemyArray {

    //determind which enemy to add to the array
    addEnemy (num) {

        let monsterName = "";

        if (num>=1&&num<=15){
            monsterName = "blackBat";
        } else if (num>=16&&num<=30){
            monsterName = "blackSpider";
        } else if (num>=31&&num<=42){
            monsterName = "grayBat";
        } else if (num>=43&&num<=54){
            monsterName = "graySpider";
        } else if (num>=55&&num<=66){
            monsterName = "skeleton";
        } else if (num>=67&&num<=76){
            monsterName = "zombie";
        } else if (num>=77&&num<=86){
            monsterName = "whiteSpider";
        } else if (num>=87&&num<=92){
            monsterName = "blueSpider";
        } else if (num>=93&&num<=97){
            monsterName = "greenSpider";
        } else if (num>=98&&num<=100){
            monsterName = "demonBat";
        }

        //return monsterName
        return monsterName;
    }

    //set ranges for monsters
    monsterRange(name){

        //created new enemy
        let tempEnemy = new enemy();

        //set max and min for enemy for random number generation
        if (name==="blackBat"){
            tempEnemy.type = name;
            tempEnemy.attackMax = 4;
            tempEnemy.attackMin = 1;
            tempEnemy.defenseMax = 2;
            tempEnemy.defenseMin = 1;
            tempEnemy.hpMax = 8;
            tempEnemy.hpMin = 5;
            tempEnemy.mpMax = 0;
            tempEnemy.mpMin = 0;
            tempEnemy.xpMax = 11;
            tempEnemy.xpMin = 2;
        } else if (name==="blackSpider"){
            tempEnemy.type = name;
            tempEnemy.attackMax = 4;
            tempEnemy.attackMin = 1;
            tempEnemy.defenseMax = 2;
            tempEnemy.defenseMin = 1;
            tempEnemy.hpMax = 8;
            tempEnemy.hpMin = 5;
            tempEnemy.mpMax = 0;
            tempEnemy.mpMin = 0;
            tempEnemy.xpMax = 11;
            tempEnemy.xpMin = 2;
        } else if (name==="grayBat"){
            tempEnemy.type = name;
            tempEnemy.attackMax = 5;
            tempEnemy.attackMin = 2;
            tempEnemy.defenseMax = 3;
            tempEnemy.defenseMin = 2;
            tempEnemy.hpMax = 8;
            tempEnemy.hpMin = 5;
            tempEnemy.mpMax = 0;
            tempEnemy.mpMin = 0;
            tempEnemy.xpMax = 12;
            tempEnemy.xpMin = 4;
        } else if (name==="graySpider"){
            tempEnemy.type = name;
            tempEnemy.attackMax = 5;
            tempEnemy.attackMin = 2;
            tempEnemy.defenseMax = 3;
            tempEnemy.defenseMin = 2;
            tempEnemy.hpMax = 8;
            tempEnemy.hpMin = 5;
            tempEnemy.mpMax = 0;
            tempEnemy.mpMin = 0;
            tempEnemy.xpMax = 12;
            tempEnemy.xpMin = 5;
        } else if (name==="skeleton"){
            tempEnemy.type = name;
            tempEnemy.attackMax = 5;
            tempEnemy.attackMin = 2;
            tempEnemy.defenseMax = 2;
            tempEnemy.defenseMin = 1;
            tempEnemy.hpMax = 10;
            tempEnemy.hpMin = 7;
            tempEnemy.mpMax = 0;
            tempEnemy.mpMin = 0;
            tempEnemy.xpMax = 14;
            tempEnemy.xpMin = 5;
        } else if (name==="zombie"){
            tempEnemy.type = name;
            tempEnemy.attackMax = 5;
            tempEnemy.attackMin = 2;
            tempEnemy.defenseMax = 2;
            tempEnemy.defenseMin = 1;
            tempEnemy.hpMax = 10;
            tempEnemy.hpMin = 7;
            tempEnemy.mpMax = 0;
            tempEnemy.mpMin = 0;
            tempEnemy.xpMax = 14;
            tempEnemy.xpMin = 6;
        } else if (name==="whiteSpider"){
            tempEnemy.type = name;
            tempEnemy.attackMax = 7;
            tempEnemy.attackMin = 4;
            tempEnemy.defenseMax = 5;
            tempEnemy.defenseMin = 3;
            tempEnemy.hpMax = 10;
            tempEnemy.hpMin = 7;
            tempEnemy.mpMax = 2;
            tempEnemy.mpMin = 1;
            tempEnemy.xpMax = 15;
            tempEnemy.xpMin = 8;
        } else if (name==="blueSpider"){
            tempEnemy.type = name;
            tempEnemy.attackMax = 8;
            tempEnemy.attackMin = 5;
            tempEnemy.defenseMax = 5;
            tempEnemy.defenseMin = 3;
            tempEnemy.hpMax = 12;
            tempEnemy.hpMin = 7;
            tempEnemy.mpMax = 3;
            tempEnemy.mpMin = 1;
            tempEnemy.xpMax = 18;
            tempEnemy.xpMin = 12;
        } else if (name==="greenSpider"){
            tempEnemy.type = name;
            tempEnemy.attackMax = 11;
            tempEnemy.attackMin = 6;
            tempEnemy.defenseMax = 6;
            tempEnemy.defenseMin = 4;
            tempEnemy.hpMax = 8;
            tempEnemy.hpMin = 5;
            tempEnemy.mpMax = 0;
            tempEnemy.mpMin = 0;
            tempEnemy.xpMax = 22;
            tempEnemy.xpMin = 14;
        } else if (name==="demonBat"){
            tempEnemy.type = name;
            tempEnemy.attackMax = 15;
            tempEnemy.attackMin = 10;
            tempEnemy.defenseMax = 7;
            tempEnemy.defenseMin = 5;
            tempEnemy.hpMax = 30;
            tempEnemy.hpMin = 20;
            tempEnemy.mpMax = 4;
            tempEnemy.mpMin = 1;
            tempEnemy.xpMax = 40;
            tempEnemy.xpMin = 25;
        }

        //return range array
        return tempEnemy;

    }

    //iniate array
    newEnemyArray (numOfEnemies) {
    
        //create empty array
        let newEnemyArray = [];
        let newRangeArray = [];

        //create a new enemy
        let newTempEnemy = new enemy();

        //loop for each enemy that will be added
        for (let i = 0; i < numOfEnemies; i++){

            // random for hull
            let enemytypeNum = Math.floor(Math.floor(Math.random()*(101-1)+1));
            //adds to new range array by called add enemy and using that returned name to call monster range and return an array
            newTempEnemy = this.monsterRange(this.addEnemy(enemytypeNum));

            // random for attack
            newTempEnemy.attack = Math.floor(Math.floor(Math.random()*(newTempEnemy.attackMax-newTempEnemy.attackMin)+newTempEnemy.attackMin));

            // random for defense
            newTempEnemy.defense = Math.floor(Math.floor(Math.random()*(newTempEnemy.defenseMax-newTempEnemy.defenseMin)+newTempEnemy.defenseMin));

            // random for hp
            newTempEnemy.hp = Math.floor(Math.floor(Math.random()*(newTempEnemy.hpMax-newTempEnemy.hpMin)+newTempEnemy.hpMin));

            // random for mp
            newTempEnemy.mp = Math.floor(Math.floor(Math.random()*(newTempEnemy.mpMax-newTempEnemy.mpMin)+newTempEnemy.mpMin));

            // random for xp
            newTempEnemy.xp = Math.floor(Math.floor(Math.random()*(newTempEnemy.xpMax-newTempEnemy.xpMin)+newTempEnemy.xpMin));

            //add to array
            newEnemyArray.push(newTempEnemy);
        }
        //return array
        return newEnemyArray;
        
    }
}

//animation class
class animation {

    //animate
    animate () {

    }

    //attack right
    attackRight () {

    }

    //attack left
    attackLeft () {

    }

}

//menu class
class menu {

    //capatalize first letter of word
    ucFirst(x) {

        let firstChar = x.charAt(0);
        let remaining = x.substring(1);
        
        return firstChar.toUpperCase() + remaining;
    
     }

    //show main menu
    // mainMenu(){
    //     let showMainMenu = document.querySelector('.menuLeftSubmenu');
    //     let mainMenuButtons = document.querySelectorAll('.hideMenu');
    //     let menuClassArray = ['gameplay','combat','leveling'];
    //     let a = 0;

    //     for (let i = 1; i<mainMenuButtons.length; i++){

    //         mainMenuButtons[i].setAttribute('class', menuClassArray[a]);
    //         mainMenuButtons[i].innerHTML = this.ucFirst(menuClassArray[a]);

    //         console.log(mainMenuButtons[i]);

    //         a++;
    //     }
    // }

    //submenu hide
    subMenuHide() {

        //set variables
        let mainMenu = document.querySelector('.mainMenuWrapper');
        let mainMenuImg = document.querySelector('.menuIconImg');

        //hide the main game nav menu and menu icon
        mainMenu.classList.toggle('mainMenuHide');  
        mainMenuImg.classList.toggle('menuIconHide');
    

        //hide all elements with .show
        let showPlay = document.querySelector('.show');

            showPlay.classList.remove('show');
    }

    // text to show when how to play is pushed
    howToPlay () {
        let showMainMenu = document.querySelector('.menuLeftSubmenu');
        let menuClassArray = ['gameplay','combat','leveling'];

        showMainMenu.replaceChildren();
        
        if (optionsShow===false&&howToPlayShow===false){ 
            howToPlayShow = true;

            for (let i = 0; i<menuClassArray.length; i++){

                let newBtn = document.createElement('button');

                showMainMenu.appendChild(newBtn);
                newBtn.setAttribute('class', menuClassArray[i]);
                newBtn.innerHTML = this.ucFirst(menuClassArray[i]);                
            }
            showMainMenu.classList.toggle('hideMenu');
            
        }
        else if (optionsShow===true){ 
            howToPlayShow = true;
            optionsShow = false;
            for (let i = 0; i<menuClassArray.length; i++){

                let newBtn = document.createElement('button');

                showMainMenu.appendChild(newBtn);
                newBtn.setAttribute('class', menuClassArray[i]);
                newBtn.innerHTML = this.ucFirst(menuClassArray[i]);                
            }
            
        } else {
            showMainMenu.classList.toggle('hideMenu');
            howToPlayShow = false;
        }
    }

    // show options menu
    options() {

        let showOptions = document.querySelector('.menuLeftSubmenu');
        let menuClassArray = ['music'];
        let menuTextArray = ['Music On/Off']

        showOptions.replaceChildren();

        if (optionsShow===false&&howToPlayShow===false){ 
            optionsShow = true;

                showOptions.classList.toggle('hideMenu');

            for (let i = 0; i<menuClassArray.length; i++){
                let newBtn = document.createElement('button');

                showOptions.appendChild(newBtn);
                newBtn.setAttribute('class', menuClassArray[i]);
                newBtn.innerHTML = this.ucFirst(menuTextArray[i]);
                newBtn.setAttribute('onclick', `newMenu.${menuClassArray[i]}()`);
            }
            
        } else if (howToPlayShow===true){ 
            optionsShow = true;
            howToPlayShow = false;

            for (let i = 0; i<menuClassArray.length; i++){
                let newBtn = document.createElement('button');

                showOptions.appendChild(newBtn);
                newBtn.setAttribute('class', menuClassArray[i]);
                newBtn.innerHTML = this.ucFirst(menuTextArray[i]);

                
            }
            
        } else {
            showOptions.classList.toggle('hideMenu'); 
            optionsShow = false;
        }
    }

    music() {

        let musicBtn = document.querySelector('music');
        console.log(musicBtn);

                if (openingMusic.muted===false){
                    muteOption = true;
                } else {
                    muteOption = false;
                }
        console.log(muteOption);
        openingMusic.muted = muteOption;
    }

    //  // hide options menu
    //  hideOptions() {

    //     //set variables
    //     let menuLeftSubmenu = document.querySelector('.menuLeftSubmenu');
    //     let newBtn = document.createElement('button');
    //     let gamePlay = document.querySelector('.gameplay');
        
    //     menuLeftSubmenu.classList.toggle('hideMenu');
    //     gamePlay.setAttribute('class', 'options showOptions');
    //     gamePlay.classList.toggle('showOptions');

    //     gamePlay.innerHTML = "Music On/Off";

    // }

    // text to show when combat is pushed
    combat() {

    }

    // text to show when leveling up is pushed
    leveling () {

    }

    // text to show when how to win is pushed
    howToWin () {

    }

}

//game logic class
class gameLogic {

    //sets number of enemies per battle
    enemiesPerBattle(){

        let enemiesThisBattle = 0;

        if (battle===1){
            enemiesThisBattle = 2;
        } else  if (battle===2){
            enemiesThisBattle = 3;
        } else  if (battle>=3){
            enemiesThisBattle = 4;
        }

        //returns number of enemies
        return enemiesThisBattle;

    }

    //is alive
    isAlive(character) {

    }

    //does attack hit
    doesItHit (attacker, defender) {

    }

    //character attack
    attack (attacker, defender) {

    }

    //start game
    startGame (){

        //checks if game is started and makes sure game is not over
        if (gameOver==false && gameStart === false){

            //set variables
            let mainMenu = document.querySelector('.mainMenuWrapper');
            let mainMenuImg = document.querySelector('.menuIconImg');
            let bottomContentHide = document.querySelector('.bottomContent');
            let leftMenuClick = document.querySelector('.leftMenuClickX');
    
            //hide the main game nav menu and menu icon
            mainMenu.classList.toggle('mainMenuHide');  
            mainMenuImg.classList.toggle('menuIconHide');
            bottomContentHide.classList.toggle('infoBarHide');
    
             //hide all elements with .show
            let showPlay = document.querySelectorAll('.show');
            for (let i = 0; i<showPlay.length; i++){
                showPlay[i].classList.remove('show');
            }

            //change the first world to the yellow icon from the red x 
            //and set it to hand pointer on mouseover
            leftMenuClick.setAttribute('src', './images/path/yellow.png');
            leftMenuClick.setAttribute('class', 'leftMenuClick path');
            leftMenuClick.style.cursor = "pointer";

            //set gameStart to true
            gameStart = true;
        }
    }

    //reset game
    resetGame () {

        if (gameStart) {

            //set game over and game start to false
            gameOver = false;
            gameStart = false;

            //set variables
            let mainMenuImg = document.querySelector('.menuIconImg');
            let bottomContentHide = document.querySelector('.bottomContent');
            let leftMenuClick = document.querySelector('.leftMenuClick');

            //sets the background to world select
            document.querySelector('.topContentWrapper').style.backgroundImage = `url('./images/backgrounds/world.png')`;
    
            //hides info bar and menu icon
            mainMenuImg.classList.add('menuIconHide');
            bottomContentHide.classList.add('infoBarHide');

            //hides all elements with .show
            let showPlay = document.querySelectorAll('.show');
                for (let i = 0; i<showPlay.length; i++){
                    showPlay[i].classList.remove('show');
                }

                //sets first world icon to red x and mouse to default
                leftMenuClick.setAttribute('src', './images/path/x.png');
                leftMenuClick.setAttribute('class', 'leftMenuClickX');
                leftMenuClick.style.cursor = "default";
        }
    }

    //next round
    nextRound () {

    }

    //display world
    displayWorld (name) {

        //set variables
        let background = document.querySelector('.topContentWrapper');
        let path = document.querySelectorAll('.path');
        let party = document.querySelector('.hideParty');
        let enemies = document.querySelector('.hideEnemy');
        let enemyWrapper = document.querySelector('.enemyWrapper');

        let array = newEnemyArray.newEnemyArray(this.enemiesPerBattle());

        //hides all elements of world path
        for (let i = 0; i<path.length; i++){
            path[i].classList.remove('path');
            path[i].classList.add('pathHide');
        }

        party.classList.toggle('showParty');
        enemies.classList.toggle('showEnemy');

        //sets background to this worlds background
        background.style.backgroundImage = `url('./images/backgrounds/${name}.jpg')`;  

        //adds enemies dynamically
        console.log("array length " + array.length);
        console.log(array);

        for (let i = 0; i<array.length; i++){
            let enemyMemberDiv = document.createElement('div');
            let enemyAttackImg = document.createElement('img');
            let enemyMemberImg = document.createElement('img');
            enemyWrapper.appendChild(enemyMemberDiv);
            enemyMemberDiv.setAttribute('class', 'enemyMember');
            console.log("round " + i);
            enemyMemberDiv.appendChild(enemyAttackImg);
            enemyAttackImg.setAttribute('class', 'hideAttack');

            enemyMemberDiv.appendChild(enemyMemberImg);
            enemyMemberImg.setAttribute('class', array[i].type);
            enemyMemberImg.setAttribute('src', `./images/enemies/${array[i].type}.png`);
            }
    }

    //fight - per character
    oneCharacterAttack () {

    }

    //are there enemies left after each attack
    enemiesLeft() {

    }

    //retreat
    retreat() {

    }

    //checks if game over
    gameOverCheck(characterArray, enemyArray) {

    }

}

const kazuma = new character("kazuma", 10, 5, 20, 1, 0);
const darkness = new character("darkness", 2, 9, 75, 0, 0);
const megumin = new character("megumin", 100, 2, 10, 1, 0);
const aqua = new character("aqua", 15, 4, 20, 10, 0);
let menuRight = document.querySelector('.menuRight');
let gameplayBtn = document.querySelector('.gameplay');
let combat = document.querySelector('.combat');
let leveling = document.querySelector('.leveling');
let howToWin = document.querySelector('.howToWin');
let newMenu = new menu();
let game = new gameLogic();
let newEnemyArray = new enemyArray();

let musicParent = document.querySelector('.mainMenu');
let openingMusic = document.createElement('audio');
musicParent.appendChild(openingMusic);
openingMusic.setAttribute('type', 'audio/mpeg');
openingMusic.setAttribute('src', './audio/KONOSUBAopening.mp3');
openingMusic.autoplay = true;
openingMusic.loop = true;
openingMusic.volume = .1;
openingMusic.load();
openingMusic.muted = false;

document.querySelector('.topContentWrapper').style.backgroundImage = `url('./images/backgrounds/world.png')`;  

let battle = 1;
let gameOver = false;
let gameStart = false;
let winner = "";
let stage = "";
let score = 0;
let howToPlayShow = false;
let optionsShow = false;
let muteOption = false;


