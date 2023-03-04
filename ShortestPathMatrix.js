function shortestSafePath(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const visited = Array.from({length: m}, () => Array(n).fill(false));
    const queue = [];
    // enqueue all cells in the first column with value 1
    for (let i = 0; i < m; i++) {
      if (matrix[i][0] === 1) {
        visited[i][0] = true;
        queue.push([i, 0]);
      }
    }
    // explore adjacent cells of the dequeued cell
    function exploreCell(cell, dist) {
      const [i, j] = cell;
      if (j === n - 1) { // reached last column
        return dist;
      }
      for (const [dx, dy] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
        const ni = i + dx;
        const nj = j + dy;
        if (ni < 0 || ni >= m || nj < 0 || nj >= n || matrix[ni][nj] === 0 || visited[ni][nj]) {
          continue; // invalid or already visited cell
        }
        visited[ni][nj] = true;
        queue.push([ni, nj]);
      }
      return -1; // path not found
    }
    // BFS
    let dist = 1;
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const cell = queue.shift();
        const res = exploreCell(cell, dist);
        if (res !== -1) {
          return res; // shortest path found
        }
      }
      dist++;
    }
    return -1; // no path found
  }
  

  // We can test the function with the following example:

  const matrix = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
  ]
  