const pawnRules = (position, detail, board) => {
  let locations = [];
  if (detail.color === "white") {
    if (position[0] === 6) {
      if (board[position[0] - 1][position[1]].name == null) {
        let pos = [position[0] - 1, position[1]];
        locations.push(pos);
      }
      if (
        board[position[0] - 2][position[1]].name == null &&
        board[position[0] - 1][position[1]].name == null
      ) {
        let pos = [position[0] - 2, position[1]];
        locations.push(pos);
      }

      if (position[1] - 1 >= 0) {
        if (board[position[0] - 1][position[1] - 1].color === "black") {
          let pos = [position[0] - 1, position[1] - 1];
          locations.push(pos);
        }
      }
      if (position[1] + 1 < 8) {
        if (board[position[0] - 1][position[1] + 1].color === "black") {
          let pos = [position[0] - 1, position[1] + 1];
          locations.push(pos);
        }
      }

      return locations;
    } else {
      if (position[0] - 1 >= 0) {
        if (board[position[0] - 1][position[1]].name == null) {
          let pos = [position[0] - 1, position[1]];
          locations.push(pos);
        }
      }

      if (position[1] - 1 >= 0 && position[0] - 1 >= 0) {
        if (board[position[0] - 1][position[1] - 1].color === "black") {
          let pos = [position[0] - 1, position[1] - 1];
          locations.push(pos);
        }
      }
      if (position[1] + 1 < 8 && position[0] - 1 >= 0) {
        if (board[position[0] - 1][position[1] + 1].color === "black") {
          let pos = [position[0] - 1, position[1] + 1];
          locations.push(pos);
        }
      }

      return locations;
    }
  } else {
    if (position[0] === 1) {
      if (board[position[0] + 1][position[1]].name == null) {
        let pos = [position[0] + 1, position[1]];
        locations.push(pos);
      }

      if (
        board[position[0] + 2][position[1]].name == null &&
        board[position[0] + 1][position[1]].name == null
      ) {
        let pos = [position[0] + 2, position[1]];
        locations.push(pos);
      }

      if (position[1] - 1 >= 0) {
        if (board[position[0] + 1][position[1] - 1].color === "white") {
          let pos = [position[0] + 1, position[1] - 1];
          locations.push(pos);
        }
      }
      if (position[1] + 1 < 8) {
        if (board[position[0] + 1][position[1] + 1].color === "white") {
          let pos = [position[0] + 1, position[1] + 1];
          locations.push(pos);
        }
      }

      return locations;
    } else {
      if (position[0] + 1 < 8) {
        if (board[position[0] + 1][position[1]].name == null) {
          let pos = [position[0] + 1, position[1]];
          locations.push(pos);
        }
      }
      if (position[1] - 1 >= 0 && position[0] + 1 < 8) {
        if (board[position[0] + 1][position[1] - 1].color === "white") {
          let pos = [position[0] + 1, position[1] - 1];
          locations.push(pos);
        }
      }
      if (position[1] + 1 < 8 && position[0] + 1 < 8) {
        if (board[position[0] + 1][position[1] + 1].color === "white") {
          let pos = [position[0] + 1, position[1] + 1];
          locations.push(pos);
        }
      }

      return locations;
    }
  }
};

export { pawnRules };
