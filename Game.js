const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorBox").style.backgroundColor = targetColor;
    document.getElementById("gameStatus").textContent = "";

    const colorOptionsContainer = document.getElementById("colorOptions");
    colorOptionsContainer.innerHTML = "";

    colors.forEach(color => {
        const button = document.createElement("button");
        button.classList.add("color-option");
        button.style.backgroundColor = color;
        button.setAttribute("data-testid", "colorOption");
        button.addEventListener("click", () => checkGuess(color));
        colorOptionsContainer.appendChild(button);
    });
}

function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        document.getElementById("gameStatus").textContent = "Correct!";
        document.getElementById("gameStatus").style.color = "green";
        score++;
        document.getElementById("score").textContent = score;
    } else {
        document.getElementById("gameStatus").textContent = "Wrong! Try again.";
        document.getElementById("gameStatus").style.color = "red";
    }
}

document.getElementById("newGameButton").addEventListener("click", startGame);

startGame();