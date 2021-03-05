const KingRules2 = (position, detail, board) => {
  const locations = [];
  if (detail.color === "white") {
    if (position[0] - 1 >= 0 && position[1] - 1 >= 0) {
      let pos = [position[0] - 1, position[1] - 1];
      locations.push(pos);
    }

    if (position[0] - 1 >= 0 && position[1] + 1 < 8) {
      let pos = [position[0] - 1, position[1] + 1];
      locations.push(pos);
    }

    if (position[0] + 1 < 8 && position[1] + 1 < 8) {
      let pos = [position[0] + 1, position[1] + 1];
      locations.push(pos);
    }

    if (position[0] + 1 < 8 && position[1] - 1 >= 0) {
      let pos = [position[0] + 1, position[1] - 1];
      locations.push(pos);
    }

    //

    if (position[0] - 1 >= 0) {
      let pos = [position[0] - 1, position[1]];
      locations.push(pos);
    }

    if (position[0] + 1 < 8) {
      let pos = [position[0] + 1, position[1]];
      locations.push(pos);
    }

    if (position[1] - 1 >= 0) {
      let pos = [position[0], position[1] - 1];
      locations.push(pos);
    }

    if (position[1] + 1 < 8) {
      let pos = [position[0], position[1] + 1];
      locations.push(pos);
    }

    return locations;
  }
  //////
  else {
    if (position[0] - 1 >= 0 && position[1] - 1 >= 0) {
      let pos = [position[0] - 1, position[1] - 1];
      locations.push(pos);
    }

    if (position[0] - 1 >= 0 && position[1] + 1 < 8) {
      let pos = [position[0] - 1, position[1] + 1];
      locations.push(pos);
    }

    if (position[0] + 1 < 8 && position[1] + 1 < 8) {
      let pos = [position[0] + 1, position[1] + 1];
      locations.push(pos);
    }

    if (position[0] + 1 < 8 && position[1] - 1 >= 0) {
      let pos = [position[0] + 1, position[1] - 1];
      locations.push(pos);
    }

    //

    if (position[0] - 1 >= 0) {
      let pos = [position[0] - 1, position[1]];
      locations.push(pos);
    }

    if (position[0] + 1 < 8) {
      let pos = [position[0] + 1, position[1]];
      locations.push(pos);
    }

    if (position[1] - 1 >= 0) {
      let pos = [position[0], position[1] - 1];
      locations.push(pos);
    }

    if (position[1] + 1 < 8) {
      let pos = [position[0], position[1] + 1];
      locations.push(pos);
    }

    return locations;
  }
};

export { KingRules2 };
