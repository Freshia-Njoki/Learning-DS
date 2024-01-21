//Dijkstra's Pseudocode
//this function should accept a starting and ending vertex
//create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
//after setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
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

class PriorityQueue {
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

let q = new PriorityQueue ();
q.enqueue("B", 3);
q.enqueue("C", 5);
q.enqueue("D", 2);
q.enqueue("Q", 20);

console.log(q.values);