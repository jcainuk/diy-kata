const humanCatDogYears = number => {
  // Set catYears and dogYears variable as 0 by default,
  let catYears = 0;
  let dogYears = 0;
  // Create switch statement for different cases
  switch (number) {
    // Case 0 human years
    case 0:
      catYears = dogYears = 0;
      break;
    // Case 1 human years (+15 years)
    case 1:
      catYears = dogYears = 15;
      break;
    // Case 2 human years (+ another 9 years for 2nd year)
    case 2:
      catYears = dogYears = 24;
      break;
    // Default case 3 or more human years
    default:
      // +4 cat years for each year after that
      catYears = 4 * (number - 2) + 24;
      // +5 dog years for each year after that
      dogYears = 5 * (number - 2) + 24;
  }
  // Return an array of the 3 values
  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
