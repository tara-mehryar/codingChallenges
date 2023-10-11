// Write a function that takes in a number. It should return a "tower" of * . The tower will be an array of strings.
// The number passed in tells you how many floors the tower should have. 
// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on. 
// Each block is represented by a *.

function towerBuilder(nFloors) {
    const tower = [];
  
    for (let i = 0; i < nFloors; i++) {
      const spaces = ' '.repeat(nFloors - i - 1);
      const blocks = '*'.repeat(2 * i + 1);
      const floor = spaces + blocks + spaces;
      tower.push(floor);
    }
  
    return tower;
  }
  
  // Example usage:
  const numberOfFloors = 3;
  const tower = towerBuilder(numberOfFloors);
  console.log(tower);
  
