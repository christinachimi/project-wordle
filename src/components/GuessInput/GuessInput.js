import React from "react";

function GuessInput({ addGuess, enabled = true }) {
  const [potentialGuess, setPotentialGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addGuess(potentialGuess);
    setPotentialGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={potentialGuess}
        onChange={(event) =>
          setPotentialGuess(event.target.value.toUpperCase())
        }
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="Please enter a 5-letter word."
        required
        disabled={!enabled}
      />
    </form>
  );
}

export default GuessInput;
