import React, { useState } from "react";

export default function Buttons({ resultsTable, setPageNum }) {
  const [count, setCount] = useState(0);

  return (
    <div className="buttons-box">
      {resultsTable.length !== 0 &&
        resultsTable.slice(count, count + 10).map((elem) => (
          <button
            key={elem}
            value={elem + 1}
            onClick={({ target }) => {
              setPageNum(target.value);
              setCount(elem - 1);
            }}
          >
            {elem + 1}
          </button>
        ))}
    </div>
  );
}
