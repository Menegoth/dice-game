// Gloval variables
let totalRolls = [0, 0, 0, 0, 0, 0];
let total = 0;

document.addEventListener("DOMContentLoaded", function() {

    //declare dom variables
    const diceImage = document.getElementById("dice-image");
    const tableAmount = document.querySelectorAll(".table-amount");
    const tablePercent = document.querySelectorAll(".table-percent");
    const message = document.getElementById("message");

    //Roll button functionality + updating values
    document.getElementById("roll").addEventListener("click", () => {
        
        //get random number between 1 and 6, update image and update array
        let rolledNumber = Math.ceil(Math.random() * 6); 
        switch (rolledNumber) {
            case 1:
                diceImage.src = "assets/images/dice1.png"
                totalRolls[rolledNumber - 1]++;
                message.textContent = "You rolled one";
                break;
            case 2:
                diceImage.src = "assets/images/dice2.png"
                totalRolls[rolledNumber - 1]++;
                message.textContent = "You rolled two";
                break;
            case 3: 
                diceImage.src = "assets/images/dice3.png"
                totalRolls[rolledNumber - 1]++;
                message.textContent = "You rolled three";
                break;
            case 4:
                diceImage.src = "assets/images/dice4.png"
                totalRolls[rolledNumber - 1]++;
                message.textContent = "You rolled four";
                break;
            case 5:
                diceImage.src = "assets/images/dice5.png"
                totalRolls[rolledNumber - 1]++;
                message.textContent = "You rolled five";
                break;
            case 6:
                diceImage.src = "assets/images/dice6.png"
                totalRolls[rolledNumber - 1]++;
                message.textContent = "You rolled six";
                break;
            default:
                break;
        }
        total++;

        //update scoreboard
        for (let i = 0; i < tableAmount.length; i++) {
            tableAmount[i].textContent = totalRolls[i];
        }

        for (let i = 0; i < tablePercent.length; i++) {
            tablePercent[i].textContent = `${Math.round((totalRolls[i] / total) * 100)}%`
        }

    })

    //Clear Button functionality
    document.getElementById("clear").addEventListener("click", () => {

        //clear message and image
        diceImage.src = "assets/images/dice1.png";
        message.textContent = "Let's get rolling";

        //clear scoreboards
        for (let i = 0; i < tableAmount.length; i++) {
            tableAmount[i].textContent = 0;
        }

        for (let i = 0; i < tablePercent.length; i++) {
            tablePercent[i].textContent = "0%";
        }

    })

})


