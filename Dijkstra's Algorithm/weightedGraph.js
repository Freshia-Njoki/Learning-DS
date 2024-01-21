class weightedGraph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; //checks if the vertex is already there, if not add it in the adjList
    }
    addEdge(vertex1, vertex2, weight){ //connect 2 vertices + a weight
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1,weight});
    }
}
var graph = new weightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);

console.log(graph.adjacencyList); //each arrItem has a node and weight {
    // { A: [ { node: 'B', weight: 9 }, { node: 'C', weight: 5 } ],
    //  B: [ { node: 'A', weight: 9 }, { node: 'C', weight: 7 } ]}