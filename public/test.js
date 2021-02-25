var obj = {value: '0'}
console.log(obj)
setTimeout(()=> {
  obj.value = '1'
}, 2000)
setTimeout(()=> {
  obj.value = '2'
}, 4000)