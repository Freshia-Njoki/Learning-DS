//Dijkstra's Pseudocode
//this function should accept a starting and ending vertex
//create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
//after setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
//create another object called previous and set each key to be every vertex in the adjList with a value of null
//start looping as long as there is anything in the priority queue
    //dequeue a vertex from the priority queue
    //if that vertex is the same as the ending vertex - we are done!
    //otherwise loop through each value in the adjList at that vertex
        //calculate the distance to that vertex from the starting vertex
        //if the distance is less than what is currently stored in our distances object
            //update the distances object with new lower distance
            //update the previous object to contain that vertex
            //enqueue the vertex with the total distances from the start node

class PriorityQueue { //naive priority queue
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){ //values have priority number
        this.values.push({val,priority}); 
        this.sort(); //sort them according to priority
    };
    dequeue(){ //removes the current smallest priority -since they're already sorted
        return this.values.shift(); //removes from the beginning - lowest priority
    };
    sort() {
        this.values.sort((a,b)  => a.priority - b.priority); //sorting method - called during enqueue
    }
}
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
    Dijkstra(start, finish){
        const nodes = new PriorityQueue(); //create a priorityQueue
        const distances = {};
        const previous = {};
        let path = []; //to return at end
        let smallest; //declaring a variable for dequeueing(done after sorting hence getting the smallest value)

        //build up initial state
        for(let vertex in this.adjacencyList){ //every vertex in the adjList set the distance val
            if(vertex === start){
                distances[vertex] = 0; //for the start node distance ie. A to A = 0
                nodes.enqueue(vertex, 0); //add the vertex and its priority
            } else {
                distances[vertex] = Infinity;//the rest A to that specified node = Infinity
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null; //instantiate prev of every node to be null at first
        }
        // console.log(distances); //confirms the distance object

        //as long as there is something to visit
        while(nodes.values.length){ //node is the priorityQueue, inside it we're storing the values as arr
            smallest = nodes.dequeue().val;//we're removing after sorting hence we get a nodeVal(priority) which is the smallest
            // console.log(smallest); //returns nodes with the smallest value in ascending order
            if(smallest === finish){ //if we've exalted the shorted path, we're done
                // console.log(distances);
                // console.log(previous);// A: null, B: 'A', C: 'A', D: 'C', E: 'F', F: 'D'
                //build up path(shortest path from A-E) to return at end - 
                while(previous[smallest]){ //building from E backwards to A in - A: null, B: 'A', C: 'A', D: 'C', E: 'F', F: 'D'
                    path.push(smallest);
                    smallest = previous[smallest]; //updating the smallest as we go
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){ //loop thr each vertexs' neighbor
                for(let neighbor in this.adjacencyList[smallest]){
                    //finding neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // console.log(neighbor);
                    // console.log(this.adjacencyList);
                    // console.log(nextNode);

                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight; //new distance sum: eg A->B,4; B->E, 3 hence A->E = 7(4+3)
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]){ //finds the shortest current distance to nextNode and the previous stored distance following another path
                        distances[nextNeighbor] = candidate; //updating new smallest distance to neighbor
                        previous[nextNeighbor] = smallest; //updating previous - how we got to neighbor
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                    
                }
            }
        }
        // console.log(path); //[ 'E', 'F', 'D', 'C' ]
        // return path.concat(smallest).reverse(); //adding 'A' and reverse the order => ["A", "C", "D", "F", "E"]
        console.log(path.concat(smallest).reverse());  
    }
}
var graph = new weightedGraph(); //The graph matches the graph in shortest path.JPG
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
// console.log(graph.adjacencyList);

let q = new PriorityQueue ();
q.enqueue("B", 3);
q.enqueue("C", 5);
q.enqueue("D", 2);
q.enqueue("Q", 20);
// console.log(q.values);

graph.Dijkstra("A", "D"); //Passing start and end, result ["A", "C", "D", "F", "E"]