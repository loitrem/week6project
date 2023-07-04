
let a = 20;
let b = 65;
let c = 5;
let d = 10;
let tempArray = [65,5,10];
let tempTotal = 0;
let temp = 0;
let temp2 = 0;
let newNum = 35;

let test = (100*a)/100;
let test2 = (100*b)/100;

// hit % solution for characters
if (tempArray.length===4){
    console.log("they equal themselves");
} else if (tempArray.length<4){

    for (let i = 0; i<tempArray.length; i++){
        tempTotal += tempArray[i];
        
        console.log("TEMP TOTAL = " + tempTotal);
    }
    
    let remainder = 100-tempTotal;
    let addToEach = Math.floor(remainder/tempArray.length);

    for (let i = 0; i<tempArray.length; i++){
        tempArray[i] += addToEach;
    }

    console.log("TEMP ARRAY = " + tempArray);

    for (let i = 0; i<tempArray.length; i++){
        temp += tempArray[i]
        console.log("TEMP = " + temp);
    }

    let extra = 100 - temp;

    tempArray[tempArray.length-1] += extra
    console.log("TEMP ARRAY = " + tempArray);

    let newArray = [];
    let next = 0;
    let aa;
    let tempArray2 = tempArray;
  

    for (let i = 0; i<tempArray2.length; i++){
  
        if (tempArray2.length>1){
            aa = Math.min(...tempArray2);
        } else {
            aa = tempArray2[0];
        }
        newArray.push(aa);
        if (tempArray2.length>1){
            tempArray2.splice(tempArray2.indexOf(aa), 1);
        }
        
    }  
    newArray.push(tempArray2[0]);
    // newArray = Math.min(...tempArray);
    console.log("NEW ARRAY = " + newArray);

    for (let i = 0; i<tempArray.length; i++){
        temp2 += tempArray[i]
        // console.log("TEMP2 = " + temp2);
    }
}


// console.log(Math.min(...tempArray));











///////////////////////////////////////////////////////////////////////////////////


let battleBarInfo = document.querySelector('.battleInfoBar');
let selectAction = document.querySelector('.selectAction');
let whichCharacter = 0;

let characterLeftAliveArray = [];
let characterLeftAliveArraySorted = [];

selectAction.replaceChildren();

if (attackCount===1){
    enemyNum = 0;
    attackCount = 0;
}

let calcCount = 0;
let tempArrayEnemy = [];

console.log('CHARACTER ALIVE ARRAY');
console.log(characterOrder);

//adds enemies to the new temp array if they are alive
for (let i = 0; i<arrayEnemy.length;i++){
    if (arrayEnemy[i].alive===true){
        tempArrayEnemy.push(arrayEnemy[i]);
    }
}

    //loop through current arrayEnemy
    let loop = setInterval(function(){
    let attackWho = Math.floor(Math.floor(Math.random()*(101-1)+1));

    // if monster is alive set as current attacker
    if (tempArrayEnemy[enemyNum].alive===true) {
        currentAttacker = tempArrayEnemy[enemyNum];
    }

    for (let i = 0; i< characterOrder; i++){
        if (characterOrder[i].alive===true){
            characterLeftAliveArray.push(characterOrder[i]);
            console.log(characterOrder[i]);
        }
    }
    
    let tempArrayLength = characterLeftAliveArray.length;

    for (let i = 0; i<tempArrayLength;i++){

        if (characterLeftAliveArray[i].alive===false){
            characterLeftAliveArray.splice(characterLeftAliveArray[i],1)
        }
    }

    let leftAlive =  game.characterGetHitChance(characterLeftAliveArray);

    // if all characters are alive use this to determine who gets hit
    if (characterLeftAliveArray.length===4){

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

        console.log("CURRENT DEFENDER");
        console.log(currentDefender);

    //if less than 4 characters
    } else if (characterOrder.length<4){

        characterLeftAliveArraySorted = game.characterLeftGetHitSorted(characterLeftAliveArray);

        for (let i = 0;i<leftAlive.length;i++){

            if (i===0&&attackWho>(characterLeftAliveArraySorted[i]-characterLeftAliveArraySorted[i])&&attackWho<=characterLeftAliveArraySorted[i]){

                currentDefender = leftAlive[i];
                if (currentDefender.name==="kazuma"){
                    whichCharacter = 0;
                } else if (currentDefender.name==="darkness"){
                    whichCharacter = 1;
                } else 
                if (currentDefender.name==="megumin"){
                    whichCharacter = 2;
                } else 
                if (currentDefender.name==="aqua"){
                    whichCharacter = 3;
                } 
                console.log("WHICH CHARACTER");
                console.log(whichCharacter);
                console.log("CURRENT DEFENDER");
                console.log(currentDefender);
                

            } else if (attackWho>characterLeftAliveArraySorted[i-1]&&attackWho<=characterLeftAliveArraySorted[i]){

                currentDefender = leftAlive[i];

                if (currentDefender.name==="kazuma"){
                    whichCharacter = 0;
                } else if (currentDefender.name==="darkness"){
                    whichCharacter = 1;
                } else 
                if (currentDefender.name==="megumin"){
                    whichCharacter = 2;
                } else 
                if (currentDefender.name==="aqua"){
                    whichCharacter = 3;
                }
                console.log("CURRENT DEFENDER");
                console.log(currentDefender);
            }  
        }
    }

    //calculate damage done
    
    currentDefender.hp -= currentAttacker.attack;

    console.log(`**************  ${currentDefender.name}  hew HP is = ${currentDefender.hp}   *********************`);
    console.log(`**************  ${tempArrayEnemy.length}  arrenemy length vs enemy num = ${enemyNum}   *********************`);

    if (enemyNum===(tempArrayEnemy.length-1)){
        clearInterval(loop);

        //if all dead or not
        if (game.enemyAllDead(leftAlive)===true){
            // game.gameOver();

        } else if (game.enemyAllDead(leftAlive)===false){
            let list = game.characterAttackOrder(leftAlive);
            game.characterOptions(list[0].name);  
        }
    }


    // if first element in array is dead remove it from array
    if (currentDefender.hp<=0){
    
        currentDefender.hp = 0;
        enemyNum++;

        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        console.log(currentDefender.name + " HAS DIED");
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

        console.log("ALIVE? " + leftAlive[whichCharacter].alive);
        leftAlive[whichCharacter].alive = false;

        let targetImg = document.querySelector(`.${currentDefender.name}`);
        targetImg.style.transform = 'rotate(270deg)';
        targetImg.style.cursor = "default";
        targetImg.setAttribute('onclick', '');

    } else if (currentDefender.hp>0&&tempArrayEnemy.length>=1&&deadResult===true){
        enemyNum++;

        //displays which enemy is attacking which character on battle bar
        let updateScoreCharacter = document.getElementById(`${currentDefender.name}`);

        console.log( battleBarInfo.innerHTML = `It's ${newMenu.ucFirst(currentAttacker.name)} turn! They ATTACK ${newMenu.ucFirst(currentDefender.name)} for ${currentAttacker.attack}`);
        battleBarInfo.innerHTML = `It's ${newMenu.ucFirst(currentAttacker.name)} turn! They ATTACK ${newMenu.ucFirst(currentDefender.name)} for ${currentAttacker.attack}`;
        
        updateScoreCharacter.innerHTML = `${newMenu.ucFirst(currentDefender.name)} | HP: ${currentDefender.hp}`;
    }
    calcCount++;
}, 1500);  
attackCount++;   



