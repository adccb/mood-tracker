// @flow

export const range = (n: number): Array<number> => {
  const arr = []
  for(var i = 0; i < n; i++) { arr.push(i) }
  return arr
}

export const cloneArray = (arr: Array<any>): Array<any> => {
  const newArr = []
  arr.forEach(i => newArr.push(i))
  return newArr
}

