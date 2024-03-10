export default class MultiplicationTable {
  constructor() {}

  static printTable(tableSize: number) {
    let output: string = "";
    if (tableSize <= 0) {
      console.info("Table size cannot be negative or zero.\n");
      return;
    }
    for (let i = 1; i <= tableSize; i++) {
      for (let j = 1; j <= tableSize; j++) {
        output += i * j + "\t";
      }
      output += "\n";
    }
    console.info(output);
  }
}
