import React from "react";
import Banner from "../Banner/Banner";

function FailureBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </Banner>
  );
}

export default FailureBanner;
