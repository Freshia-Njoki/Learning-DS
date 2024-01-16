//Is a collection of connected nodes. Ie.Vertices and edges  |v|- number of vertices |E|-number of edges
//they are useful in modeling social networks eg. recommendation algorithm in netflix movies, advertisements
//Graph uses: social n/w, google maps, routing algorithms(webpages),visual hierarchy, file system org
//types of graphs: weighted, unweighted, directed, undirected
//Graphs can be represented as: Adjacency Matrix, Adjacency List - diff in DSImg

//Undirected graph - no direction or can be 2-way
//Adding a vertex Pseudocode
//write a method called addVertex, which accepts a name of a vertex
//it should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

//Adding an edge Pseudocode
//This function should accept two vertices: vertex1 and vertex2 - doesn't handle errors/invalid vertices
//the function should find in the adjacency list the key of vertex1 and push vertex2 to the array
//This function should find in the adjacency list the key of vertex2 and push vertex1 to the array

//Removing an edge
//This function should accept two vertices: vertex1 and vertex2 - doesn't handle errors/invalid vertices
//the function should reassign the key of vertex1 to be an array that does not contain vertex2
//the function should reassign the key of vertex2 to be an array that does not contain vertex1


//Removing a vertex - we also need to remove all edges connected to it, inOrder to eliminate broken ends
//The function should accept a vertex to remove
//the function should loop as long as there are any other vertices in the adjList for that vertex
//inside the loop, call removeEdge function with the vertex being removed and any values in the adjList for that vertex
//delete the key in the adjList for  that vertex

class Graph{
    constructor(){
        this.adjacencyList = {}; //creating the adjList as obj
    }
    addVertex (vertex){ //{ ["key": [val] ], ["key": [val]] }
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];//adding the vertex as a key of the obj in empty arr
    }
    addEdge(v1, v2){ //undirected-goes both ways
        this.adjacencyList[v1].push(v2); //vertex2 becomes the value of the vertex1 key
        this.adjacencyList[v2].push(v1); 
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v !== vertex2); //takes the adjList of v1 and retain everything that's not == to v2
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v !== vertex1); //removing the other connection(edge)
    }
    removeVertex(vertex){ 
        //while removes Hong Kong values and edges connected to it ie.we get- Hong Kong : []
        while(this.adjacencyList[vertex].length){ //loop over the entire values of the vertex 'Hong Kong' to be removed eg. Hong Kong : ["Tokyo", "Dallas", "Aspen"]
            const adjacencyVertex = this.adjacencyList[vertex].pop(); //pop the values one by one ie. Aspen
            this.removeEdge(vertex, adjacencyVertex); //destroy Both connections b2n the pop item(Aspen) and the vertex(Hong Kong) being removed
        }
        delete this.adjacencyList[vertex]; //deletes the Hong Kong vertex entirely
    }
}

let g = new Graph()
g.addVertex("Tokyo");
g.addVertex("San Francisco");
g.addVertex("Dallas");
g.addVertex("Aspen");
g.addVertex("Hong Kong");
g.adjacencyList["Tokyo"].push("Japan");
g.addEdge("Dallas", "Tokyo"); //Dallas -> tokyo && tokyo <- Dallas:each is stored in the others array 'as a value'
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("San Francisco", "Hong Kong");
g.addEdge("San Francisco", "Aspen");
g.removeEdge("Dallas", "Aspen");//removing connection b2n Dallas and Aspen
// g.removeEdge("Dallas", "Tokyo ");
g.removeVertex("Hong Kong");
g.removeVertex("Aspen");
// console.log(g);
console.log(g.adjacencyList);