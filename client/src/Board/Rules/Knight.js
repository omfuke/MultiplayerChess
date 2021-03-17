const KnightRules = (position, detail, board) => {
  const locations = [];

  if (detail.color === "white") {
    if (position[0] - 2 >= 0 && position[1] + 1 < 8) {
      if (
        board[position[0] - 2][position[1] + 1].color === "black" ||
        board[position[0] - 2][position[1] + 1].name === null
      ) {
        let pos = [position[0] - 2, position[1] + 1];
        locations.push(pos);
      }
    }
    if (position[0] + 2 < 8 && position[1] + 1 < 8) {
      if (
        board[position[0] + 2][position[1] + 1].color === "black" ||
        board[position[0] + 2][position[1] + 1].name === null
      ) {
        let pos = [position[0] + 2, position[1] + 1];
        locations.push(pos);
      }
    }
    if (position[0] - 2 >= 0 && position[1] - 1 >= 0) {
      if (
        board[position[0] - 2][position[1] - 1].color === "black" ||
        board[position[0] - 2][position[1] - 1].name === null
      ) {
        let pos = [position[0] - 2, position[1] - 1];
        locations.push(pos);
      }
    }
    if (position[0] + 2 < 8 && position[1] - 1 >= 0) {
      if (
        board[position[0] + 2][position[1] - 1].color === "black" ||
        board[position[0] + 2][position[1] - 1].name === null
      ) {
        let pos = [position[0] + 2, position[1] - 1];
        locations.push(pos);
      }
    }

    if (position[0] - 1 >= 0 && position[1] - 2 >= 0) {
      if (
        board[position[0] - 2][position[1] - 2].color === "black" ||
        board[position[0] - 1][position[1] - 2].name === null
      ) {
        let pos = [position[0] - 1, position[1] - 2];
        locations.push(pos);
      }
    }
    if (position[0] - 1 >= 0 && position[1] + 2 < 8) {
      if (
        board[position[0] - 1][position[1] + 2].color === "black" ||
        board[position[0] - 1][position[1] + 2].name === null
      ) {
        let pos = [position[0] - 1, position[1] + 2];
        locations.push(pos);
      }
    }
    if (position[0] + 1 < 8 && position[1] + 2 < 8) {
      if (
        board[position[0] + 1][position[1] + 2].color === "black" ||
        board[position[0] + 1][position[1] + 2].name === null
      ) {
        let pos = [position[0] + 1, position[1] + 2];
        locations.push(pos);
      }
    }
    if (position[0] + 1 < 8 && position[1] - 2 >= 0) {
      if (
        board[position[0] + 1][position[1] - 2].color === "black" ||
        board[position[0] + 1][position[1] - 2].name === null
      ) {
        let pos = [position[0] + 1, position[1] - 2];
        locations.push(pos);
      }
    }

    return locations;
  } else {
    if (position[0] - 2 >= 0 && position[1] + 1 < 8) {
      if (
        board[position[0] - 2][position[1] + 1].color === "white" ||
        board[position[0] - 2][position[1] + 1].name === null
      ) {
        let pos = [position[0] - 2, position[1] + 1];
        locations.push(pos);
      }
    }
    if (position[0] + 2 < 8 && position[1] + 1 < 8) {
      if (
        board[position[0] + 2][position[1] + 1].color === "white" ||
        board[position[0] + 2][position[1] + 1].name === null
      ) {
        let pos = [position[0] + 2, position[1] + 1];
        locations.push(pos);
      }
    }
    if (position[0] - 2 >= 0 && position[1] - 1 >= 0) {
      if (
        board[position[0] - 2][position[1] - 1].color === "white" ||
        board[position[0] - 2][position[1] - 1].name === null
      ) {
        let pos = [position[0] - 2, position[1] - 1];
        locations.push(pos);
      }
    }
    if (position[0] + 2 < 8 && position[1] - 1 >= 0) {
      if (
        board[position[0] + 2][position[1] - 1].color === "white" ||
        board[position[0] + 2][position[1] - 1].name === null
      ) {
        let pos = [position[0] + 2, position[1] - 1];
        locations.push(pos);
      }
    }

    if (position[0] - 1 >= 0 && position[1] - 2 >= 0) {
      if (
        board[position[0] - 2][position[1] - 2].color === "white" ||
        board[position[0] - 1][position[1] - 2].name === null
      ) {
        let pos = [position[0] - 1, position[1] - 2];
        locations.push(pos);
      }
    }
    if (position[0] - 1 >= 0 && position[1] + 2 < 8) {
      if (
        board[position[0] - 1][position[1] + 2].color === "white" ||
        board[position[0] - 1][position[1] + 2].name === null
      ) {
        let pos = [position[0] - 1, position[1] + 2];
        locations.push(pos);
      }
    }
    if (position[0] + 1 < 8 && position[1] + 2 < 8) {
      if (
        board[position[0] + 1][position[1] + 2].color === "white" ||
        board[position[0] + 1][position[1] + 2].name === null
      ) {
        let pos = [position[0] + 1, position[1] + 2];
        locations.push(pos);
      }
    }
    if (position[0] + 1 < 8 && position[1] - 2 >= 0) {
      if (
        board[position[0] + 1][position[1] - 2].color === "white" ||
        board[position[0] + 1][position[1] - 2].name === null
      ) {
        let pos = [position[0] + 1, position[1] - 2];
        locations.push(pos);
      }
    }

    return locations;
  }
};

export { KnightRules };
