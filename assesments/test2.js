function StringChallenge(sen) {
  const removedPunctuation = sen.replace(/[^a-zA-Z0-9 ]/g, "");
  const wordCount = removedPunctuation.split(" ");
  console.log(wordCount);
  let longestWord = "";
  for (let word of wordCount) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log(longestWord);
  const challengeToken = "ohq76ef1ba9";
  let finalOutput = "";
  let maxLength = Math.max(longestWord.length, challengeToken.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < longestWord.length) {
      finalOutput += longestWord[i];
    }
    if (i < challengeToken.length) {
      finalOutput += challengeToken[i];
    }
  }
  // code goes here
  console.log(finalOutput)
  return finalOutput;
}

StringChallenge("fun&!! time");
