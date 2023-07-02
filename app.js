//player character class
class character {

    //constructor
    constructor(name, attack, defense, hp, mp, xp,alive){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.mp = mp;
        this.xp = xp;
        this.alive = alive;
    }

    //upgrade character
    upgrade() {

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
    constructor(name, attack,attackMax, attackMin, defense, defenseMax, defenseMin, hp, hpMax, hpMin, mp, mpMax, mpMin, xp, xpMax, xpMin, alive){
        this.name = name;
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
        this.alive = alive;
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
            tempEnemy.name = name;
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
            tempEnemy.alive = true;
        } else if (name==="blackSpider"){
            tempEnemy.name = name;
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
            tempEnemy.alive = true;
        } else if (name==="grayBat"){
            tempEnemy.name = name;
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
            tempEnemy.alive = true;
        } else if (name==="graySpider"){
            tempEnemy.name = name;
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
            tempEnemy.alive = true;
        } else if (name==="skeleton"){
            tempEnemy.name = name;
            tempEnemy.attackMax = 5;
            tempEnemy.attackMin = 2;
            tempEnemy.defenseMax = 2;
            tempEnemy.defenseMin = 1;
            tempEnemy.hpMax = 11;
            tempEnemy.hpMin = 7;
            tempEnemy.mpMax = 0;
            tempEnemy.mpMin = 0;
            tempEnemy.xpMax = 14;
            tempEnemy.xpMin = 5;
            tempEnemy.alive = true;
        } else if (name==="zombie"){
            tempEnemy.name = name;
            tempEnemy.attackMax = 5;
            tempEnemy.attackMin = 2;
            tempEnemy.defenseMax = 2;
            tempEnemy.defenseMin = 1;
            tempEnemy.hpMax = 11;
            tempEnemy.hpMin = 7;
            tempEnemy.mpMax = 0;
            tempEnemy.mpMin = 0;
            tempEnemy.xpMax = 14;
            tempEnemy.xpMin = 6;
            tempEnemy.alive = true;
        } else if (name==="whiteSpider"){
            tempEnemy.name = name;
            tempEnemy.attackMax = 7;
            tempEnemy.attackMin = 4;
            tempEnemy.defenseMax = 5;
            tempEnemy.defenseMin = 3;
            tempEnemy.hpMax = 16;
            tempEnemy.hpMin = 10;
            tempEnemy.mpMax = 2;
            tempEnemy.mpMin = 1;
            tempEnemy.xpMax = 15;
            tempEnemy.xpMin = 8;
            tempEnemy.alive = true;
        } else if (name==="blueSpider"){
            tempEnemy.name = name;
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
            tempEnemy.alive = true;
        } else if (name==="greenSpider"){
            tempEnemy.name = name;
            tempEnemy.attackMax = 11;
            tempEnemy.attackMin = 6;
            tempEnemy.defenseMax = 6;
            tempEnemy.defenseMin = 4;
            tempEnemy.hpMax = 15;
            tempEnemy.hpMin = 10;
            tempEnemy.mpMax = 0;
            tempEnemy.mpMin = 0;
            tempEnemy.xpMax = 22;
            tempEnemy.xpMin = 14;
            tempEnemy.alive = true;
        } else if (name==="demonBat"){
            tempEnemy.name = name;
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
            tempEnemy.alive = true;
        }

        //return range array
        return tempEnemy;

    }

