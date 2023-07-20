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

  connect(vertex: string, edge: string) {
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
      const dequeued: string | undefined = queue.shift();
      let neighbors = dequeued ? this.adjacencyList.get(dequeued) : [];

      if (neighbors) {
        for (let i = 0; i < neighbors.length; i++) {
          const neighbor = neighbors.at(i);
          if (neighbor && !visited[neighbor]) {
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
    }
    return false;
  }

  dfs(startingVertex: string, target: string): boolean {
    const visited: Record<string, boolean> = {};
    let found = false;

    this.visitedCount = 0;

    const _dfs = function (this: Graph, vertex: string): boolean {
      const neighbors = vertex ? this.adjacencyList.get(vertex) : [];
      visited[vertex] = true;
      this.visitedCount++;

      if (vertex === target) return true;

      if (neighbors) {
        for (let i = 0; i < neighbors.length; i++) {
          const neighbor = neighbors[i];
          if (neighbor && !visited[neighbor]) {
            found = _dfs(neighbor);
          }
          if (found) return found;
        }
      }
      return found;
    }.bind(this);

    return _dfs(startingVertex);
  }
}
