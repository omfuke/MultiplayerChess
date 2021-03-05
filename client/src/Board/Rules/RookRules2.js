const RookRules2 = (position, detail, board) => {
  console.log(detail);
  const locations = [];

  if (true) {
    for (let index = 1; position[0] - index >= 0; index++) {
      if (board[position[0] - index][position[1]].name !== null) {
        let pos = [position[0] - index, position[1]];
        locations.push(pos);
        console.log("breaking");
        break;
      }
      let pos = [position[0] - index, position[1]];
      locations.push(pos);
    }

    for (let index = 1; position[0] + index < 8; index++) {
      if (board[position[0] + index][position[1]].name !== null) {
        let pos = [position[0] + index, position[1]];
        locations.push(pos);
        console.log("breaking");
        break;
      }
      let pos = [position[0] + index, position[1]];
      locations.push(pos);
    }

    for (let index = 1; position[1] - index >= 0; index++) {
      if (board[position[0]][position[1] - index].name !== null) {
        let pos = [position[0], position[1] - index];
        locations.push(pos);
        console.log("breaking");
        break;
      }
      let pos = [position[0], position[1] - index];
      locations.push(pos);
    }

    for (let index = 1; position[1] + index < 8; index++) {
      if (board[position[0]][position[1] + index].name !== null) {
        let pos = [position[0], position[1] + index];
        locations.push(pos);
        console.log("breaking");
        break;
      }
      let pos = [position[0], position[1] + index];
      locations.push(pos);
    }

    return locations;
  }
};

export { RookRules2 };
