const originalObject = {
  "match-1-dropdown1": "Bar",
  "match-1-dropdown2": "Foo",
  "match-2-dropdown1": "Sara",
  "match-2-dropdown2": "Buz",
  "match-3-dropdown1": "Ben",
  "match-3-dropdown2": "John",
  "match-4-dropdown1": "Bar",
  "match-4-dropdown2": "Doe",
};

export const separateObjects = (originalObject) => {
  const separatedObjects = {};

  // Iterate through the original object
  for (const key in originalObject) {
    // Extract match number and dropdown number from the key
    const [, matchNumber, dropdownNumber] = key.match(
      /match-(\d+)-dropdown(\d+)/
    );

    // Create a new object for each match
    if (!separatedObjects[`match-${matchNumber}`]) {
      separatedObjects[`match-${matchNumber}`] = {};
    }

    // Assign the dropdown value to the corresponding match and dropdown
    separatedObjects[`match-${matchNumber}`][`dropdown${dropdownNumber}`] =
      originalObject[key];
  }

  return separatedObjects;
};

// const result = separateObjects(originalObject);

// console.log(result);
