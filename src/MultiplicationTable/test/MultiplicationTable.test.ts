import MultiplicationTable from "../src/MultiplicationTable";

console.group("Multiplication Table");
MultiplicationTable.printTable(3);
MultiplicationTable.printTable(5);
MultiplicationTable.printTable(-1);
MultiplicationTable.printTable(10);
MultiplicationTable.printTable("asdf" as unknown as number);
console.groupEnd();
