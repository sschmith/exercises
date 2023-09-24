"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor() {
        this.adjacencyList = new Map();
        this.visitedCount = 0;
    }
    addVertex(data) {
        if (data && !this.adjacencyList.get(data)) {
            this.adjacencyList.set(data, []);
        }
    }
    connect(vertex, edge) {
        var _a, _b;
        const vertexForEdge = this.adjacencyList.get(edge);
        (_a = this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.push(edge);
        if (!vertexForEdge) {
            this.addVertex(edge);
        }
        // if undirected, also connect the new node to the previous node
        (_b = this.adjacencyList.get(edge)) === null || _b === void 0 ? void 0 : _b.push(vertex);
    }
    bfs(startingVertex, target) {
        const visited = {};
        const queue = [];
        visited[startingVertex] = true;
        this.visitedCount = 1;
        queue.push(startingVertex);
        while (queue.length > 0) {
            const dequeued = queue.shift();
            let neighbors = dequeued ? this.adjacencyList.get(dequeued) : null;
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
    dfs(startingVertex, target) {
        const visited = {};
        let found = false;
        this.visitedCount = 0;
        const _dfs = function (vertex) {
            const neighbors = vertex ? this.adjacencyList.get(vertex) : null;
            visited[vertex] = true;
            this.visitedCount++;
            if (vertex === target)
                return true;
            if (neighbors) {
                for (let i = 0; i < neighbors.length; i++) {
                    const neighbor = neighbors[i];
                    if (neighbor && !visited[neighbor]) {
                        found = _dfs(neighbor);
                    }
                    if (found)
                        return found;
                }
            }
            return found;
        }.bind(this);
        return _dfs(startingVertex);
    }
}
exports.default = Graph;
