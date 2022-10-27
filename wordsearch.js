const wordSearch = (letters, word) => { 
  if (letters.length > 0) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of verticalJoin) {
      if (l.includes(word)) return true;
    }
  }
    return false;
    
};  

const transpose = (letters) => {
  
  let vertical = [];
  
  for (let i = 0; i < letters[0].length; i++){
    vertical.push([])
    for (let j = 0; j < letters.length; j++) {
      vertical[i][j] = letters[j][i];
    }
  }
  return vertical;
}



module.exports = wordSearch

// module.exports = wordSearch;

const result = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'CAK');

console.log(result);