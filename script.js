let hunger = 10;
let energy = 100;
let fun = 100;
const maxHunger = 10;
const maxEnergy = 100;
const maxFun = 100;

let intervalIdHunger;

let intervalIdEnergy;

let intervalIdFun;

function updateHungerDisplay() {
    const hungerDisplay = document.getElementById('display__hunger');
    hungerDisplay.textContent = `Hunger: ${hunger}/${maxHunger}`;
}

function hungerTimer() {
    intervalIdHunger = setInterval(() => {
        hunger--;
        updateHungerDisplay();

        if (hunger === 5) {
            console.log('Turtle is getting hungry!');
            console.log('Hunger is at 5')
        }
        
        if (hunger <= 0) {
            console.log('Turtle has passed away');
            clearInterval(intervalIdHunger); 
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
    }, 100);
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