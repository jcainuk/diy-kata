const joinNames = namesObj => {
    if(namesObj.length === 1){return namesObj.map(function (obj){
  return obj.name;}) 
  }
    
  else {
  const newString = namesObj.map(function (obj){
  return obj.name;}).join(', ');
  
  const lastComma = newString.lastIndexOf(','), otherchar = ' &';
  
  const finalString = newString.slice(0, lastComma) + otherchar + newString.slice(lastComma+1);
  
  return finalString;
  
      }
  };

module.exports = joinNames;