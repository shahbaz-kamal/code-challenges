const s = "2\nHacker\nRank";
const processData = (input) => {
  const lines = input.split("\n");
  const numberofTestCases = parseInt(lines[0]);

  const [firstElement, ...remainingElements] = lines;
  for (let i = 1; i <= numberofTestCases; i++) {
    const originalInput = remainingElements[i - 1];
    let evenIndexed = "";
    let oddIndexed = "";

    for (let j = 0; j < originalInput.length; j++) {
      if (j % 2 === 0) {
        evenIndexed = evenIndexed + originalInput[j];
      }
      if (j % 2 === 1) {
        oddIndexed = oddIndexed + originalInput[j];
      }
    }
    console.log(evenIndexed + " " + oddIndexed);
  }


};

processData(s);
