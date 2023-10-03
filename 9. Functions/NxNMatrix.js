function nxNMatrix(n){
    if (n <= 0) {
        console.log("n should be a positive integer");
        return;
      }
    
      const matrix = Array.from({ length: n }, () => Array(n).fill(n));
    
      for (let i = 0; i < n; i++) {
        console.log(matrix[i].join(' '));
      }
}
    

nxNMatrix(7)