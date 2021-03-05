import React, { useState } from "react";
import "./Board.css";
import Tyle from "./Tyle/Tyle";
import { pawnRules } from "./Rules/Pawn";
import { rookRules } from "./Rules/Rook";
import { KnightRules } from "./Rules/Knight";
import { BishopRules } from "./Rules/Bishop";
import { QueenRules } from "./Rules/Queen";
import { KingRules } from "./Rules/King";
import { pawnRules2 } from "./Rules/PawnRules2";
import { KnightRules2 } from "./Rules/KnightRules2";
import { RookRules2 } from "./Rules/RookRules2";
import { QueenRules2 } from "./Rules/QueenRules2";
import { BishopRules2 } from "./Rules/BishopRules2";
import { KingRules2 } from "./Rules/KingRules2";

function Board() {
  const [board, setBoard] = useState([
    [
      { name: "rook", color: "black", selected: false, jump: false },
      { name: "knight", color: "black", selected: false, jump: false },
      { name: "bishop", color: "black", selected: false, jump: false },
      { name: "queen", color: "black", selected: false, jump: false },
      { name: "king", color: "black", selected: false, jump: false },
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
      { name: "queen", color: "white", selected: false, jump: false },
      { name: "king", color: "white", selected: false, jump: false },
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

  const checkKing = (board, availablePositions, detail) => {
    const color = detail.color === "white" ? "black" : "white";
    const pieces = [];
    let indexes = [];
    board.map((x, index) =>
      x.map((p, ind) => {
        if (p.color === color) {
          pieces.push({ ...p, position: [index, ind] });
        }
      })
    );

    for (const key in pieces) {
      if (Object.hasOwnProperty.call(pieces, key)) {
        const element = pieces[key];
        // console.log(element);
        let pos;

        switch (element.name) {
          case "pawn":
            pos = pawnRules2(element.position, element, board);
            break;
          case "rook":
            pos = RookRules2(element.position, element, board);
            break;

          case "knight":
            pos = KnightRules2(element.position, element, board);
            break;

          case "queen":
            pos = QueenRules2(element.position, element, board);
            break;

          case "king":
            pos = KingRules2(element.position, element, board);
            break;

          case "bishop":
            pos = BishopRules2(element.position, element, board);

            break;

          default:
            pos = [];
            break;
        }

        console.log(pos);
        availablePositions.map((x, index) => {
          pos.map((p) => {
            if (JSON.stringify(x) == JSON.stringify(p)) {
              indexes.push(index);
              console.log(x);
            }
          });
        });
      }
    }

    const indexSet = new Set(indexes);
    const arrayWithValuesRemoved = availablePositions.filter(
      (value, i) => !indexSet.has(i)
    );
    console.log(arrayWithValuesRemoved);

    console.log(indexes);
    // console.log(pieces);
    console.log(availablePositions);
    return arrayWithValuesRemoved;
  };

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

    //killing logic

    if (board[position[0]][position[1]].name) {
      newboard[location[0]][location[1]] = {
        name: null,
        selected: false,
        jump: false,
      };
      newboard[position[0]][position[1]] = board[location[0]][location[1]];
      const piece2 = chance ? "white" : "black";

      ////check
      let kingLocation;

      newboard.map((x, index) =>
        x.map((p, ind) => {
          if (p.color == piece2 && p.name == "king") {
            kingLocation = [index, ind];
            return;
          }
        })
      );

      console.log(kingLocation, piece2);

      const pieces = [];

      newboard.map((x, index) =>
        x.map((p, ind) => {
          if (p.color === piece) {
            pieces.push({ ...p, position: [index, ind] });
          }
        })
      );

      for (const key in pieces) {
        if (Object.hasOwnProperty.call(pieces, key)) {
          const element = pieces[key];
          // console.log(element);
          let pos;

          switch (element.name) {
            case "pawn":
              pos = pawnRules(element.position, element, newboard);
              break;
            case "rook":
              pos = rookRules(element.position, element, newboard);
              break;

            case "knight":
              pos = KnightRules(element.position, element, newboard);
              break;

            case "queen":
              pos = QueenRules(element.position, element, newboard);
              break;

            case "king":
              pos = KingRules(element.position, element, newboard);
              break;

            case "bishop":
              pos = BishopRules(element.position, element, newboard);

              break;

            default:
              pos = [];
              break;
          }

          console.log(pos);
          pos.map((p) => {
            if (JSON.stringify(p) == JSON.stringify(kingLocation)) {
              newboard[kingLocation[0]][kingLocation[1]] = {
                ...newboard[kingLocation[0]][kingLocation[1]],
                check: true,
              };
              console.log(kingLocation, "hiiiiiiiiiiiiiiii");
            }
          });

          // availablePositions.map((x, index) => {
          //   pos.map((p) => {
          //     if (JSON.stringify(x) == JSON.stringify(p)) {
          //       indexes.push(index);
          //       console.log(x);
          //     }
          //   });
          // });
        }
      }

      setBoard(newboard);
      setChance(!chance);

      return;
    }

    newboard[location[0]][location[1]] = board[position[0]][position[1]];
    newboard[position[0]][position[1]] = board[location[0]][location[1]];

    const piece2 = chance ? "white" : "black";

    ////check
    let kingLocation;

    newboard.map((x, index) =>
      x.map((p, ind) => {
        if (p.color == piece2 && p.name == "king") {
          kingLocation = [index, ind];
          return;
        }
      })
    );

    console.log(kingLocation, piece2);

    const pieces = [];

    newboard.map((x, index) =>
      x.map((p, ind) => {
        if (p.color === piece) {
          pieces.push({ ...p, position: [index, ind] });
        }
      })
    );

    for (const key in pieces) {
      if (Object.hasOwnProperty.call(pieces, key)) {
        const element = pieces[key];
        // console.log(element);
        let pos;

        switch (element.name) {
          case "pawn":
            pos = pawnRules(element.position, element, newboard);
            break;
          case "rook":
            pos = rookRules(element.position, element, newboard);
            break;

          case "knight":
            pos = KnightRules(element.position, element, newboard);
            break;

          case "queen":
            pos = QueenRules(element.position, element, newboard);
            break;

          case "king":
            pos = KingRules(element.position, element, newboard);
            break;

          case "bishop":
            pos = BishopRules(element.position, element, newboard);

            break;

          default:
            pos = [];
            break;
        }

        console.log(pos);
        pos.map((p) => {
          if (JSON.stringify(p) == JSON.stringify(kingLocation)) {
            newboard[kingLocation[0]][kingLocation[1]] = {
              ...newboard[kingLocation[0]][kingLocation[1]],
              check: true,
            };
            console.log(kingLocation, "hiiiiiiiiiiiiiiii");
            return;
          }
        });

        // availablePositions.map((x, index) => {
        //   pos.map((p) => {
        //     if (JSON.stringify(x) == JSON.stringify(p)) {
        //       indexes.push(index);
        //       console.log(x);
        //     }
        //   });
        // });
      }
    }

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

        case "rook":
          return rookRules(position, detail, newboard);
        case "knight":
          return KnightRules(position, detail, newboard);
        case "bishop":
          return BishopRules(position, detail, newboard);
        case "queen":
          return QueenRules(position, detail, newboard);

        case "king":
          return KingRules(position, detail, newboard);

        default:
          return pawnRules(position, detail, newboard);
      }
    };

    let availablePositions = pieceRules();

    if (detail.name === "king") {
      availablePositions = checkKing(newboard, availablePositions, detail);
    }

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
