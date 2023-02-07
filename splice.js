const friends = [12, 45, 32, 22, 44, 62, 29];

// removes element from an array
// and if neceessary, insert new elements in their place,
// returning the deleted elements.
// will change the original array.

const partial = friends.splice(2, 5, 20, 60, 45, 55);
console.log(partial);
console.log(friends);