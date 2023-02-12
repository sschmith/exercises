export default class Graph {
  adjacencyList: Map<string, Array<string>>;
  visitedCount: number;

  constructor() {
    this.adjacencyList = new Map<string, Array<string>>();
    this.visitedCount = 0;
  }

  addVertex(data: string | undefined) {
    if (data && !this.adjacencyList.get(data)) {
      this.adjacencyList.set(data, []);
    }
  }

  addEdge(vertex: string, edge: string) {
    const vertexForEdge: Array<string> | undefined =
      this.adjacencyList.get(edge);

    this.adjacencyList.get(vertex)?.push(edge);

    if (!vertexForEdge) {
      this.addVertex(edge);
    }

    // if undirected, also connect the new node to the previous node
    this.adjacencyList.get(edge)?.push(vertex);
  }

  bfs(startingVertex: string, target: string): boolean {
    const visited: Record<string, boolean> = {};
    const queue: Array<string> = [];

    visited[startingVertex] = true;
    this.visitedCount = 1;

    queue.push(startingVertex);

    while (queue.length > 0) {
      const dequeued: string = queue.shift() as string;
      let neighbors = this.adjacencyList.get(dequeued) || [];

      for (let i = 0; i < neighbors?.length; i++) {
        const neighbor = neighbors.at(i) as string;
        if (!visited[neighbor]) {
          // mark this node as visited
          visited[neighbor] = true;
          this.visitedCount++;
          if (neighbor === target) {
            return true;
          }
          queue.push(neighbor);
        }
      }
    }
    return false;
  }

  dfs(startingVertex: string, target: string): boolean {
    const visited: Record<string, boolean> = {};
    let found = false;

    this.visitedCount = 0;

    const _dfs = function (this: Graph, vertex: string): boolean {
      const neighbors = this.adjacencyList.get(vertex) || [];
      visited[vertex] = true;
      this.visitedCount++;

      if (vertex === target) return true;

      for (let i = 0; i < neighbors?.length; i++) {
        const neighbor = neighbors[i] as string;
        if (!visited[neighbor]) {
          found = _dfs(neighbor);
        }
        if (found) return found;
      }
      return found;
    }.bind(this);

    return _dfs(startingVertex);
  }
}

const graph = new Graph();
const vertices: Array<string> = ["A", "B", "C", "D", "E", "F"];

vertices.forEach((vertex) => {
  graph.addVertex(vertex);
});

graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("A", "E");
graph.addEdge("B", "C");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("E", "C");
graph.addEdge("C", "F");

console.log(
  "\n============================\nExecuting Bread-First Search\n============================\n"
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
