
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined){
      return [];
  }
  return matrix.map((item, id)=>{
      if (id % 2 === 0){
          return item
      } else {
          return item.reverse();
      }
  }).flat();
}
