
export const getRandomWord = (wordList) => {
  return wordList[Math.floor(Math.random() * wordList.length)];
};