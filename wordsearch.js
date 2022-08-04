const transpose = (matrix) => {
  let result = [];
  let newArray = [];
  for (let j = 0; j < matrix.length; j++) {
    newArray = [];
    for (let i = 0; i < matrix[j].length; i++) {
      newArray.push(matrix[i][j]);
    }
    result.push(newArray);
  }
  return result;
};

const search = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const backwardsJoin = letters.map(ls => ls.reverse().join(''));
  for (let l of backwardsJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
};
  
const wordSearch = (letters, word) => {
  if (!letters || !word) return false;
  if (search(letters, word)) return true;
  let verticalLetters = transpose(letters);
  if (search(verticalLetters, word)) return true;
  return false;
};


module.exports = wordSearch;
 
