import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import Results from "./components/Results";
function App() {
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [pageNum, setPageNum] = useState(1);

  function fetchData(title) {
    fetch(`http://www.omdbapi.com/?apikey=ade9d7c0&s=${title}&page=${pageNum}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }

  useEffect(
    function () {
      title && fetchData(title);
    },
    [title, pageNum]
  );

  return (
    <div className="App">
      <Form setTitle={setTitle} />
      <Results data={data} setPageNum={setPageNum} />
    </div>
  );
}

export default App;
