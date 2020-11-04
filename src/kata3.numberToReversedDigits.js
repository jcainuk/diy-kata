const numberToReversedDigits = number => {
    if (!isNaN(number)) {
        //example number = 1234;
        //1. Convert 1234 into a string "1234"
        //AND Split the number 1234 into and array =>["1", "2", "3", "4"]
        const array = number.toString().split("");
        //console.log(array);
        //2.. Reverse said array ["4", "3", "2", "1"]
        const reversedArray = array.reverse();
        //console.log(reversedArray);
        //3. Change the array elements from strings to numbers =>[4, 3, 2, 1]
        const numberArray = reversedArray.map(Number);
        //console.log(numberArray);
        return numberArray;
    }
    else {console.log('This data type is not a number');
        return "This data type is not a number";
    }
};

module.exports = numberToReversedDigits;
