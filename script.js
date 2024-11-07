let hunger = 20;
let energy = 100;
let happiness = 100;
let isAdventuring = false
let isAsleep = false
const maxHunger = 20;
const maxEnergy = 100;
const maxHappiness = 100;

let intervalIdHunger;
let intervalIdEnergy;
let intervalIdHappiness;
let intervalIdAdventure
let intervalIdSleep

const faceHappy = document.querySelector('.body__face--happy')
const faceNeutral = document.querySelector('.body__face--neutral')
const faceSad = document.querySelector('.body__face--sad')
const faceDead = document.querySelector('.body__face--dead')
const faceSleep = document.querySelector('.body__face--sleep')
const faceGlasses = document.querySelector('.body__glasses')
const adventureBtn = document.querySelector('.buttons__adventure')
const character = document.querySelector('.body__parts')

function updateHungerDisplay() {
    const hungerDisplay = document.getElementById('display__hunger');
    hungerDisplay.textContent = `Hunger: ${hunger}/${maxHunger}`;
}

function hungerTimer() {
    intervalIdHunger = setInterval(() => {
        hunger--;
        updateHungerDisplay();

        if (hunger === 10) {
            console.log('Turtle is getting hungry!');
        }
        
        if (hunger <= 0) {
            console.log('Turtle has passed away');
            clearInterval(intervalIdHunger);
            clearInterval(intervalIdHappiness)
            clearInterval(intervalIdEnergy)
            faceHappy.style.display = 'none'
            faceNeutral.style.display = 'none'
            faceSad.style.display = 'none'
            faceGlasses.style.display = 'none'  
            faceDead.style.display = 'block'
            character.style.transform = "rotate(90deg)";
            document.querySelector('.buttons__feed').disabled = true;
            document.querySelector('.buttons__sleep').disabled = true;
            document.querySelector('.buttons__play').disabled = true;
            document.querySelector('.buttons__adventure').disabled = true;
            showGameOver("died of hunger")
        }
    }, 1000);
}

function feedCharacter() {
    hunger = maxHunger;
    console.log(`Yummy! Hunger restored to: ${hunger}`);
    updateHungerDisplay();
    clearInterval(intervalIdHunger);
    hungerTimer();
}


    const feedButton = document.querySelector(".buttons__feed");

    if (feedButton) {
        feedButton.addEventListener('click', feedCharacter);
    } else {
        console.log("Feed button not found!");
    }

    updateHungerDisplay();
    hungerTimer();


function updateEnergyDisplay() {
    const energyDisplay = document.getElementById('display__energy');
    energyDisplay.textContent = `Energy: ${energy}/${maxEnergy}`;
}

function energyTimer() {
    intervalIdEnergy = setInterval(() => {
        energy--;
        updateEnergyDisplay();

        if (energy === 50) {
            console.log('Turtle is getting tired!');
            console.log('Energy is at 50')
        }
        
        if (energy <= 0) {
            console.log('Turtle has passed out');
            clearInterval(intervalIdHunger);
            clearInterval(intervalIdHappiness);
            clearInterval(intervalIdEnergy);
            character.style.transform = "rotate(90deg)";
            faceHappy.style.display = 'none'
            faceGlasses.style.display = 'none'
            faceSleep.style.display = 'block'
            document.querySelector('.buttons__feed').disabled = true;
            document.querySelector('.buttons__sleep').disabled = true;
            document.querySelector('.buttons__play').disabled = true;
            document.querySelector('.buttons__adventure').disabled = true;
            showGameOver("died of fatigue")
        }
    }, 1000);
}

function energyCharacter() {
    if (isAsleep) return

    isAsleep = true
    energy = maxEnergy
    console.log(`That was refreshing! Energy restored to: ${energy}`)
    updateEnergyDisplay()

    clearInterval(intervalIdHunger);
    clearInterval(intervalIdHappiness);
    clearInterval(intervalIdEnergy);
    clearInterval(intervalIdAdventure)

    character.style.transform = 'rotate(90deg)'
    faceHappy.style.display = 'none'
    faceNeutral.style.display = 'none'
    faceSad.style.display = 'none'
    faceGlasses.style.display = 'none'  
    faceDead.style.display = 'none'
    faceSleep.style.display = 'block'
            document.querySelector('.buttons__feed').disabled = true;
            document.querySelector('.buttons__sleep').disabled = true;
            document.querySelector('.buttons__play').disabled = true;
            document.querySelector('.buttons__adventure').disabled = true;
        
    setTimeout(() => {
        character.style.transform = 'rotate(0deg)'
        faceSleep.style.display = 'none'
        faceHappy.style.display = 'block'
        faceGlasses.style.display = 'block'

        isAsleep = false; // Återställ kontrollvariabeln
        hungerTimer()
        happinessTimer()
        energyTimer()
        document.querySelector('.buttons__feed').disabled = false;
        document.querySelector('.buttons__sleep').disabled = false;
        document.querySelector('.buttons__play').disabled = false;
        document.querySelector('.buttons__adventure').disabled = false;
    }, 5000); // 5 sekunders sömnperiod
}

    const energyButton = document.querySelector(".buttons__sleep");

    if (energyButton) {
        energyButton.addEventListener('click', energyCharacter);
    } else {
        console.log("energy button not found!");
    }

    updateEnergyDisplay();
    energyTimer();
