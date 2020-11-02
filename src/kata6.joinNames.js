const joinNames = namesObj => {
    if(namesObj.length === 1){
  return namesObj[0].name; 
  }
    
  else {
      // Create a string of the obj names and join them with a comma and space
  const newString = namesObj.map((obj) => {
  return obj.name;}).join(', ');
  // Create variable for last comma (find it using lastIndexOf())
  //AND a variable for character to replace it with
  const lastComma = newString.lastIndexOf(','), otherchar = ' &';
  //Use array.slice(start, end). Make first slice before, insert new char, add slice after
  const finalString = newString.slice(0, lastComma) + otherchar + newString.slice(lastComma+1);
  //return result
  return finalString;
  
      }
  };

module.exports = joinNames;