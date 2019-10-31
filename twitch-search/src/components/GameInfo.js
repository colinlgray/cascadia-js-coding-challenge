import React from "react";
function GameInfo({ game }) {
  return (
    game && (
      <div style={{ width: "40%" }}>
        <h3>{game.name}</h3>
        <img alt={`box art for ${game.name}`} src={game.box.medium} />
        <div>{game.popularity.toLocaleString()} Viewers</div>
      </div>
    )
  );
}

export default GameInfo;
