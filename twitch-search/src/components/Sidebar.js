import React from "react";
function Sidebar({ game = {} }) {
  return (
    <div
      style={{
        width: "500px",
        height: "100%",
        backgroundColor: "#EBEBEB",
        overflowY: "scroll"
      }}
    >
      {game && (
        <>
          <h3>{game.name}</h3>
          <img
            style={{ boxShadow: "4px 4px 5px gray", margin: "8px" }}
            alt={`box art for ${game.name}`}
            src={game.box.medium}
          />
          <div style={{ fontWeight: "bold" }}>
            {game.popularity.toLocaleString()} Viewers
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
