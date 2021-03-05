const BishopRules2 = (position, detail, board) => {
  const locations = [];

  if (detail.color === "white") {
    for (
      let index = 1;
      position[0] - index >= 0 && position[1] - index >= 0;
      index++
    ) {
      if (board[position[0] - index][position[1] - index].color === "white") {
        let pos = [position[0] - index, position[1] - index];
        locations.push(pos);
        break;
      }
      if (board[position[0] - index][position[1] - index].name === null) {
        let pos = [position[0] - index, position[1] - index];
        locations.push(pos);
      } else {
        break;
      }
    }

    for (
      let index = 1;
      position[0] - index >= 0 && position[1] + index < 8;
      index++
    ) {
      if (board[position[0] - index][position[1] + index].color === "white") {
        let pos = [position[0] - index, position[1] + index];
        locations.push(pos);
        break;
      }
      if (board[position[0] - index][position[1] + index].name === null) {
        let pos = [position[0] - index, position[1] + index];
        locations.push(pos);
      } else {
        break;
      }
    }

    for (
      let index = 1;
      position[0] + index < 8 && position[1] + index < 8;
      index++
    ) {
      if (board[position[0] + index][position[1] + index].color === "white") {
        let pos = [position[0] + index, position[1] + index];
        locations.push(pos);
        break;
      }
      if (board[position[0] + index][position[1] + index].name === null) {
        let pos = [position[0] + index, position[1] + index];
        locations.push(pos);
      } else {
        break;
      }
    }

    for (
      let index = 1;
      position[0] + index < 8 && position[1] - index >= 0;
      index++
    ) {
      if (board[position[0] + index][position[1] - index].color === "white") {
        let pos = [position[0] + index, position[1] - index];
        locations.push(pos);
        break;
      }
      if (board[position[0] + index][position[1] - index].name === null) {
        let pos = [position[0] + index, position[1] - index];
        locations.push(pos);
      } else {
        break;
      }
    }

    return locations;
  } else {
    for (
      let index = 1;
      position[0] - index >= 0 && position[1] - index >= 0;
      index++
    ) {
      if (board[position[0] - index][position[1] - index].color === "black") {
        let pos = [position[0] - index, position[1] - index];
        locations.push(pos);
        break;
      }
      if (board[position[0] - index][position[1] - index].name === null) {
        let pos = [position[0] - index, position[1] - index];
        locations.push(pos);
      } else {
        break;
      }
    }

    for (
      let index = 1;
      position[0] - index >= 0 && position[1] + index < 8;
      index++
    ) {
      if (board[position[0] - index][position[1] + index].color === "black") {
        let pos = [position[0] - index, position[1] + index];
        locations.push(pos);
        break;
      }
      if (board[position[0] - index][position[1] + index].name === null) {
        let pos = [position[0] - index, position[1] + index];
        locations.push(pos);
      } else {
        break;
      }
    }

    for (
      let index = 1;
      position[0] + index < 8 && position[1] + index < 8;
      index++
    ) {
      if (board[position[0] + index][position[1] + index].color === "black") {
        let pos = [position[0] + index, position[1] + index];
        locations.push(pos);
        break;
      }
      if (board[position[0] + index][position[1] + index].name === null) {
        let pos = [position[0] + index, position[1] + index];
        locations.push(pos);
      } else {
        break;
      }
    }

    for (
      let index = 1;
      position[0] + index < 8 && position[1] - index >= 0;
      index++
    ) {
      if (board[position[0] + index][position[1] - index].color === "black") {
        let pos = [position[0] + index, position[1] - index];
        locations.push(pos);
        break;
      }
      if (board[position[0] + index][position[1] - index].name === null) {
        let pos = [position[0] + index, position[1] - index];
        locations.push(pos);
      } else {
        break;
      }
    }

    return locations;
  }
};
export { BishopRules2 };
