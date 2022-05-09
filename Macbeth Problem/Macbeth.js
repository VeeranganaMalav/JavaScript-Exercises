const fs = require('fs');

fs.readFile('./macbeth.txt', 'utf8', (err, buff) => {
  if (err) {
    console.error('Error while reading file - ', err);
    throw err;
  }

  const wordCount = {};

  const arr = buff
  .toString().replace(/\s+/g,  ' ')
  .split(' ')
  .filter(word => word.length > 4);

  arr.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  const words = Object.keys(wordCount).sort((word1, word2) => wordCount[word2] - wordCount[word1]);

  console.log('Highest Count Word - ', `${words[0]} - ${wordCount[words[0]]}`);
  console.log('Second Highest Count Word - ', `${words[1]} - ${wordCount[words[1]]}`);
});
