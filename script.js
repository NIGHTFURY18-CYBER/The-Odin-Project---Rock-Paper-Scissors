// Step 2: Get the computer's random choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

// Step 3: Get the human player's choice from a prompt
function getHumanChoice() {
  const human = prompt("Enter your choice (Rock, Paper, Scissors):");
  return human;
}

// Step 6: playGame runs 5 rounds, keeping score and playRound inside it
function playGame() {
  // Step 4: Score variables, scoped inside playGame
  let humanScore = 0;
  let computerScore = 0;

  // Step 5: Play a single round
  function playRound(humanChoice, computerChoice) {
    // Make the human choice case-insensitive
    const human = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

    if (human === computerChoice) {
      console.log("It's a tie!");
      return;
    }

    const humanWins =
      (human === "Rock" && computerChoice === "Scissors") ||
      (human === "Scissors" && computerChoice === "Paper") ||
      (human === "Paper" && computerChoice === "Rock");

    if (humanWins) {
      humanScore++;
      console.log(`You win! ${human} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${human}`);
    }
  }

  for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${round}`);
    playRound(humanSelection, computerSelection);
  }

  console.log(`Final Score - You: ${humanScore}  Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("The computer won the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();