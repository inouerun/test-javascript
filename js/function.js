
function twice (num) {
  num   = num * 2;
  result = test(num);
  return result; 
}

function test (num) {
  return num + num ;
}

console.log('-------test------', test);
console.log('-------test(2)------', test(2));
console.log('-------twice------', twice);
console.log('-------twice(2)------', twice(2));