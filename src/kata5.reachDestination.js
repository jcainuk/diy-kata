const reachDestination = (distance, speed) => {
  // Declare a variable to catch distance / speed
  // We divide distance by speed (e.g.44 / 10)
  const distDivSpeed = distance / speed;

  // The time 4.4 should be rounded up to the nearest 0.5 hours (half an hour).
  const hoursToDestination = Math.round(distDivSpeed * 2) / 2;

  // /It outputs a string `I should be there in ${4.5} hours` (four and a half hours)
  return `I should be there in ${hoursToDestination} hour(s)`;
};

module.exports = reachDestination;
