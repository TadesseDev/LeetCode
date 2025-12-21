/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    /**
    * if node point ro target, and node has not be visited, it becomes a new target 
    * if node poits to target and has been visited before, ignore it 
    * if target points to the node, and node is never visited, 
        reverse it and mark it as a target.
        else continue normal flow
    * at the end of each loop start the new target 
    return the swith count
     */

const graph = Array.from({ length: n }, () => []);
  for (const [a, b] of connections) {
    graph[a].push([b, 1]);
    graph[b].push([a, 0]);
  }

  const visited = new Array(n).fill(false);
  let result = 0;

  const dfs = (node) => {
    visited[node] = true;
    for (const [next, cost] of graph[node]) {
      if (!visited[next]) {
        result += cost;
        dfs(next);
      }
    }
  };

  dfs(0);
  return result;
};