;

function updateHappinessDisplay() {
    const happinessDisplay = document.getElementById('display__happiness');
    happinessDisplay.textContent = `Happiness: ${happiness}/${maxHappiness}`;
}

function happinessTimer() {
    intervalIdHappiness = setInterval(() => {
        happiness--;
        updateHappinessDisplay();

        if (happiness < 50 && happiness >= 20) {
            faceHappy.style.display = 'none'
            faceNeutral.style.display = 'block'
            faceSad.style.display = 'none'  
            console.log('Toto is getting angry')
        }

        else if (happiness < 20) {
            faceHappy.style.display = 'none'
            faceNeutral.style.display = 'none'
            faceSad.style.display = 'block'  
        }
        else {
            faceHappy.style.display = 'block'
            faceNeutral.style.display = 'none'
            faceSad.style.display = 'none'  
        }
        
        if (happiness <= 0) {
            character.style.display = 'none' 
            console.log('Toto ran away!!!!');
            clearInterval(intervalIdHappiness);
            clearInterval(intervalIdHunger);
            clearInterval(intervalIdEnergy);
            document.querySelector('.buttons__feed').disabled = true;
            document.querySelector('.buttons__sleep').disabled = true;
            document.querySelector('.buttons__play').disabled = true;
            document.querySelector('.buttons__adventure').disabled = true;
            showGameOver("ran away")
}}, 10);
}

function happinessCharacter() {
    happiness = maxHappiness;
    console.log(`Yaaaay! happiness restored to: ${happiness}`);
    updateHappinessDisplay();
    clearInterval(intervalIdHappiness);
    happinessTimer();
}


    const playButton = document.querySelector(".buttons__play");

    if (playButton) {
        playButton.addEventListener('click', happinessCharacter);
    } else {
        console.log("Feed button not found!");
    }

    updateHappinessDisplay();
    happinessTimer();
;



function adventurerer() {
    if (isAdventuring) {
      clearInterval(intervalIdAdventure);
      character.classList.remove("body__parts--adventure", "body__parts--return");
  
      hungerTimer();
      happinessTimer();
      energyTimer();
  
      isAdventuring = false;
    } else {
      isAdventuring = true;
  
      clearInterval(intervalIdHunger);
      clearInterval(intervalIdHappiness);
      clearInterval(intervalIdEnergy);
  
      intervalIdAdventure = setInterval(() => {
        if (character.classList.contains("body__parts--adventure")) {
          character.classList.remove("body__parts--adventure");
          character.classList.add("body__parts--return");
        } else {
          character.classList.remove("body__parts--return");
          character.classList.add("body__parts--adventure");
        }
      }, 500);
      setTimeout(() => {
        clearInterval(intervalIdAdventure);
        character.classList.remove(
          "body__parts--adventure",
          "body__parts--return"
        );
        isAdventuring = false;
        hungerTimer();
        happinessTimer();
        energyTimer();
      }, 10000);
    }
  }
  
  adventureBtn.addEventListener("click", adventurerer);

 function showGameOver(reason) {
    document.querySelector('.overlay').style.display = 'block';
    const gameoverDiv = document.querySelector('.gameover');
    gameoverDiv.style.display = 'block';

    gameoverDiv.textContent = `Toto ${reason} 💀 Start over? `;

    if (!gameoverDiv.querySelector('.gameover__restart')) {
        const restartButton = document.createElement('button');
        restartButton.classList.add('gameover__restart');
        restartButton.textContent = 'Restart';
        
        gameoverDiv.appendChild(restartButton);
    }
}

document.querySelector('.gameover').addEventListener('click', function(event) {
    if (event.target.classList.contains('gameover__restart')) {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.gameover').style.display = 'none';
    }
});
