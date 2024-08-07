
// You should implement your task here.

 module.exports = function towelSort (m = []) {
  let res = []
  for (let i = 0; i < m.length; i++) {
    if (i%2 === 0) {
      res = res.concat(m[i])
    } else {
      res = res.concat(m[i].reverse())
    }
  }
  return res;
}