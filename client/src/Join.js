import React, { useState } from "react";
import "./Join.css";

const Join = ({ history, create, join, player1, player2 }) => {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");

  const createHandler = () => {
    create();
  };

  const joinHandler = () => {
    join(game);
  };
  return (
    <div className="background">
      <input type="text" onChange={(e) => player1(e.target.value)} />
      <div className="create" onClick={createHandler}>
        Create Game
      </div>
      <input type="text" onChange={(e) => player2(e.target.value)} />
      <input type="text" onChange={(e) => setGame(e.target.value)} />
      <div
        onChange={(e) => setGame(e.target.value)}
        onClick={joinHandler}
        style={{
          width: "100px",
          backgroundColor: "lightblue",
          textAlign: "center",
        }}
      >
        Join Game
      </div>
    </div>
  );
};

export default Join;
