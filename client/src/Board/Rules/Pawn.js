const pawnRules = (position, detail, board) => {
  console.log(detail);
  if (position[0] === 1 || position[0] === 6) {
    if (detail.color === "white") {
      let locations = [];
      let pos = [position[0] - 1, position[1]];
      locations.push(pos);
      pos = [position[0] - 2, position[1]];
      locations.push(pos);

      //console.log(locations, "hello");

      return locations;
    }

    let locations = [];
    let pos = [position[0] + 1, position[1]];
    locations.push(pos);
    pos = [position[0] + 2, position[1]];
    locations.push(pos);

    //console.log(locations, "hello");

    return locations;
  } else {
    if (detail.color === "white") {
      let locations = [];
      let pos = [position[0] - 1, position[1]];
      locations.push(pos);

      //console.log(locations, "hello");

      return locations;
    }

    let locations = [];
    let pos = [position[0] + 1, position[1]];
    locations.push(pos);

    //console.log(locations, "hello");

    return locations;
  }
};

export { pawnRules };
