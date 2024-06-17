import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import { checkGuess, isGuessCorrect } from "../../game-helpers";
import SuccessBanner from "../SuccessBanner";
import FailureBanner from "../FailureBanner";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

const defaultLetters = [
  { letter: "A", status: "unused" },
  { letter: "B", status: "unused" },
  { letter: "C", status: "unused" },
  { letter: "D", status: "unused" },
  { letter: "E", status: "unused" },
  { letter: "F", status: "unused" },
  { letter: "G", status: "unused" },
  { letter: "H", status: "unused" },
  { letter: "I", status: "unused" },
  { letter: "J", status: "unused" },
  { letter: "K", status: "unused" },
  { letter: "L", status: "unused" },
  { letter: "M", status: "unused" },
  { letter: "N", status: "unused" },
  { letter: "O", status: "unused" },
  { letter: "P", status: "unused" },
  { letter: "Q", status: "unused" },
  { letter: "R", status: "unused" },
  { letter: "S", status: "unused" },
  { letter: "T", status: "unused" },
  { letter: "U", status: "unused" },
  { letter: "V", status: "unused" },
  { letter: "W", status: "unused" },
  { letter: "X", status: "unused" },
  { letter: "Y", status: "unused" },
  { letter: "Z", status: "unused" },
];

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [letters, setLetters] = React.useState(defaultLetters);

  const addGuess = (guess) => {
    const checkedGuess = checkGuess(guess, answer);
    const nextLetters = [];

    for (let i = 0; i < letters.length; i++) {
      nextLetters.push({
        letter: letters[i].letter,
        status:
          checkedGuess.find((cell) => cell.letter === letters[i].letter)
            ?.status ?? letters[i].status,
      });
    }
    setGuesses([...guesses, checkedGuess]);
    setLetters(nextLetters);
  };

  const isGameWon =
    guesses.length > 0 && isGuessCorrect(guesses[guesses.length - 1]);
  const isGameLost = !isGameWon && guesses.length === NUM_OF_GUESSES_ALLOWED;
  const isGameOver = isGameWon || isGameLost;

  return (
    <>
      <PreviousGuesses guesses={guesses} />
      <GuessInput addGuess={addGuess} enabled={!isGameOver} />
      <Keyboard checkedLetters={letters} />
      {isGameWon ? (
        <SuccessBanner numberOfGuesses={guesses.length} />
      ) : isGameLost ? (
        <FailureBanner answer={answer} />
      ) : null}
    </>
  );
}

export default Game;
