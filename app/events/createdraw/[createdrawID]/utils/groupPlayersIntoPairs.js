export const groupPlayersIntoPairs = (players) => {
  const pairs = [];
  for (let i = 0; i < players.length; i += 2) {
    const pair = [players[i], players[i + 1]];
    pairs.push(pair);
  }
  return pairs;
};
