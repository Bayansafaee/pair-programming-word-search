const transpose = (matrix) => {
  let result = [];
  let newArray = [];
  for (let j = 0; j < matrix[0].length; j++) {
    newArray = [];
    for (let i = 0; i < matrix.length; i++) {
      newArray.push(matrix[i][j]);
    }
    result.push(newArray);
  }
  return result;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
    
  let verticalLetters = transpose(letters);

  const verticalJoin = verticalLetters.map(ls => ls.join(''));
  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }

  }

  return false;
};

module.exports = wordSearch;

 