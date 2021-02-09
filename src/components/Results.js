import React from "react";
import Buttons from "./Buttons";

export default function Results({ data, setPageNum }) {
  let totalResultsButtons = data.totalResults / 10;
  const resultsButtonsTable = [];

  for (let i = 0; i < totalResultsButtons; i++) {
    resultsButtonsTable.push(i);
  }

  return (
    <>
      {data ? (
        data.Response === "True" ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Poster</th>
                  <th>Title</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {data.Search.map((item) => (
                  <tr key={item.imdbID}>
                    <td>
                      <img src={item.Poster} alt="poster" />
                    </td>
                    <td>{item.Title}</td>
                    <td>{item.Year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Buttons
              resultsTable={resultsButtonsTable}
              setPageNum={setPageNum}
            />
          </div>
        ) : (
          <p>No movies found</p>
        )
      ) : (
        ""
      )}
    </>
  );
}