    //iniate array
    newEnemyArray (numOfEnemies) {
    
        //create empty array
        let newEnemyArray = [];

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

    // show main menu
    mainMenu(){
        let showMainMenu = document.querySelector('.menuLeftSubmenu');
        let mainMenuButtons = document.querySelectorAll('.hideMenu');
        let menuClassArray = ['gameplay','combat','leveling'];
        let a = 0;

        for (let i = 1; i<mainMenuButtons.length; i++){

            mainMenuButtons[i].setAttribute('class', menuClassArray[a]);
            mainMenuButtons[i].innerHTML = this.ucFirst(menuClassArray[a]);

            a++;
        }
    }

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

    // main menu hide
    mainMenuHide() {

        //set variables
        let mainMenu = document.querySelector('.mainMenuWrapper');
        let mainMenuImg = document.querySelector('.menuIconImg');

        //hide the main game nav menu and menu icon
        mainMenu.classList.toggle('mainMenuHide');  
        mainMenuImg.classList.toggle('menuIconHide');
    

        //hide all elements with .show
        let showPlay = document.querySelectorAll('.show');
        for (let i = 0; i<showPlay.length; i++){
            showPlay[i].classList.remove('show');
        }
    }

    // text to show when how to play is pushed
    howToPlay () {
        let showMainMenu = document.querySelector('.menuLeftSubmenu');
        let menuClassArray = ['gameplay','combat','leveling'];

        newMenu.defaultMenuText();

        showMainMenu.replaceChildren();
        
        if (optionsShow===false&&howToPlayShow===false){ 
            howToPlayShow = true;

            for (let i = 0; i<menuClassArray.length; i++){

                let newBtn = document.createElement('button');

                showMainMenu.appendChild(newBtn);
                newBtn.setAttribute('class', menuClassArray[i]);
                newBtn.setAttribute('onclick', `newMenu.${menuClassArray[i]}()`);
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

    gameplay(){

        newMenu.defaultMenuText();

        let menuRightText = document.querySelector('.menuRightText');

        menuRightText.innerHTML = "<p>After clicking play there will be 3 worlds you can enter.</p><p>" + 
                                    "World 2 and 3 will be locked until you beat the previous world.</p><p>" + 
                                    "Once you beat all the worlds you beat the game</p>";
    }

    // show options menu
    options() {

        let showOptions = document.querySelector('.menuLeftSubmenu');
        let menuClassArray = ['music'];
        let menuTextArray = ['Music On/Off']

        newMenu.defaultMenuText();

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

                if (openingMusic.muted===false){
                    muteOption = true;
                } else {
                    muteOption = false;
                }

        openingMusic.muted = muteOption;
    }

     // hide options menu
    defaultMenuText() {

        //set variables
        let menuRightText = document.querySelector('.menuRightText');

        menuRightText.innerHTML = "Welcome to Konosuba Quest Adventure. Press play to start a new game.";

    }

    // text to show when combat is pushed
    combat() {
        newMenu.defaultMenuText();

        let menuRightText = document.querySelector('.menuRightText');

        menuRightText.innerHTML = "<p>Combat is turn based.</p><p>" + 
                                    "Select your action for each of your team</p><p>" + 
                                    "The enemy will attack after your last team memeber performs their action</p>";
    }

    // text to show when leveling up is pushed
    leveling () {
        newMenu.defaultMenuText();

        let menuRightText = document.querySelector('.menuRightText');

        menuRightText.innerHTML = "<p>Coming soon</p>";
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

            //set game over and game start to false
            gameOver = false;
            gameStart = false;
            arrayEnemy = [];

            let selectAction = document.querySelector('.selectAction');

            selectAction.replaceChildren();

            //set variables
            let bottomContentHide = document.querySelector('.bottomContent');
            let leftMenuClick = document.querySelector('.leftMenuClick');
            let leftMenuClickX = document.querySelector('.leftMenuClickX');
            let leftMenuDotted = document.querySelector('.leftMenuDotted');
            let centerMenuClickX = document.querySelector('.centerMenuClickX');
            let centerMenuClick = document.querySelector('.centerMenuClick');
            let centerMenuDotted = document.querySelector('.centerMenuDotted');
            let rightMenuClickX = document.querySelector('.rightMenuClickX');
            let rightMenuClick = document.querySelector('.rightMenuClick');
            let rightMenuDotted = document.querySelector('.rightMenuDotted');
            let partyWrapper = document.querySelector('.partyWrapper');
            let enemyWrapper = document.querySelector('.enemyWrapper');
            let enemyHp = document.querySelector('.showEnemyHealth');
            let characterHp = document.querySelector('.showCharacterHealth');
            let battleBarInfo = document.querySelector('.battleInfoBar');
            let mainMenuImg = document.querySelector('.menuIconImg');
            let mainMenu = document.querySelector('.mainMenuWrapper');
            let gameOverWrapper = document.querySelector('.gameOverWrapper');

            gameOverWrapper.setAttribute('class', 'gameOverWrapper gameOverHide');

            enemyHp.innerHTML = "";
            characterHp.innerHTML = "";
            battleBarInfo.innerHTML = "BATTLE INFORMATION";
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

            if (world===1){
                //sets first world icon to red x and mouse to default
                leftMenuClick.setAttribute('src', './images/path/x.png');
                leftMenuClick.setAttribute('class', 'leftMenuClickX path');
                leftMenuDotted.setAttribute('class', 'leftMenuDotted path');
                leftMenuClick.style.cursor = "default";

                centerMenuClickX.setAttribute('src', './images/path/x.png');
                centerMenuClickX.setAttribute('class', 'centerMenuClickX path');
                centerMenuDotted.setAttribute('class', 'centerMenuDotted path');
                centerMenuClickX.style.cursor = "default";

                rightMenuClickX.setAttribute('src', './images/path/x.png');
                rightMenuClickX.setAttribute('class', 'rightMenuClickX path');
                rightMenuDotted.setAttribute('class', 'rightMenuDotted path');
                rightMenuClickX.style.cursor = "default";

            } else if (world===2){
                //sets first world icon to red x and mouse to default
                leftMenuClick.setAttribute('src', './images/path/x.png');
                leftMenuClick.setAttribute('class', 'leftMenuClickX path');
                leftMenuDotted.setAttribute('class', 'leftMenuDotted path');
                leftMenuClick.style.cursor = "default";

                centerMenuClick.setAttribute('src', './images/path/x.png');
                centerMenuClick.setAttribute('class', 'centerMenuClickX path');
                centerMenuClick.setAttribute('onclick', "game.displayWorld('sand')");
                centerMenuDotted.setAttribute('class', 'centerMenuDotted path');
                centerMenuClick.style.cursor = "default";

                rightMenuClickX.setAttribute('src', './images/path/x.png');
                rightMenuClickX.setAttribute('class', 'rightMenuClickX path');
                rightMenuDotted.setAttribute('class', 'rightMenuDotted path');
                rightMenuClickX.style.cursor = "default";

            } else if (world===3){
                //sets first world icon to red x and mouse to default
                leftMenuClick.setAttribute('src', './images/path/x.png');
                leftMenuClick.setAttribute('class', 'leftMenuClickX path');
                leftMenuDotted.setAttribute('class', 'leftMenuDotted path');
                leftMenuClick.style.cursor = "default";

                centerMenuClick.setAttribute('src', './images/path/x.png');
                centerMenuClick.setAttribute('class', 'centerMenuClickX path');
                centerMenuDotted.setAttribute('class', 'centerMenuDotted path');
                centerMenuClick.style.cursor = "default";

                rightMenuClick.setAttribute('src', './images/path/x.png');
                rightMenuClick.setAttribute('class', 'rightMenuClickX path');
                rightMenuClick.setAttribute('onclick', "game.displayWorld('ice')");
                rightMenuDotted.setAttribute('class', 'rightMenuDotted path');
                rightMenuClick.style.cursor = "default";
            } else if (world>=4){
                //sets first world icon to red x and mouse to default
                leftMenuClick.setAttribute('src', './images/path/x.png');
                leftMenuClick.setAttribute('class', 'leftMenuClickX path');
                leftMenuDotted.setAttribute('class', 'leftMenuDotted path');
                leftMenuClick.style.cursor = "pointer";

                centerMenuClick.setAttribute('src', './images/path/x.png');
                centerMenuClick.setAttribute('class', 'centerMenuClickX path');
                centerMenuDotted.setAttribute('class', 'centerMenuDotted path');
                centerMenuClick.style.cursor = "pointer";

                rightMenuClick.setAttribute('src', './images/path/x.png');
                rightMenuClick.setAttribute('class', 'rightMenuClickX path');
                rightMenuClick.setAttribute('onclick', "game.displayWorld('ice')");
                rightMenuDotted.setAttribute('class', 'rightMenuDotted path');
                rightMenuClick.style.cursor = "pointer";
            }

            //hides party/enemy wrapper
            partyWrapper.setAttribute('class', 'partyWrapper hideParty');
            enemyWrapper.setAttribute('class', 'enemyWrapper hideEnemy'); 

            mainMenu.setAttribute('class', 'mainMenuWrapper');

            world = 1;
            round = 1;
            battle = 1;
            counter = 0;
            enemyNum = 0;
            
    }

    //unlock next world
    nextWorld(){
        
        console.log("============================================================================");
        console.log("world = ", world);
        console.log("============================================================================");

        if (gameStart) {

            //set game over and game start to false
            gameOver = false;
            gameStart = false;
            arrayEnemy = [];
            

            //set variables
            let bottomContentHide = document.querySelector('.bottomContent');
            let leftMenuClick = document.querySelector('.leftMenuClick');
            let leftMenuClickX = document.querySelector('.leftMenuClickX');
            let leftMenuDotted = document.querySelector('.leftMenuDotted');
            let centerMenuClickX = document.querySelector('.centerMenuClickX');
            let centerMenuClick = document.querySelector('.centerMenuClick');
            let centerMenuDotted = document.querySelector('.centerMenuDotted');
            let rightMenuClickX = document.querySelector('.rightMenuClickX');
            let rightMenuClick = document.querySelector('.rightMenuClick');
            let rightMenuDotted = document.querySelector('.rightMenuDotted');
            let partyWrapper = document.querySelector('.partyWrapper');
            let enemyWrapper = document.querySelector('.enemyWrapper');
            let enemyHp = document.querySelector('.showEnemyHealth');
            let characterHp = document.querySelector('.showCharacterHealth');
            let battleBarInfo = document.querySelector('.battleInfoBar');
            let mainMenuImg = document.querySelector('.menuIconImg');
            let mainMenu = document.querySelector('.mainMenuWrapper');
            let gameOverWrapper = document.querySelector('.gameOverWrapper');

            enemyHp.innerHTML = "";
            characterHp.innerHTML = "";
            battleBarInfo.innerHTML = "BATTLE INFORMATION";
            //sets the background to world select
            document.querySelector('.topContentWrapper').style.backgroundImage = `url('./images/backgrounds/world.png')`;
    
            //hides info bar and menu icon
            mainMenu.classList.add('mainMenuHide');
            mainMenuImg.classList.remove('menuIconHide');
            bottomContentHide.classList.add('infoBarHide');

            //hides all elements with .show
            let showPlay = document.querySelectorAll('.show');
                for (let i = 0; i<showPlay.length; i++){
                    showPlay[i].classList.remove('show');
                }

            if (world===1){
                
                leftMenuClickX.setAttribute('src', './images/path/yellow.png');
                leftMenuClickX.setAttribute('class', 'leftMenuClick path');
                leftMenuDotted.setAttribute('class', 'leftMenuDotted path');
                leftMenuClick.style.cursor = "pointer";

            } else if (world===2){
            
                leftMenuClick.setAttribute('src', './images/path/yellow.png');
                leftMenuClick.setAttribute('class', 'leftMenuClick path');
                leftMenuDotted.setAttribute('class', 'leftMenuDotted path');
                leftMenuClick.style.cursor = "pointer";

                centerMenuClickX.setAttribute('src', './images/path/yellow.png');
                centerMenuClickX.setAttribute('class', 'centerMenuClick path');
                centerMenuClickX.setAttribute('onclick', "game.displayWorld('sand')");
                centerMenuDotted.setAttribute('class', 'centerMenuDotted path');
                centerMenuClickX.style.cursor = "pointer";

                rightMenuClickX.setAttribute('src', './images/path/x.png');
                rightMenuClickX.setAttribute('class', 'rightMenuClickX path');
                rightMenuDotted.setAttribute('class', 'rightMenuDotted path');
                rightMenuClickX.style.cursor = "default";

            } else if (world===3){
               
                leftMenuClick.setAttribute('src', './images/path/yellow.png');
                leftMenuClick.setAttribute('class', 'leftMenuClick path');
                leftMenuDotted.setAttribute('class', 'leftMenuDotted path');
                leftMenuClick.style.cursor = "pointer";

                centerMenuClick.setAttribute('src', './images/path/yellow.png');
                centerMenuClick.setAttribute('class', 'centerMenuClick path');
                centerMenuDotted.setAttribute('class', 'centerMenuDotted path');
                centerMenuClick.style.cursor = "pointer";

                rightMenuClickX.setAttribute('src', './images/path/yellow.png');
                rightMenuClickX.setAttribute('class', 'rightMenuClick path');
                rightMenuClickX.setAttribute('onclick', "game.displayWorld('ice')");
                rightMenuDotted.setAttribute('class', 'rightMenuDotted path');
                rightMenuClickX.style.cursor = "pointer";
            } else if (world>=4){

                gameOverWrapper.setAttribute('class', 'gameOverWrapper');
           
                // leftMenuClick.setAttribute('src', './images/path/yellow.png');
                // leftMenuClick.setAttribute('class', 'leftMenuClick path');
                // leftMenuDotted.setAttribute('class', 'leftMenuDotted path');
                // leftMenuClick.style.cursor = "pointer";

                // centerMenuClick.setAttribute('src', './images/path/yellow.png');
                // centerMenuClick.setAttribute('class', 'centerMenuClick path');
                // centerMenuDotted.setAttribute('class', 'centerMenuDotted path');
                // centerMenuClick.style.cursor = "pointer";

                // rightMenuClick.setAttribute('src', './images/path/yellow.png');
                // rightMenuClick.setAttribute('class', 'rightMenuClick path');
                // rightMenuClick.setAttribute('onclick', "game.displayWorld('ice')");
                // rightMenuDotted.setAttribute('class', 'rightMenuDotted path');
                // rightMenuClick.style.cursor = "pointer";
            }

            //hides party/enemy wrapper
            partyWrapper.setAttribute('class', 'partyWrapper hideParty');
            enemyWrapper.setAttribute('class', 'enemyWrapper hideEnemy');
        }
    }
    
    //next round
    nextRound () {
    
        round++;

        if (round===1){
            gameStart = true;
            battle =1;
            round = 0;
            world++;
            game.nextWorld();
        }
        console.log("============================================================================");
        console.log("round = " + round);
        console.log("============================================================================");
        battle++;
        
        //set variables
        let enemyWrapper = document.querySelector('.enemyWrapper');
        let enemyHp = document.querySelector('.showEnemyHealth');
        let characterHp = document.querySelector('.showCharacterHealth');
        let battleBarInfo = document.querySelector('.battleInfoBar');

        battleBarInfo.innerHTML = "New Round";

        //determines number of enemies per battle
        arrayEnemy = newEnemyArray.newEnemyArray(this.enemiesPerBattle());

        kazuma.hp = 1;
        darkness.hp = 1;
        megumin.hp = 1;
        aqua.hp = 1;

        //add all characters to array
        characterOrder = [kazuma, darkness, megumin, aqua];

        //adds enemies dynamically
        enemyWrapper.replaceChildren();
        enemyHp.replaceChildren();

        for (let i = 0; i<arrayEnemy.length; i++){
            let enemyMemberDiv = document.createElement('div');
            let enemyAttackImg = document.createElement('img');
            let enemyMemberImg = document.createElement('img');
            let enemyMemberP = document.createElement('p');
    
            enemyWrapper.appendChild(enemyMemberDiv);
            enemyMemberDiv.setAttribute('class', 'enemyMember');

            enemyMemberDiv.appendChild(enemyAttackImg);
            enemyAttackImg.setAttribute('class', 'hideAttack');
        
            enemyMemberDiv.appendChild(enemyMemberImg);
            enemyMemberImg.setAttribute('class', arrayEnemy[i].name);
            enemyMemberImg.setAttribute('src', `./images/enemies/${arrayEnemy[i].name}.png`);
            enemyMemberImg.setAttribute('id', `${arrayEnemy[i].name+i}Img`);
            enemyMemberImg.setAttribute('onclick', `game.targetSelect('${arrayEnemy[i].name+i}')`);
            document.getElementById(`${arrayEnemy[i].name+i}Img`).style.cursor = 'pointer';

            //clear stat boxes
            characterHp.replaceChildren();

            //adds enemy stats to bottom right
            enemyHp.appendChild(enemyMemberP);
            enemyMemberP.setAttribute('id', `${arrayEnemy[i].name}${i}`);
            enemyMemberP.innerHTML = `${newMenu.ucFirst(arrayEnemy[i].name)} | HP: ${arrayEnemy[i].hp}`;
        }

        //adds character stats to bottom middle
        for (let i = 0; i<4; i++){
            let characterMemberP = document.createElement('p');
            characterHp.appendChild(characterMemberP);
            characterMemberP.setAttribute('id', `${characterOrder[i].name}`);
            characterMemberP.innerHTML = `${newMenu.ucFirst(characterOrder[i].name)} | HP: ${characterOrder[i].hp}`;
        }

    }

    //display world
    displayWorld (name) {

        //set variables
        let background = document.querySelector('.topContentWrapper');
        let path = document.querySelectorAll('.path');
        let partyWrapper = document.querySelector('.partyWrapper');
        let enemyWrapper = document.querySelector('.enemyWrapper');
        let enemyHp = document.querySelector('.showEnemyHealth');
        let characterHp = document.querySelector('.showCharacterHealth');
        let battleBarInfo = document.querySelector('.battleInfoBar');
        let bottomContentHide = document.querySelector('.bottomContent');

        bottomContentHide.classList.remove('infoBarHide');
        //saves which enemy was clicked on
        if (this.targetSelect()===undefined){
            battleBarInfo.innerHTML = "Please click on enemy to attack"
        } else {
            battleBarInfo.innerHTML = "BATTLE INFORMATION";
        }
        
        //determines number of enemies per battle
        arrayEnemy = newEnemyArray.newEnemyArray(this.enemiesPerBattle());
        
        kazuma.hp = 1;
        darkness.hp = 1;
        megumin.hp = 1;
        aqua.hp = 1;

        //add all characters to array
        characterOrder = [kazuma, darkness, megumin, aqua];

        //hides all elements of world path
        for (let i = 0; i<path.length; i++){
            path[i].classList.remove('path');
            path[i].classList.add('pathHide');
        }

        partyWrapper.setAttribute('class', 'partyWrapper showParty');
        enemyWrapper.setAttribute('class', 'enemyWrapper showEnemy');

        //sets background to this worlds background
        background.style.backgroundImage = `url('./images/backgrounds/${name}.png')`;  

        //adds enemies dynamically
        enemyWrapper.replaceChildren();
        enemyHp.replaceChildren();

        for (let i = 0; i<arrayEnemy.length; i++){
            let enemyMemberDiv = document.createElement('div');
            let enemyAttackImg = document.createElement('img');
            let enemyMemberImg = document.createElement('img');
            let enemyMemberP = document.createElement('p');
    
            enemyWrapper.appendChild(enemyMemberDiv);
            enemyMemberDiv.setAttribute('class', 'enemyMember');

            enemyMemberDiv.appendChild(enemyAttackImg);
            enemyAttackImg.setAttribute('class', 'hideAttack');

            enemyMemberDiv.appendChild(enemyMemberImg);
            enemyMemberImg.setAttribute('class', arrayEnemy[i].name);
            enemyMemberImg.setAttribute('src', `./images/enemies/${arrayEnemy[i].name}.png`);
            enemyMemberImg.setAttribute('id', `${arrayEnemy[i].name+i}Img`);
            enemyMemberImg.setAttribute('onclick', `game.targetSelect('${arrayEnemy[i].name+i}')`);
            document.getElementById(`${arrayEnemy[i].name+i}Img`).style.cursor = 'pointer';

            //adds enemy stats to bottom right
            enemyHp.appendChild(enemyMemberP);
            enemyMemberP.setAttribute('id', `${arrayEnemy[i].name}${i}`);
            enemyMemberP.innerHTML = `${newMenu.ucFirst(arrayEnemy[i].name)} | HP: ${arrayEnemy[i].hp}`;
        }

        characterHp.replaceChildren();

        //adds character stats to bottom middle
        for (let i = 0; i<characterOrder.length; i++){
            let characterMemberP = document.createElement('p');
            characterHp.appendChild(characterMemberP);
            characterMemberP.setAttribute('id', `${characterOrder[i].name}`);
            characterMemberP.innerHTML = `${newMenu.ucFirst(characterOrder[i].name)} | HP: ${characterOrder[i].hp}`;
        }
        game.nextTurn();
    }

    //saves the enemy that was clicked on to currentDefender
    targetSelect (id) {

        let battleBarInfo = document.querySelector('.battleInfoBar');
        if (id){
            clickedEnemy = id; 
            console.log("1111111111111111111111111111111111111111111111111111111");
            console.log("Clicked Enemy ID = "  +  clickedEnemy);
            console.log("11111111111111111111111111111111111111111111111111111111");

        }

        if (id!=undefined){
            let tempNum = parseInt(clickedEnemy.charAt(clickedEnemy.length -1 )); 
            battleBarInfo.innerHTML = `Attacking ${newMenu.ucFirst(arrayEnemy[tempNum].name)}`;
        }
    }

    nextTurn(){
     game.characterOptions(characterOrder[counter].name); 
    }

    //does attack hit
    doesItHit (attacker, defender) {

    }

    //character attack
    characterAttack (num) {
        let tempBool = false;
        let allDeadThisRound = false;
        //sets current defender
        currentDefender = arrayEnemy[parseInt(clickedEnemy.charAt(clickedEnemy.length -1 ))];

        //checks if num is 99 which is the skip button
        if (num!=99){
            currentDefender.hp -= characterOrder[num].attack;  
        }
        //if num is 99 set it to 2 (this is just to skip a turn for a character)
        if (num===99){
            num = 2;
            tempBool = true;
        }

        if (tempBool===true){
            //if enemy hp is 0 or less rotate them and remove their onclick
            if (currentDefender.hp<=0){
                currentDefender.hp = 0;
            
                arrayEnemy[parseInt(clickedEnemy.charAt(clickedEnemy.length -1))].alive = false;

                let targetImg = document.getElementById(`${clickedEnemy}Img`);
                targetImg.style.transform = 'rotate(180deg)';
                targetImg.style.cursor = "default";
                targetImg.setAttribute('onclick', '');

                //updates display showing enemies hp
                if (currentDefender){
                    let updateScore = document.getElementById(clickedEnemy);
                    updateScore.innerHTML = `${newMenu.ucFirst(currentDefender.name)} | HP: ${currentDefender.hp}`;
                }

                //empty clicked enemy
                clickedEnemy = '';

                // if all enemies are dead go to next round
                if (game.enemyAllDead(arrayEnemy)===true){
                    allDeadThisRound===true
                    game.nextRound();
                }

            } else {
                if (currentDefender.hp>=1){
                    let updateScore = document.getElementById(clickedEnemy);
                    updateScore.innerHTML = `${newMenu.ucFirst(currentDefender.name)} | HP: ${currentDefender.hp}`;
                }
            }
        }

        //if num is more than 4 start enemy turn
        if (num>=3&&allDeadThisRound===false){            
            game.enemyAttack(); 
        }

        //add 1 to num
        num +=1;

        //if restart attack order is set to true call game characters first member
        if (restartAttackOrder===true){
            game.characterOptions("kazuma"); 
            restartAttackOrder=false;
        } else {
            if (num<=3){
                game.characterOptions(characterOrder[num].name);
            }
        }

        allDeadThisRound = false;
        
    }

    //checks if all enemies are dead or not
    enemyAllDead(array){

        let deadArray = [];

        //created new array of alive or dead
        for (let i = 0; i<array.length; i++) {
        
            if (array[i].alive){
                deadArray.push("alive");
            } else if (array[i].alive===false){
                deadArray.push("dead");
            }
        }

        console.log("======================================================");
        console.log(deadArray);
        console.log("CHECKING IF EVERYONE IS DEAD");
        console.log("======================================================");

        let anyAlive = true;
        //goes through created array to veryify if everyone is dead or not
        for (let i = 0; i< deadArray.length; i++){
            if(deadArray[i]==="alive"){
                anyAlive = false;
            }
        }
        return anyAlive;
    }

    //enemy attack
    enemyAttack () {

        let battleBarInfo = document.querySelector('.battleInfoBar');

        let selectAction = document.querySelector('.selectAction');
        selectAction.replaceChildren();

        tempArrayLength = arrayEnemy.length;
        let whichCharacter;

        if (attackCount===1){
            enemyNum = 0;
            attackCount = 0;
        }

            //loop through current arrayEnemy
            let loop = setInterval(function(){

            let attackWho = Math.floor(Math.floor(Math.random()*(101-1)+1));

            //which character will get hit
            if (attackWho>0&&attackWho<=20){
                currentDefender = characterOrder[0];
                whichCharacter = 0;
            } else if (attackWho>20&&attackWho<=70){
                currentDefender = characterOrder[1];
                whichCharacter = 1;
            } else if (attackWho>70&&attackWho<=85){
                currentDefender = characterOrder[2];
                whichCharacter = 2;
            } else if (attackWho>85&&attackWho<=100){
                currentDefender = characterOrder[3];
                whichCharacter = 3;
            }

            currentAttacker = arrayEnemy[enemyNum];

            //calculate damage done
            currentDefender.hp -= currentAttacker.attack;
            console.log(`**************  ${currentDefender.name}  did some math = ${currentDefender.hp}   *********************`);
            console.log(`**************  ${arrayEnemy.length}  its that long? does it match = ${enemyNum}   *********************`);

            if (enemyNum===(arrayEnemy.length-1)){
                clearInterval(loop);

                //if all dead or not
                if (game.enemyAllDead(characterOrder)===true){
                    // game.gameOver();
                    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
                    console.log("YOU TOTALLY LOST HA HA");
                    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
                } else if (deadResult===true){
                    game.characterOptions("kazuma"); 
                }
            }


            // if first element in array is deal remove it from array
            if (currentDefender.hp<=0){
            
                currentDefender.hp = 0;
                enemyNum++;

                console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
                console.log(currentDefender.name + " HAS DIED");
                console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

                characterOrder[whichCharacter].alive = false;

                let targetImg = document.querySelector(`.${currentDefender.name}`);
                targetImg.style.transform = 'rotate(270deg)';
                targetImg.style.cursor = "default";
                targetImg.setAttribute('onclick', '');

            } else if (currentDefender.hp>0&&arrayEnemy.length>=1&&deadResult===true){
                enemyNum++;

                //displays which enemy is attacking which character on battle bar
                let updateScoreCharacter = document.getElementById(`${currentDefender.name}`);

                console.log( battleBarInfo.innerHTML = `It's ${newMenu.ucFirst(currentAttacker.name)} turn! They ATTACK ${newMenu.ucFirst(currentDefender.name)} for ${currentAttacker.attack}`);
                battleBarInfo.innerHTML = `It's ${newMenu.ucFirst(currentAttacker.name)} turn! They ATTACK ${newMenu.ucFirst(currentDefender.name)} for ${currentAttacker.attack}`;
                
                updateScoreCharacter.innerHTML = `${newMenu.ucFirst(currentDefender.name)} | HP: ${currentDefender.hp}`;
            }
        }, 1500);  
        attackCount++;   
    }

    //retreat
    retreat() {

            //set variables
            let bottomContentHide = document.querySelector('.bottomContent');
            let leftMenuClick = document.querySelector('.leftMenuClick');
            let leftMenuClickX = document.querySelector('.leftMenuClickX');
            let leftMenuDotted = document.querySelector('.leftMenuDotted');
            let centerMenuClickX = document.querySelector('.centerMenuClickX');
            let centerMenuClick = document.querySelector('.centerMenuClick');
            let centerMenuDotted = document.querySelector('.centerMenuDotted');
            let rightMenuClickX = document.querySelector('.rightMenuClickX');
            let rightMenuClick = document.querySelector('.rightMenuClick');
            let rightMenuDotted = document.querySelector('.rightMenuDotted');
            let partyWrapper = document.querySelector('.partyWrapper');
            let enemyWrapper = document.querySelector('.enemyWrapper');
            let enemyHp = document.querySelector('.showEnemyHealth');
            let characterHp = document.querySelector('.showCharacterHealth');
            let battleBarInfo = document.querySelector('.battleInfoBar');
            let mainMenuImg = document.querySelector('.menuIconImg');
            let mainMenu = document.querySelector('.mainMenuWrapper');

            enemyHp.innerHTML = "";
            characterHp.innerHTML = "";
            battleBarInfo.innerHTML = "BATTLE INFORMATION";
            //sets the background to world select
            document.querySelector('.topContentWrapper').style.backgroundImage = `url('./images/backgrounds/world.png')`;
    
            //hides info bar and menu icon
            mainMenu.classList.add('mainMenuHide');
            mainMenuImg.classList.remove('menuIconHide');
            bottomContentHide.classList.add('infoBarHide');

            //hides all elements with .show
            let showPlay = document.querySelectorAll('.show');
                for (let i = 0; i<showPlay.length; i++){
                    showPlay[i].classList.remove('show');
                }

            if (world===1){
                //sets first world icon to red x and mouse to default
                leftMenuClick.setAttribute('src', './images/path/yellow.png');
                leftMenuClick.setAttribute('class', 'leftMenuClick path');
                leftMenuDotted.setAttribute('class', 'leftMenuDotted path');
                leftMenuClick.style.cursor = "pointer";

                centerMenuClickX.setAttribute('src', './images/path/x.png');
                centerMenuClickX.setAttribute('class', 'centerMenuClickX path');
                centerMenuDotted.setAttribute('class', 'centerMenuDotted path');
                centerMenuClickX.style.cursor = "pointer";

                rightMenuClickX.setAttribute('src', './images/path/x.png');
                rightMenuClickX.setAttribute('class', 'rightMenuClickX path');
                rightMenuDotted.setAttribute('class', 'rightMenuDotted path');
                rightMenuClickX.style.cursor = "default";


            } else if (world===2){
                //sets first world icon to red x and mouse to default
                leftMenuClick.setAttribute('src', './images/path/yellow.png');
                leftMenuClick.setAttribute('class', 'leftMenuClick path');
                leftMenuDotted.setAttribute('class', 'leftMenuDotted path');
                leftMenuClick.style.cursor = "pointer";

                centerMenuClick.setAttribute('src', './images/path/yellow.png');
                centerMenuClick.setAttribute('class', 'centerMenuClick path');
                centerMenuClick.setAttribute('onclick', "game.displayWorld('sand')");
                centerMenuDotted.setAttribute('class', 'centerMenuDotted path');
                centerMenuClick.style.cursor = "pointer";

                rightMenuClickX.setAttribute('src', './images/path/x.png');
                rightMenuClickX.setAttribute('class', 'rightMenuClickX path');
                rightMenuDotted.setAttribute('class', 'rightMenuDotted path');
                rightMenuClickX.style.cursor = "default";

            } else if (world===3){
                //sets first world icon to red x and mouse to default
                leftMenuClick.setAttribute('src', './images/path/yellow.png');
                leftMenuClick.setAttribute('class', 'leftMenuClick path');
                leftMenuDotted.setAttribute('class', 'leftMenuDotted path');
                leftMenuClick.style.cursor = "pointer";

                centerMenuClick.setAttribute('src', './images/path/yellow.png');
                centerMenuClick.setAttribute('class', 'centerMenuClick path');
                centerMenuDotted.setAttribute('class', 'centerMenuDotted path');
                centerMenuClick.style.cursor = "pointer";

                rightMenuClick.setAttribute('src', './images/path/yellow.png');
                rightMenuClick.setAttribute('class', 'rightMenuClick path');
                rightMenuClick.setAttribute('onclick', "game.displayWorld('ice')");
                rightMenuDotted.setAttribute('class', 'rightMenuDotted path');
                rightMenuClick.style.cursor = "pointer";
            } else if (world>=4){
                //sets first world icon to red x and mouse to default
                leftMenuClick.setAttribute('src', './images/path/yellow.png');
                leftMenuClick.setAttribute('class', 'leftMenuClick path');
                leftMenuDotted.setAttribute('class', 'leftMenuDotted path');
                leftMenuClick.style.cursor = "pointer";

                centerMenuClick.setAttribute('src', './images/path/yellow.png');
                centerMenuClick.setAttribute('class', 'centerMenuClick path');
                centerMenuDotted.setAttribute('class', 'centerMenuDotted path');
                centerMenuClick.style.cursor = "pointer";

                rightMenuClick.setAttribute('src', './images/path/yellow.png');
                rightMenuClick.setAttribute('class', 'rightMenuClick path');
                rightMenuClick.setAttribute('onclick', "game.displayWorld('ice')");
                rightMenuDotted.setAttribute('class', 'rightMenuDotted path');
                rightMenuClick.style.cursor = "pointer";
            }

            //hides party/enemy wrapper
            partyWrapper.setAttribute('class', 'partyWrapper hideParty');
            enemyWrapper.setAttribute('class', 'enemyWrapper hideEnemy');       
    }

    //checks if game over
    gameOverCheck(characterArray, enemyArray) {

    }

    //sets character options 
    characterOptions(name){
        
        let selectAction = document.querySelector('.selectAction');
        selectAction.replaceChildren();

        //add attack options per character
        if (name==="kazuma"){
            
            let selectActionButton = document.createElement('button');
            let retreat = document.createElement('button');
            let selectName = document.createElement('p');
            let btnOneWrapper = document.createElement('div');
            let btnTwoWrapper = document.createElement('div');

            selectAction.appendChild(selectName);
            selectName.innerHTML = "Kazuma";

            selectAction.appendChild(btnOneWrapper);
            btnOneWrapper.appendChild(selectActionButton);
            btnOneWrapper.setAttribute('class', 'btnWrapper');
            selectActionButton.setAttribute('class', 'attackBtn');
            selectActionButton.setAttribute('onclick', 'game.characterAttack(0)');
            selectActionButton.innerHTML="Attack";

            selectAction.appendChild(btnTwoWrapper);
            btnTwoWrapper.appendChild(retreat);
            btnTwoWrapper.setAttribute('class', 'btnWrapper');
            retreat.setAttribute('class', 'attackBtn');
            retreat.setAttribute('onclick', 'game.retreat()');
            retreat.innerHTML = "RUN";

        } else if (name==="darkness"){
            
            let selectActionButton = document.createElement('button');
            let retreat = document.createElement('button');
            let selectName = document.createElement('p');
            let btnOneWrapper = document.createElement('div');
            let btnTwoWrapper = document.createElement('div');

            selectAction.appendChild(selectName);
            selectName.innerHTML = "Darkness";

            selectAction.appendChild(btnOneWrapper);
            btnOneWrapper.appendChild(selectActionButton);
            btnOneWrapper.setAttribute('class', 'btnWrapper');
            selectActionButton.setAttribute('class', 'attackBtn');
            selectActionButton.setAttribute('onclick', 'game.characterAttack(1)');
            selectActionButton.innerHTML="Attack";

            selectAction.appendChild(btnTwoWrapper);
            btnTwoWrapper.appendChild(retreat);
            btnTwoWrapper.setAttribute('class', 'btnWrapper');
            retreat.setAttribute('class', 'attackBtn');
            retreat.setAttribute('onclick', 'game.retreat()');
            retreat.innerHTML = "RUN";

        } else if (name==="megumin"){

            let selectActionButton = document.createElement('button');
            let btn2 = document.createElement('button');
            let retreat = document.createElement('button');
            let selectActionDesc = document.createElement('div');
            let selectName = document.createElement('p');
            let btnOneWrapper = document.createElement('div');
            let btnTwoWrapper = document.createElement('div');
            let btnThreeWrapper = document.createElement('div');

            selectAction.appendChild(selectName);
            selectName.innerHTML = "Megumin";

            selectAction.appendChild(btnOneWrapper);
            btnOneWrapper.appendChild(selectActionButton);
            btnOneWrapper.setAttribute('class', 'btnWrapper');
            selectActionButton.setAttribute('class', 'attackBtn');
            selectActionButton.setAttribute('onclick', 'game.characterAttack(2)');
            selectActionButton.innerHTML="EXPLOSION!";

            selectActionDesc.setAttribute('class', 'descText');
            selectActionDesc.innerHTML="Will kill all enemies on screen. Can only be used once per world.";

            selectAction.appendChild(btnTwoWrapper);
            btnTwoWrapper.appendChild(btn2);
            btnTwoWrapper.setAttribute('class', 'btnWrapper');
            btn2.setAttribute('class', 'attackBtn');
            btn2.setAttribute('onclick', 'game.characterAttack(99)');
            btn2.innerHTML="Skip Turn";

            selectAction.appendChild(btnThreeWrapper);
            btnThreeWrapper.appendChild(retreat);
            btnThreeWrapper.setAttribute('class', 'btnWrapper');
            retreat.setAttribute('class', 'attackBtn');
            retreat.setAttribute('onclick', 'game.retreat()');
            retreat.innerHTML = "RUN";

        } else if (name==="aqua"){
            
            let selectActionButton = document.createElement('button');
            let selectActionHeal = document.createElement('button');
            let retreat = document.createElement('button');
            let selectName = document.createElement('p');
            let btnOneWrapper = document.createElement('div');
            let btnTwoWrapper = document.createElement('div');
            let btnThreeWrapper = document.createElement('div');

            selectAction.appendChild(selectName);
            selectName.innerHTML = "Aqua";

            selectAction.appendChild(btnOneWrapper);
            btnOneWrapper.appendChild(selectActionButton);
            btnOneWrapper.setAttribute('class', 'btnWrapper');
            selectActionButton.setAttribute('class', 'attackBtn');
            selectActionButton.setAttribute('onclick', 'game.characterAttack(3)');
            selectActionButton.innerHTML="Attack";

            selectAction.appendChild(btnTwoWrapper);
            btnTwoWrapper.appendChild(selectActionHeal);

            btnTwoWrapper.setAttribute('class', 'btnWrapper');
            selectActionHeal.setAttribute('class', 'attackBtn');
            selectActionHeal.setAttribute('onclick', 'game.oneCharacterHeal(100)');
            selectActionHeal.innerHTML="Heal";

            selectAction.appendChild(btnThreeWrapper);
            btnThreeWrapper.appendChild(retreat);
            btnThreeWrapper.setAttribute('class', 'btnWrapper');
            retreat.setAttribute('class', 'attackBtn');
            retreat.setAttribute('onclick', 'game.retreat()');
            retreat.innerHTML = "RUN";
        }
    }
}

let kazuma = new character("kazuma", 5, 5, 1, 1, 0, true);
let darkness = new character("darkness", 1, 9, 1, 0, 0, true);
let megumin = new character("megumin", 100, 2, 1, 1, 0, true);
let aqua = new character("aqua", 3, 4, 1, 10, 0, true);
let menuRight = document.querySelector('.menuRight');
let gameplayBtn = document.querySelector('.gameplay');
let combat = document.querySelector('.combat');
let leveling = document.querySelector('.leveling');
let howToWin = document.querySelector('.howToWin');
let newMenu = new menu();
let game = new gameLogic();
let newEnemyArray = new enemyArray();

// let musicParent = document.querySelector('.mainMenu');
// let openingMusic = document.createElement('audio');
// musicParent.appendChild(openingMusic);
// openingMusic.setAttribute('type', 'audio/mpeg');
// openingMusic.setAttribute('src', './audio/KONOSUBAopening.mp3');
// openingMusic.preload = "auto";
// openingMusic.autoplay = true;
// openingMusic.loop = true;
// openingMusic.volume = .1;
// openingMusic.load();
// openingMusic.muted = false;

document.querySelector('.topContentWrapper').style.backgroundImage = `url('./images/backgrounds/world.png')`;  

let battle = 1;
let round = 0;
let gameOver = false;
let gameStart = false;
let winner = "";
let stage = "";
let score = 0;
let howToPlayShow = false;
let optionsShow = false;
let muteOption = false;
let arrayEnemy = [];
let characterOrder = [];
let currentDefender;
let currentAttacker = 0;
let counter = 0;
let clickedEnemy;
let enemyNum = 0;
let tempArrayLength = 0;
let attackCount = 0;
let world = 1;
let restartAttackOrder = false;
let deadResult = false;


const scoreLeft = () => {

    let score = document.querySelector('showParty');
    let num = num + 10

}

