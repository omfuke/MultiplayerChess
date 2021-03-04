const KingRules = (position, detail, board) => {
  const locations = [];
  if (detail.color === "white") {
    if (position[0] - 1 >= 0 && position[1] - 1 >= 0) {
      if (
        board[position[0] - 1][position[1] - 1].color === "black" ||
        board[position[0] - 1][position[1] - 1].name === null
      ) {
        let pos = [position[0] - 1, position[1] - 1];
        locations.push(pos);
      }
    }

    if (position[0] - 1 >= 0 && position[1] + 1 < 8) {
      if (
        board[position[0] - 1][position[1] + 1].color === "black" ||
        board[position[0] - 1][position[1] + 1].name === null
      ) {
        let pos = [position[0] - 1, position[1] + 1];
        locations.push(pos);
      }
    }

    if (position[0] + 1 < 8 && position[1] + 1 < 8) {
      if (
        board[position[0] + 1][position[1] + 1].color === "black" ||
        board[position[0] + 1][position[1] + 1].name === null
      ) {
        let pos = [position[0] + 1, position[1] + 1];
        locations.push(pos);
      }
    }

    if (position[0] + 1 < 8 && position[1] - 1 >= 0) {
      if (
        board[position[0] + 1][position[1] - 1].color === "black" ||
        board[position[0] + 1][position[1] - 1].name === null
      ) {
        let pos = [position[0] + 1, position[1] - 1];
        locations.push(pos);
      }
    }

    //

    if (position[0] - 1 >= 0) {
      if (
        board[position[0] - 1][position[1]].name === null ||
        board[position[0] - 1][position[1]].color === "black"
      ) {
        let pos = [position[0] - 1, position[1]];
        locations.push(pos);
      }
    }

    if (position[0] + 1 < 8) {
      if (
        board[position[0] + 1][position[1]].name === null ||
        board[position[0] + 1][position[1]].color === "black"
      ) {
        let pos = [position[0] + 1, position[1]];
        locations.push(pos);
      }
    }

    if (position[1] - 1 >= 0) {
      if (
        board[position[0]][position[1] - 1].name === null ||
        board[position[0]][position[1] - 1].color === "black"
      ) {
        let pos = [position[0], position[1] - 1];
        locations.push(pos);
      }
    }

    if (position[1] + 1 < 8) {
      if (
        board[position[0]][position[1] + 1].name === null ||
        board[position[0]][position[1] + 1].color === "black"
      ) {
        let pos = [position[0], position[1] + 1];
        locations.push(pos);
      }
    }

    return locations;
  }
  //////
  else {
    if (position[0] - 1 >= 0 && position[1] - 1 >= 0) {
      if (
        board[position[0] - 1][position[1] - 1].color === "white" ||
        board[position[0] - 1][position[1] - 1].name === null
      ) {
        let pos = [position[0] - 1, position[1] - 1];
        locations.push(pos);
      }
    }

    if (position[0] - 1 >= 0 && position[1] + 1 < 8) {
      if (
        board[position[0] - 1][position[1] + 1].color === "white" ||
        board[position[0] - 1][position[1] + 1].name === null
      ) {
        let pos = [position[0] - 1, position[1] + 1];
        locations.push(pos);
      }
    }

    if (position[0] + 1 < 8 && position[1] + 1 < 8) {
      if (
        board[position[0] + 1][position[1] + 1].color === "white" ||
        board[position[0] + 1][position[1] + 1].name === null
      ) {
        let pos = [position[0] + 1, position[1] + 1];
        locations.push(pos);
      }
    }

    if (position[0] + 1 < 8 && position[1] - 1 >= 0) {
      if (
        board[position[0] + 1][position[1] - 1].color === "white" ||
        board[position[0] + 1][position[1] - 1].name === null
      ) {
        let pos = [position[0] + 1, position[1] - 1];
        locations.push(pos);
      }
    }

    //

    if (position[0] - 1 >= 0) {
      if (
        board[position[0] - 1][position[1]].name === null ||
        board[position[0] - 1][position[1]].color === "white"
      ) {
        let pos = [position[0] - 1, position[1]];
        locations.push(pos);
      }
    }

    if (position[0] + 1 < 8) {
      if (
        board[position[0] + 1][position[1]].name === null ||
        board[position[0] + 1][position[1]].color === "white"
      ) {
        let pos = [position[0] + 1, position[1]];
        locations.push(pos);
      }
    }

    if (position[1] - 1 >= 0) {
      if (
        board[position[0]][position[1] - 1].name === null ||
        board[position[0]][position[1] - 1].color === "white"
      ) {
        let pos = [position[0], position[1] - 1];
        locations.push(pos);
      }
    }

    if (position[1] + 1 < 8) {
      if (
        board[position[0]][position[1] + 1].name === null ||
        board[position[0]][position[1] + 1].color === "white"
      ) {
        let pos = [position[0], position[1] + 1];
        locations.push(pos);
      }
    }

    return locations;
  }
};

export { KingRules };
