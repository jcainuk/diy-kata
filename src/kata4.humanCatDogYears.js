const humanCatDogYears = number => {
    // Cat Years
    const catYears = function () {
        // 15 cat years for first year
        if (number === 1) {
            return 15;
        }
    }

    // +9 cat years for second year
    else if (number === 2) {
    return 24;
}
// +4 cat years for each year after that
else if (number >= 3) {
    return ((4 * (number - 2)) + 24);
}
    

// Dog Years
const dogYears = function () {

    // 15 dog years for first year
    if (number === 1) {
        return 15;
    }
}
    // +9 dog years for second year
    else if (number === 2) {
    return 24;
}
// +5 dog years for each year after that
else if (number >= 3) {
    return ((5 * (number - 2)) + 24);
}


};

module.exports = humanCatDogYears;
