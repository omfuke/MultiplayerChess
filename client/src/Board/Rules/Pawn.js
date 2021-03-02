const pawnRules = (position, detail, board) => {
  let locations = [];
  let pos = [position[0] - 1, position[1]];
  locations.push(pos);
  pos = [position[0] - 2, position[1]];
  locations.push(pos);

  console.log(locations, "hello");

  return locations;
};

export { pawnRules };
