export const generateRoundRobinPairs = (registeredPlayers) => {
  //   const numPlayers = players.length;
  const numPlayers = registeredPlayers.length;

  // Clone the array to avoid modifying the original array
  const clonedPlayers = [...registeredPlayers];

  // If the number of players is odd, add a dummy player
  if (numPlayers % 2 !== 0) {
    clonedPlayers.push({ name: "Dummy", location: "N/A" });
  }

  const numRounds = numPlayers - 1;
  const rounds = [];

  for (let round = 0; round < numRounds; round++) {
    const roundPairs = [];

    for (let i = 0; i < numPlayers / 2; i++) {
      const pair = [clonedPlayers[i], clonedPlayers[numPlayers - 1 - i]];

      roundPairs.push(pair);
    }

    // Rotate the players array for the next round
    clonedPlayers.splice(1, 0, clonedPlayers.pop());

    rounds.push(roundPairs);
  }

  return rounds;
};
