//Is a collection of connected nodes. Ie.Vertices and edges  |v|- number of vertices |E|-number of edges
//they are useful in modeling social networks eg. recommendation algorithm in netflix movies, advertisements
//Graph uses: social n/w, google maps, routing algorithms(webpages),visual hierarchy, file system org
//types of graphs: weighted, unweighted, directed, undirected
//Graphs can be represented as: Adjacency Matrix, Adjacency List - diff in DSImg

const { current } = require("@reduxjs/toolkit");

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

//DFS Traversal - Recursively
//The function should accept a starting node
//create a list to store the end result, to be returned at the very end
//create an object to store visited vertices
//create a helper function which accepts a vertex
    //the helper function should return early if the vertex is empty
    //the helper function should place the vertex it accepts into the visited object and push that vertex into the result array
    //loop over all of the values in the adjacencyList for that vertex
    //if any of those values have not been visited, recursively invoke the helper function with that vertex
//invoke the helper function with the starting vertex
//return the result array

//DFS Traversal - Iteratively
//the function should accept a starting node
//create a stack to help keep track of vertices(use a list/array)
//create a list to store the end result, to be returned at the very end
//create an object to store visited vertices
//add the starting vertex to the stack, and mark it visited
//while the stack has something in it:
    //pop the next vertex from the stack
    //if that vertex hasn't been visited yet:
        //mark it as visited
        //add it to te result list
        //push all of its neighbors into the stack
    //return the result array

//BFS
//This function accept a starting vertex
//create a queue (you can use an array) and place the starting vertex in it
//create an array to store the nodes visited
//create an object to store the nodes visited
//mark the starting vertex as visited
//loop as long as there is anything in the queue
//remove the first vertex from the queue and push it into the array that nodes visited
//loop over each vertex in the adjacency list for the vertex, mark is as visited and enqueue that vertex
//once you have finished looping, return the array of visited nodes

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
    depthFirstRecursive(start){ //accepts a starting node
        const result = []; //collect result
        const visited = {};
        const adjacencyList = this.adjacencyList; //preserves adjList meaning
        function dfs (vertex){
            if(!vertex) return null; //we've hit the end of the line
            visited[vertex] = true; //marking vertex as visited
            result.push(vertex); //push to result array
            adjacencyList[vertex].forEach(neighbor => { //loop thr each item stored in each adjList vertex
                if(!visited[neighbor]){ //if its neighbor is not visited
                    return dfs(neighbor); //recursively call dfs on that neighbor-for it to be visited
                }
            });
        } dfs(start);
        return result; //[ 'A', 'B', 'D', 'E', 'C', 'F' ]
    }
    depthFirstIteratively(start){ //A
        const stack = [start]; //Intializing stack with the start node
        const result = [];
        const visited ={};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            console.log(stack); //to see what I'm working with
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => { //loop thr its neighbor B & C in [A : ["B", "C"]]
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    breathFirst(start){ //FIFO
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true; //to prevent looping back - in search of adjList neighbors
         
        while (queue.length){
            currentVertex = queue.shift();//removing from the start
            result.push(currentVertex); //visit and store it to resultArr

            // this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor => { right to left: A,C,B,E,D,F
            this.adjacencyList[currentVertex].forEach(neighbor => { //check its neighbors - left to right A,B,C,D,E,F
                if(!visited[neighbor]){ //if not visited,...
                    visited[neighbor] = true; //visit and mark it as visited...
                    queue.push(neighbor) //push into the queue
                }
            })
        }
        return result;
    }
}

let g = new Graph()
// g.addVertex("Tokyo");
// g.addVertex("San Francisco");
// g.addVertex("Dallas");
// g.addVertex("Aspen");
// g.addVertex("Hong Kong");
// g.adjacencyList["Tokyo"].push("Japan");
// g.addEdge("Dallas", "Tokyo"); //Dallas -> tokyo && tokyo <- Dallas:each is stored in the others array 'as a value'
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("San Francisco", "Hong Kong");
// g.addEdge("San Francisco", "Aspen");
// g.removeEdge("Dallas", "Aspen");//removing connection b2n Dallas and Aspen
// g.removeEdge("Dallas", "Tokyo ");
// g.removeVertex("Hong Kong");
// g.removeVertex("Aspen");
// console.log(g);
// console.log(g.adjacencyList);


//DFS graph traversal setup
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

//           A
//         /   \
//        B     C
//        \     |
//         D---E
//          \ /
//           F

// console.log(g.depthFirstRecursive("A")); //anticlockwise
console.log(g.depthFirstIteratively("A")); //clockwise - best according to me
console.log(g.breathFirst("A"));