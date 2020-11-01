const humanCatDogYears = number => {
    //Declare variables to catch everything
    let myArray = [];
    let catYears;
    let dogYears;

    // 0 cat years & 0 dog years
    if (number === 0) {

        catYears = 0;
        console.log(catYears);
        dogYears = 0;
        console.log(dogYears);
    }
    // 15 cat years & 15 dog years for first year

    else if (number === 1) {

        catYears = 15;
        console.log(catYears);
        dogYears = 15;
        console.log(dogYears);
    }

    // +9 cat years & dog years for second year
    else if (number === 2) {

        catYears = 24;
        console.log(catYears);
        dogYears = 24;
        console.log(dogYears);
    }

    else if (number >= 3) {

        // +4 cat years for each year after that
        catYears = ((4 * (number - 2)) + 24);
        console.log(catYears);
        // +5 dog years for each year after that
        dogYears = ((5 * (number - 2)) + 24);
        console.log(dogYears);
    }

    myArray.push(number, catYears, dogYears);
    return myArray;
    console.log(myArray);
};

module.exports = humanCatDogYears;
