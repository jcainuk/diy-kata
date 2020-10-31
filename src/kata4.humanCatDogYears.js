const humanCatDogYears = number => {
    const catYears = function (number) {

        // 0 cat years 
        if (number === 0) {
            return 0;
        }
        // 15 cat years for first year

        if (number === 1) {
            return 15;
        }
        // +9 cat years for second year
        if (number === 2) {
            return 24;
        }
        // +4 cat years for each year after that
        if (number >= 3) {
            return ((4 * (number - 2)) + 24);
        }
    }

    // Dog Years
    const dogYears = function (number) {

        // 0 dog years 
        if (number === 0) {
            return 0;
        }

        // 15 dog years for first year
        if (number === 1) {
            return 15;
        }

        // +9 dog years for second year
        if (number === 2) {
            return 24;
        }
        // +5 dog years for each year after that
        if (number >= 3) {
            return ((5 * (number - 2)) + 24);
        }
    }

};

module.exports = humanCatDogYears;
