import React, { useState } from "react";
import "./Board.css";
import Tyle from "./Tyle/Tyle";
import { pawnRules } from "./Rules/Pawn";

function Board() {
  const [board, setBoard] = useState([
    [
      { name: "rook", color: "black", selected: false, jump: false },
      { name: "knight", color: "black", selected: false, jump: false },
      { name: "bishop", color: "black", selected: false, jump: false },
      { name: "king", color: "black", selected: false, jump: false },
      { name: "queen", color: "black", selected: false, jump: false },
      { name: "bishop", color: "black", selected: false, jump: false },
      { name: "knight", color: "black", selected: false, jump: false },
      { name: "rook", color: "black", selected: false, jump: false },
    ],
    [
      { name: "pawn", color: "black", selected: false, jump: false },
      { name: "pawn", color: "black", selected: false, jump: false },
      { name: "pawn", color: "black", selected: false, jump: false },
      { name: "pawn", color: "black", selected: false, jump: false },
      { name: "pawn", color: "black", selected: false, jump: false },
      { name: "pawn", color: "black", selected: false, jump: false },
      { name: "pawn", color: "black", selected: false, jump: false },
      { name: "pawn", color: "black", selected: false, jump: false },
    ],
    [
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
    ],
    [
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
    ],
    [
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
    ],
    [
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
      { name: null, selected: false, jump: false },
    ],
    [
      { name: "pawn", color: "white", selected: false, jump: false },
      { name: "pawn", color: "white", selected: false, jump: false },
      { name: "pawn", color: "white", selected: false, jump: false },
      { name: "pawn", color: "white", selected: false, jump: false },
      { name: "pawn", color: "white", selected: false, jump: false },
      { name: "pawn", color: "white", selected: false, jump: false },
      { name: "pawn", color: "white", selected: false, jump: false },
      { name: "pawn", color: "white", selected: false, jump: false },
    ],
    [
      { name: "rook", color: "white", selected: false, jump: false },
      { name: "knight", color: "white", selected: false, jump: false },
      { name: "bishop", color: "white", selected: false, jump: false },
      { name: "king", color: "white", selected: false, jump: false },
      { name: "queen", color: "white", selected: false, jump: false },
      { name: "bishop", color: "white", selected: false, jump: false },
      { name: "knight", color: "white", selected: false, jump: false },
      { name: "rook", color: "white", selected: false, jump: false },
    ],
  ]);

  const [location, setLocation] = useState(null);

  const [chance, setChance] = useState(false);
  const piece = chance ? "black" : "white";

  if (location) {
    //console.log(location);
  }

  const goToLocation = (position) => {
    // console.log(location, position);

    const newboard = board.map(function (arr) {
      return arr.slice();
    });

    newboard.map((i, index) =>
      i.map((j, ind) => {
        j.selected = false;
        j.jump = false;
      })
    );

    newboard[location[0]][location[1]] = board[position[0]][position[1]];
    newboard[position[0]][position[1]] = board[location[0]][location[1]];
    setBoard(newboard);
    setChance(!chance);

    return;
  };

  //this function is for toggle off the piece on Click

  const allFalse = () => {
    const newboard = board.map(function (arr) {
      return arr.slice();
    });

    newboard.map((i, index) =>
      i.map((j, ind) => {
        j.selected = false;
        j.jump = false;
      })
    );

    setBoard(newboard);
  };

  //this function is for showing available location for move

  const checking = (detail, position) => {
    console.log(position, detail);

    const newboard = board.map(function (arr) {
      return arr.slice();
    });

    const pieceRules = () => {
      switch (detail.name) {
        case "pawn":
          return pawnRules(position, detail, newboard);

        default:
          return pawnRules(position, detail, newboard);
      }
    };

    const availablePositions = pieceRules();

    newboard[position[0]][position[1]] = {
      ...board[position[0]][position[1]],
      selected: true,
    };

    if (availablePositions) {
      availablePositions.map((pos) => {
        newboard[pos[0]][pos[1]] = { ...board[pos[0]][pos[1]], jump: true };
      });
    }

    newboard.map((i, index) =>
      i.map((j, ind) => {
        if ((index !== position[0] || ind !== position[1]) && j !== null) {
          j.selected = false;
        }
      })
    );

    setBoard(newboard);
  };
  let tyle;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="Board">
        {board.map((i, index) => {
          return i.map((j, ind) => {
            if (index % 2 === 0) {
              if (ind % 2 === 0) {
                tyle = true;
              } else {
                tyle = false;
              }
            } else {
              if (ind % 2 === 0) {
                tyle = false;
              } else {
                tyle = true;
              }
            }

            return (
              <Tyle
                key={[index, ind]}
                checking={checking}
                tyle={tyle}
                detail={j}
                position={[index, ind]}
                selected={setLocation}
                allFalse={allFalse}
                goToLocation={goToLocation}
                piece={piece}
              ></Tyle>
            );
          });
        })}
      </div>
    </div>
  );
}

export default Board;
