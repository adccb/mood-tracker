// @flow

const range = (n: number): Array<number> => {
  const arr = []
  for(var i = 0; i < n; i++) { arr.push(i) }
  return arr
}

module.exports = { range }

