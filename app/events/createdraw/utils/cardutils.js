export const calculateNumberOfCards = (registeredPlayers) => {
  return Math.ceil(registeredPlayers.length / 2);
};

export const generateCardIndices = (numberOfCards) => {
  return Array.from({ length: numberOfCards }, (_, index) => index + 1);
};
