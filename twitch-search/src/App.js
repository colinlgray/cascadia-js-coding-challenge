import React from "react";
import logo from "./logo.jpg";
import SearchBox from "./components/SearchBox";
import "./App.css";

function App() {
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
      <div>
        <p>
          Search for your favorite games in the search box below. Click on their
          name to find out more information on them.
        </p>
        <SearchBox />
      </div>
    </div>
  );
}

export default App;
