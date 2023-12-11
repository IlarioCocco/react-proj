import React, { useState, useEffect } from "react";

function Button() {
  const [count, setCount] = useState(0);

  const incremento = () => {
    setCount(count + 1);
  };

   const decremento = () => {
     setCount(count - 1);
   };

  const reset = () => {
    setCount(0);
  };

  // effetto collaterale registrazione console
  useEffect(() => {
    console.log(`Il valore di count è: ${count}`);
  });

  return (
    <>
      <div className="containButton">
        <span className="cownt">
          {count}
          <button className="button fw-bold" onClick={incremento}>
            Increment
          </button>
          <button className="button fw-bold" onClick={decremento}>
            decrement
          </button>
          <button className="button-reset fw-bold" onClick={reset}>
            Reset
          </button>
        </span>
      </div>
    </>
  );
}

export default Button;
