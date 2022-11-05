function checkBrackets(value){
  const s = value.split('')
  const c = {
    '(': ')',
    '{': ')',
    '[': ']'
  }
  
  const auxArr = []
  s.forEach((item) => {
    if (!!c[item]) {
      auxArr.push(item)
    }else {
      if (c[auxArr.at(-1)] === item) {
        auxArr.pop()
      }else {
        return false
      }
    }
  })

  return !auxArr.length
}


