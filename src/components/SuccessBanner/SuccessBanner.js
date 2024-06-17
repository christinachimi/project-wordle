import React from "react";
import Banner from "../Banner/Banner";

function SuccessBanner({ numberOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfGuesses === 1 ? `1 guess` : `${numberOfGuesses} guesses`}
        </strong>
        .
      </p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </Banner>
  );
}

export default SuccessBanner;
