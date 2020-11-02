const joinNames = namesObj => {

    let newString = namesObj.map(function (obj){
    return obj.name;}).join(', ');
    
    let lastComma = newString.lastIndexOf(','), otherchar = ' & ';
    
    let finalString = newString.slice(0, lastComma) + otherchar + newString.slice(lastComma+1);
    
    return finalString;
    
        
    };

module.exports = joinNames;
