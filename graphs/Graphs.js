/****************Adjacency List Repreasentation Of Grpah*/
function Graph(noOfV) {
  this.noOfV = noOfV;
  this.AdjRepresentation = new Map();
}

Graph.prototype.addVertex = function(v) {
  this.AdjRepresentation.set(v, []);
};

Graph.prototype.addEdges = function(v, w) {
  this.AdjRepresentation.get(v).push(w);
  //as it is going to be a undirected graph
  this.AdjRepresentation.get(w).push(v);
};

Graph.prototype.printGraph = function() {
  var get_keys = this.AdjList.keys();

  // iterate over the vertices
  for (var i of get_keys) {
    // great the corresponding adjacency list
    // for the vertex
    var get_values = this.AdjList.get(i);
    var conc = "";

    // iterate over the adjacency list
    // concatenate the values into a string
    for (var j of get_values) conc += j + " ";

    // print the vertex and its adjacency list
    console.log(i + " -> " + conc);
  }
};
