import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebouncedCallback } from "use-debounce";

const liStyle = {
  border: "1px solid gray",
  textAlign: "initial",
  width: "200px",
  margin: "2px auto",
  padding: "4px"
};

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

  const [debouncedCallback] = useDebouncedCallback(() => {
    if (query) {
      api.get(`search/games?query=${encodeURI(query)}`).then(res => {
        setResults(res.data.games);
      });
    }
  }, 250);

  useEffect(debouncedCallback, [query, api]);

  return (
    <div style={{ overflowY: "scroll" }}>
      <p style={{ padding: "24px" }}>
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
            height: "24px"
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
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {results === null && <li style={liStyle}>No Results</li>}
          {results &&
            results.map(game => {
              return (
                <li
                  tabIndex={0}
                  role="button"
                  style={liStyle}
                  onClick={() => {
                    onSelect(game);
                  }}
                  onKeyPress={e => {
                    var code = e.keyCode || e.which;
                    if (code === 13) {
                      onSelect(game);
                    }
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
