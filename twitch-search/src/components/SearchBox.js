import React, { useState, useEffect } from "react";
import axios from "axios";
function Search({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const api = axios.create({
    baseURL: "https://api.twitch.tv/kraken/",
    headers: {
      "Client-ID": "vcbfmvjqu42baq8e91isxrhimfdaas",
      Accept: "application/vnd.twitchtv.v5+json"
    }
  });
  useEffect(() => {
    if (query) {
      api.get(`search/games?query=${encodeURI(query)}`).then(res => {
        if (res.data && res.data.games) {
          setResults(res.data.games);
        }
      });
    }
  }, [query, api]);

  return (
    <div>
      <p>
        Search for your favorite games in the search box below. Click on their
        name to find out more information on them.
      </p>
      <div
        style={{
          width: "200px",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          margin: "0 auto"
        }}
      >
        Search:
        <input
          style={{
            marginTop: "4px",
            height: "24px",
            border: "2px solid black"
          }}
          type="text"
          label="Search"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <ul style={{ listStyleType: "none" }}>
          {results.map(game => {
            return (
              <li
                onClick={() => {
                  onSelect(game);
                }}
                key={game._id}
              >
                <div>{game.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Search;
