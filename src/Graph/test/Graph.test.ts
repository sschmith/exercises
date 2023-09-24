import Graph from "../src/Graph";

const graph = new Graph();
const vertices: Array<string> = ["A", "B", "C", "D", "E", "F"];

vertices.forEach((vertex: string) => {
  graph.addVertex(vertex);
});

graph.connect("A", "B");
graph.connect("A", "D");
graph.connect("A", "E");
graph.connect("B", "C");
graph.connect("D", "E");
graph.connect("E", "F");
graph.connect("E", "C");
graph.connect("C", "F");

console.group("\nGraph");

console.log(
  "\n============================\nExecuting Breadth-First Search\n============================\n"
);

console.log(
  "Is A connected to B?",
  graph.bfs("B", "A"),
  "in " + graph.visitedCount + " visits"
);

console.log(
  "Is C connected to A?",
  graph.bfs("A", "C"),
  " with " + graph.visitedCount + " visits"
);

console.log(
  "Is Z connected to A?",
  graph.bfs("A", "Z"),
  "in " + graph.visitedCount + " visits"
);

console.log(
  "Is A connected to F?",
  graph.bfs("A", "F"),
  "in " + graph.visitedCount + " visits"
);

console.log(
  "Is G connected to F?",
  graph.bfs("G", "F"),
  "in " + graph.visitedCount + " visits"
);

console.log(
  "\n============================\nExecuting Depth-First Search\n============================\n"
);

console.log(
  "Is A connected to B?",
  graph.dfs("B", "A"),
  "in " + graph.visitedCount + " visits"
);

console.log(
  "Is C connected to A?",
  graph.dfs("A", "C"),
  " with " + graph.visitedCount + " visits"
);

console.log(
  "Is Z connected to A?",
  graph.dfs("A", "Z"),
  "in " + graph.visitedCount + " visits"
);

console.log(
  "Is A connected to F?",
  graph.dfs("A", "F"),
  "in " + graph.visitedCount + " visits"
);

console.log(
  "Is G connected to F?",
  graph.dfs("G", "F"),
  "in " + graph.visitedCount + " visits"
);

console.groupEnd();
