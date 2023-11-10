export function createCominations(colors,sizes){
    let combinations=[]
    for (const color of colors) {
        for (const size of sizes) {
          const combination = { color, size };
          combinations.push(combination);
        }
    }
    return combinations
}
  