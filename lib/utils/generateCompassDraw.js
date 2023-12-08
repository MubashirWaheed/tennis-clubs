function generateCompassDraw(players) {
  const compassPoints = [
    "North",
    "South",
    "East",
    "West",
    "Northeast",
    "Northwest",
    "Southeast",
    "Southwest",
  ];

  // Shuffle players for random seeding
  players = players.sort(() => Math.random() - 0.5);

  const draw = [];

  // Assign players to compass points
  for (let i = 0; i < players.length; i++) {
    draw.push({ player: players[i], compassPoint: compassPoints[i] });
  }

  // Function to determine the next round matchups
  const getNextRoundMatches = (round) => {
    const nextRoundMatches = [];
    for (let i = 0; i < round.length; i += 2) {
      nextRoundMatches.push({
        match: `${round[i].compassPoint} vs. ${round[i + 1].compassPoint}`,
      });
    }
    return nextRoundMatches;
  };

  // Start the tournament rounds
  let currentRound = draw;

  while (currentRound.length > 1) {
    console.log("Round Matches:");
    console.log(currentRound);

    // Winners move inward
    const winners = [];
    for (let i = 0; i < currentRound.length; i += 2) {
      winners.push(currentRound[i].player);
    }

    const nextRoundMatches = getNextRoundMatches(winners);
    console.log("Winners Moving Inward:");
    console.log(nextRoundMatches);

    // Move to the next round
    currentRound = winners.map((player, index) => ({
      player,
      compassPoint: compassPoints[index],
    }));
  }

  console.log("Tournament Winner:");
  console.log(currentRound[0].player);
}

// Example usage with 8 players
const players = [
  "Player1",
  "Player2",
  "Player3",
  "Player4",
  "Player5",
  "Player6",
  "Player7",
  "Player8",
];

generateCompassDraw(players);
