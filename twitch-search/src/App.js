import React, { useState } from "react";
import logo from "./logo.jpg";
import SearchBox from "./components/SearchBox";
import GameInfo from "./components/GameInfo";
import "./App.css";

function App() {
  const [game, setGame] = useState(null);
  return (
    <div className="App">
      <header
        style={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          background: "#6441a5"
        }}
      >
        <img
          src={logo}
          style={{ height: 40, width: 60, zIndex: 2, margin: "8px" }}
          alt="logo"
        />
        <h1 style={{ color: "white", fontSize: "36px", marginLeft: "8px" }}>
          Twitch Game Search
        </h1>
      </header>
      <div style={{ display: "flex" }}>
        <SearchBox
          onSelect={game => {
            setGame(game);
          }}
        />
        <GameInfo game={game} />
      </div>
    </div>
  );
}

export default App;
