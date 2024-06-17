import React from "react";

const rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const rowThree = ["Z", "X", "C", "V", "B", "N", "M"];

function Keyboard({ checkedLetters }) {
  const getLetterClassNames = (letter) => {
    const checkedLetter = checkedLetters.find(
      (checkedLetter) => letter === checkedLetter.letter
    );
    return `keyboard-button ${checkedLetter?.status}`;
  };
  return (
    <div>
      <ul className="keyboard-row">
        {rowOne.map((letter) => (
          <li key={letter} className={getLetterClassNames(letter)}>
            {letter}
          </li>
        ))}
      </ul>
      <ul className="keyboard-row">
        {rowTwo.map((letter) => (
          <li key={letter} className={getLetterClassNames(letter)}>
            {letter}
          </li>
        ))}
      </ul>
      <ul className="keyboard-row">
        {rowThree.map((letter) => (
          <li key={letter} className={getLetterClassNames(letter)}>
            {letter}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Keyboard;
