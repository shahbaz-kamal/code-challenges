const s = "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry";
const processData = (input) => {
  const lines = input.split("\n");

  // Read the first line to get the number of entries
  const totalEntries = parseInt(lines[0]);

  // Create a phone book (dictionary)
  const phoneBook = new Map();

  // Process the phone book entries
  for (let i = 1; i <= totalEntries; i++) {
    const [name, number] = lines[i].split(" ");
    phoneBook.set(name, number);
  }
  console.log(phoneBook);
  // Process queries
  for (let i = totalEntries + 1; i < lines.length; i++) {
    const query = lines[i].trim();
    console.log("query=> ", query);
    if (query) {
      if (phoneBook.has(query)) {
        console.log(`${query}=${phoneBook.get(query)}`);
      } else {
        console.log("Not found");
      }
    }
  }
};

processData(s);
