"use strict";
exports.__esModule = true;
var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = new Map();
        this.visitedCount = 0;
    }
    Graph.prototype.addVertex = function (data) {
        if (data && !this.adjacencyList.get(data)) {
            this.adjacencyList.set(data, []);
        }
    };
    Graph.prototype.addEdge = function (vertex, edge) {
        var _a, _b;
        var vertexForEdge = this.adjacencyList.get(edge);
        (_a = this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.push(edge);
        if (!vertexForEdge) {
            this.addVertex(edge);
        }
        // if undirected, also connect the new node to the previous node
        (_b = this.adjacencyList.get(edge)) === null || _b === void 0 ? void 0 : _b.push(vertex);
    };
    Graph.prototype.bfs = function (startingVertex, target) {
        var visited = {};
        var queue = [];
        visited[startingVertex] = true;
        this.visitedCount = 1;
        queue.push(startingVertex);
        while (queue.length > 0) {
            var dequeued = queue.shift();
            var neighbors = this.adjacencyList.get(dequeued) || [];
            for (var i_1 = 0; i_1 < (neighbors === null || neighbors === void 0 ? void 0 : neighbors.length); i_1++) {
                var neighbor = neighbors.at(i_1);
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
    };
    Graph.prototype.dfs = function (startingVertex, target) {
        var visited = {};
        this.visitedCount = 0;
        var dfs = function (vertex) {
            var neighbors = this.adjacencyList.get(vertex) || [];
            visited[vertex] = true;
            this.visitedCount++;
            if (vertex === target)
                return true;
            for (var i_2 = 0; i_2 < (neighbors === null || neighbors === void 0 ? void 0 : neighbors.length); i_2++) {
                var neighbor = neighbors[i_2];
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            }
            return false;
        }.bind(this);
        return dfs(startingVertex);
    };
    return Graph;
}());
exports["default"] = Graph;
var g = new Graph();
var vertices = ["A", "B", "C", "D", "E", "F"];
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");
// console.warn(
//   "\n==============\nExecuting Bread-First Search\n==============\n"
// );
// console.info(
//   "Is A connected to B?",
//   g.bfs("B", "A"),
//   "in " + g.visitedCount + " visits"
// );
// console.info(
//   "Is C connected to A?",
//   g.bfs("A", "C"),
//   " with " + g.visitedCount + " visits"
// );
// console.info(
//   "Is Z connected to A?",
//   g.bfs("A", "Z"),
//   "in " + g.visitedCount + " visits"
// );
// console.info(
//   "Is A connected to F?",
//   g.bfs("A", "F"),
//   "in " + g.visitedCount + " visits"
// );
// console.info(
//   "Is G connected to F?",
//   g.bfs("G", "F"),
//   "in " + g.visitedCount + " visits"
// );
// console.warn(
//   "\n==============\nExecuting Depth-First Search\n==============\n"
// );
// console.info(
//   "Is A connected to C?",
//   g.dfs("A", "C"),
//   "in " + g.visitedCount + " visits"
// );
// console.info(
//   "Is G connected to F?",
//   g.dfs("G", "F"),
//   "in " + g.visitedCount + " visits"
// );
// console.info(
//   "Is Z connected to A?",
//   g.dfs("Z", "A"),
//   "in " + g.visitedCount + " visits"
// );
// console.info(
//   "Is B connected to C?",
//   g.dfs("B", "C"),
//   "in " + g.visitedCount + " visits"
// );
console.info("Is A connected to F?", g.dfs("A", "F"), "in " + g.visitedCount + " visits");
