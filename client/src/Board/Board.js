import React, { useEffect, useRef, useState } from "react";
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
import Final from "./Final";
import Join from "../Join";

import { io } from "socket.io-client";
import { Redirect } from "react-router";

const generate = Math.random().toString(36).substring(2, 13);

let socket;
let PORT = "wss://chessmultiplayer.herokuapp.com/";

function Board({ history }) {
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
  const [pUp, setPopUp] = useState(false);
  const [gameId, setGameId] = useState("");
  const [yourPiece, setYourPiece] = useState(null);
  const [game, setGame] = useState(true);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [loading, setLoading] = useState(null);

  const [promoteWhite, setPromoteWhite] = useState(false);

  const [promoteBlack, setPromoteBlack] = useState(false);
  const [promoteWhiteLocation, setPromoteWhiteLocation] = useState(null);

  const [promoteBlackLocation, setPromoteBlackLocation] = useState(null);

  const result = () => {
    socket.emit("result", gameId);
  };

  const promoteWhiteHandler = (piec) => {
    const newboard = board.map(function (arr) {
      return arr.slice();
    });

    newboard[promoteWhiteLocation[0]][promoteWhiteLocation[1]] = {
      name: piec,
      color: "white",
      selected: false,
      jump: false,
    };
    setPromoteWhite(false);
    setPromoteWhiteLocation(null);

    const piece2 = chance ? "white" : "black";

    let kingLocation;

    newboard.map((x, index) =>
      x.map((p, ind) => {
        if (p.color === piece2 && p.name === "king") {
          kingLocation = [index, ind];
          return;
        }
      })
    );

    // console.log(kingLocation, piece2);

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

        pos.map((p) => {
          if (JSON.stringify(p) === JSON.stringify(kingLocation)) {
            newboard[kingLocation[0]][kingLocation[1]] = {
              ...newboard[kingLocation[0]][kingLocation[1]],
              check: true,
            };
          }
        });
      }
    }

    socket.emit("selected", {
      board: newboard,
      room: gameId,
      playerChance: false,
      chance: !chance,
    });
    setBoard(newboard);
    return;
  };

  const promoteBlackHandler = (piec) => {
    const newboard = board.map(function (arr) {
      return arr.slice();
    });

    newboard[promoteBlackLocation[0]][promoteBlackLocation[1]] = {
      name: piec,
      color: "black",
      selected: false,
      jump: false,
    };

    setPromoteBlack(false);
    setPromoteBlackLocation(null);

    const piece2 = chance ? "white" : "black";

    let kingLocation;

    newboard.map((x, index) =>
      x.map((p, ind) => {
        if (p.color === piece2 && p.name === "king") {
          kingLocation = [index, ind];
          return;
        }
      })
    );

    // console.log(kingLocation, piece2);

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

        pos.map((p) => {
          if (JSON.stringify(p) === JSON.stringify(kingLocation)) {
            newboard[kingLocation[0]][kingLocation[1]] = {
              ...newboard[kingLocation[0]][kingLocation[1]],
              check: true,
            };
          }
        });
      }
    }

    socket.emit("selected", {
      board: newboard,
      room: gameId,
      playerChance: false,
      chance: !chance,
    });
    setBoard(newboard);
    return;
  };

  const playHandler = (id) => {
    setGameId(id);

    socket.emit("join", { name: player2Name, room: id });
    setYourPiece(false);
    setGame(false);
  };

  const createHandler = () => {
    socket.emit("create", { name: player1Name, room: generate });
    setYourPiece(true);
    setGame(false);
    setLoading(true);
  };

  const [location, setLocation] = useState(null);

  const [chance, setChance] = useState(false);

  const piece = chance ? "black" : "white";

  const [playerChance, setPlayerChance] = useState(false);

  useEffect(() => {
    socket = io(PORT, { transports: ["websocket"], upgrade: false });

    return () => {
      socket.off();
    };
  }, [PORT]);

  useEffect(() => {
    socket.on("err", (data) => {
      alert(data.msg);
      window.location.reload();
      // setcJoin(true);

      return;
    });

    socket.on("player1", (data) => {
      setGameId(data.room);
      setLoading(false);
      setPlayer2Name(data.opponent);
    });

    socket.on("player2", (val) => {
      setPlayerChance(val);
    });

    socket.on("final", () => {
      setPopUp(true);
    });

    socket.on("game", (data) => {});

    socket.on("select", (data) => {
      setBoard(data.board);
      setPlayerChance(data.playerChance);
      setChance(data.chance);
    });

    socket.on("chance", (val) => {
      setPlayerChance(val);
    });
  }, []);

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

        availablePositions.map((x, index) => {
          pos.map((p) => {
            if (JSON.stringify(x) == JSON.stringify(p)) {
              indexes.push(index);
            }
          });
        });
      }
    }

    const indexSet = new Set(indexes);
    const arrayWithValuesRemoved = availablePositions.filter(
      (value, i) => !indexSet.has(i)
    );

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
        j.check = false;
      })
    );

    //killing logic

    if (board[position[0]][position[1]].name) {
      if (board[position[0]][position[1]].name === "king") {
        alert("game over");
        return;
      }

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
          if (p.color === piece2 && p.name === "king") {
            kingLocation = [index, ind];
            return;
          }
        })
      );


      // console.log(kingLocation, piece2);


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

          pos.map((p) => {
            if (JSON.stringify(p) === JSON.stringify(kingLocation)) {
              newboard[kingLocation[0]][kingLocation[1]] = {
                ...newboard[kingLocation[0]][kingLocation[1]],
                check: true,
              };
            }
          });
        }
      }

      if (
        board[location[0]][location[1]].name === "pawn" &&
        board[location[0]][location[1]].color === "white"
      ) {
        if (position[0] === 0) {
          setPromoteWhite(true);
          setPromoteWhiteLocation([position[0], position[1]]);
          setBoard(newboard);

          return;
        }
      }
      if (
        board[location[0]][location[1]].name === "pawn" &&
        board[location[0]][location[1]].color === "black"
      ) {
        if (position[0] === 7) {
          setPromoteBlack(true);
          setPromoteBlackLocation([position[0], position[1]]);
          setBoard(newboard);

          return;

        }
      }

      // socket.emit("board", newboard);
      socket.emit("selected", {
        board: newboard,
        room: gameId,
        playerChance: false,
        chance: !chance,
      });
      setBoard(newboard);

      return;
    }

    newboard[location[0]][location[1]] = board[position[0]][position[1]];
    newboard[position[0]][position[1]] = board[location[0]][location[1]];

    const piece2 = chance ? "white" : "black";

    ////check
    let kingLocation;

    newboard.map((x, index) =>
      x.map((p, ind) => {
        if (p.color === piece2 && p.name === "king") {
          kingLocation = [index, ind];
          return;
        }
      })
    );

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

        pos.map((p) => {
          if (JSON.stringify(p) === JSON.stringify(kingLocation)) {
            newboard[kingLocation[0]][kingLocation[1]] = {
              ...newboard[kingLocation[0]][kingLocation[1]],
              check: true,
            };

            return;
          }
        });


      }
    }

    if (
      board[location[0]][location[1]].name === "pawn" &&
      board[location[0]][location[1]].color === "white"
    ) {
      if (position[0] === 0) {
        setPromoteWhite(true);
        setPromoteWhiteLocation([position[0], position[1]]);
        setBoard(newboard);

        return;
      }
    }
    if (
      board[location[0]][location[1]].name === "pawn" &&
      board[location[0]][location[1]].color === "black"
    ) {
      if (position[0] === 7) {
        setPromoteBlack(true);
        setPromoteBlackLocation([position[0], position[1]]);
        setBoard(newboard);

        return;
      }
    }
    socket.emit("selected", {
      board: newboard,
      room: gameId,
      playerChance: false,
      chance: !chance,
    });
    setBoard(newboard);


    return;
  };

  //this function is for toggle off the piece on Click

  const allFalse = (position) => {
    const newboard = board.map(function (arr) {
      return arr.slice();
    });

    setLocation(position);

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
  if (game) {
    return (
      <Join
        create={createHandler}
        join={playHandler}
        player1={setPlayer1Name}
        player2={setPlayer2Name}
      />
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        {" "}
        <p className="text">Game-id: {generate}</p>
        <p className="text">Wait for your friend to Join</p>
      </div>
    );
  }

  return (
    <div className="main-board">
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: "0" }}
      >
        {playerChance ? (
          <p
            className="text"
            style={{
              display: "inline",
              backgroundColor: "tomato",
              paddingLeft: "1em",
              paddingRight: "1em",
              border: "1px solid black",
              marginRight: "2em",
              paddingTop: "0.2em",
              paddingBottom: "0.2em",
            }}
          >
            opponent turn
          </p>
        ) : (
          <p
            className="text"
            style={{
              display: "inline",
              backgroundColor: "green",
              paddingLeft: "1em",
              paddingRight: "1em",
              paddingTop: "0.2em",
              paddingBottom: "0.2em",
              border: "1px solid black",
              marginRight: "2em",
            }}
          >
            your turn
          </p>
        )}
        {yourPiece ? (
          <p
            className="text"
            style={{
              display: "inline",
              backgroundColor: "black",
              paddingLeft: "1em",
              paddingTop: "0.2em",
              paddingBottom: "0.2em",
              paddingRight: "1em",
            }}
          >
            your piece: white
          </p>
        ) : (
          <p
            className="text"
            style={{
              display: "inline",
              backgroundColor: "black",
              paddingLeft: "1em",
              paddingTop: "0.2em",
              paddingBottom: "0.2em",
              paddingRight: "1em",
            }}
          >
            your piece: black
          </p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          className="Board"
          style={{
            ...(playerChance && { pointerEvents: "none" }),
          }}
        >
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
                  chance={chance}
                  piece={piece}
                  promoteWhite={promoteWhite}
                  promoteBlack={promoteBlack}
                  popup={setPopUp}
                  res={result}
                ></Tyle>
              );
            });
          })}
        </div>

        {promoteWhite && (
          <div>
            <div
              style={{
                width: "50px",
                backgroundColor: "black",
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                padding: "5px",
              }}
            >
              <i
                style={{
                  marginBottom: "10px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => promoteWhiteHandler("rook")}
                className="fas fa-chess-rook fa-2x"
              ></i>
              <i
                style={{
                  marginBottom: "10px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => promoteWhiteHandler("queen")}
                className="fas fa-chess-queen fa-2x"
              ></i>
              <i
                style={{
                  marginBottom: "10px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => promoteWhiteHandler("bishop")}
                className="fas fa-chess-bishop fa-2x"
              ></i>
              <i
                style={{
                  marginBottom: "10px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => promoteWhiteHandler("knight")}
                className="fas fa-chess-knight fa-2x"
              ></i>
            </div>
          </div>
        )}
        {promoteBlack && (
          <div>
            <div
              style={{
                width: "50px",

                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                padding: "5px",
              }}
            >
              <i
                style={{ marginBottom: "10px", cursor: "pointer" }}
                onClick={() => promoteBlackHandler("rook")}
                className="fas fa-chess-rook fa-2x"
              ></i>
              <i
                style={{ marginBottom: "10px", cursor: "pointer" }}
                onClick={() => promoteBlackHandler("queen")}
                className="fas fa-chess-queen fa-2x"
              ></i>
              <i
                style={{ marginBottom: "10px", cursor: "pointer" }}
                onClick={() => promoteBlackHandler("bishop")}
                className="fas fa-chess-bishop fa-2x"
              ></i>
              <i
                style={{ marginBottom: "10px", cursor: "pointer" }}
                onClick={() => promoteBlackHandler("knight")}
                className="fas fa-chess-knight fa-2x"
              ></i>
            </div>
          </div>
        )}
        {pUp && (
          <div>
            <Final turn={playerChance} />
          </div>
        )}

      </div>
      
    </div>
  );
}

export default Board;
