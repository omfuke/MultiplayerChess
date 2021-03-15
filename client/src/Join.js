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
      <div
        className="create"
        style={{
          marginBottom: "2em",
          border: "1px solid white",
          padding: "1em",
        }}
        onClick={createHandler}
      >
        Create Game
      </div>
      <div
        style={{
          border: "2px solid white",
          padding: "1em",
          borderRadius: "2%",
        }}
      >
        <input
          placeholder="room Id"
          type="text"
          style={{ width: "256px", height: "30px", marginBottom: "1em" }}
          onChange={(e) => setGame(e.target.value)}
        />

        <div
          className="create"
          onChange={(e) => setGame(e.target.value)}
          onClick={joinHandler}
        >
          Join Game
        </div>
      </div>
    </div>
  );
};

export default Join;
