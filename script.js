let hunger = 20;
let energy = 100;
let happiness = 100;
let isAdventuring = false
const maxHunger = 20;
const maxEnergy = 100;
const maxHappiness = 100;

let intervalIdHunger;
let intervalIdEnergy;
let intervalIdHappiness;
let intervalIdAdventure

const faceHappy = document.querySelector('.body__face--happy')
const faceNeutral = document.querySelector('.body__face--neutral')
const faceSad = document.querySelector('.body__face--sad')
const faceDead = document.querySelector('.body__face--dead')
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

document.addEventListener('DOMContentLoaded', function() {
    const feedButton = document.querySelector(".buttons__feed");

    if (feedButton) {
        feedButton.addEventListener('click', feedCharacter);
    } else {
        console.log("Feed button not found!");
    }

    updateHungerDisplay();
    hungerTimer();
});

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
            clearInterval(intervalIdEnergy); 
        }
    }, 1000);
}

function energyCharacter() {
    energy = maxEnergy;
    console.log(`That was refreshing! Energy restored to: ${energy}`);
    updateEnergyDisplay();
    clearInterval(intervalIdEnergy);
    energyTimer();
}

document.addEventListener('DOMContentLoaded', function() {
    const energyButton = document.querySelector(".buttons__sleep");

    if (energyButton) {
        energyButton.addEventListener('click', energyCharacter);
    } else {
        console.log("energy button not found!");
    }

    updateEnergyDisplay();
    energyTimer();
});

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
}}, 100);
}

function happinessCharacter() {
    happiness = maxHappiness;
    console.log(`Yummy! happiness restored to: ${happiness}`);
    updateHappinessDisplay();
    clearInterval(intervalIdHappiness);
    happinessTimer();
}

document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector(".buttons__play");

    if (playButton) {
        playButton.addEventListener('click', happinessCharacter);
    } else {
        console.log("Feed button not found!");
    }

    updateHappinessDisplay();
    happinessTimer();
});



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