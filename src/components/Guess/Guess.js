import React from "react";

import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((index) => {
        const verifiedGuess = guess && guess[index];
        return (
          <span key={index} className={`cell ${verifiedGuess?.status ?? ""}`}>
            {verifiedGuess?.letter ?? ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
