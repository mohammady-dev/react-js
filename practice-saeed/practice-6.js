




function average(...theArgs) {
  
  num = theArgs.length;
  sum = theArgs.reduce((a , b) => (a + b) );
  avg = sum / num;
  console.log(avg);
  
  return  avg;
}

// console.log(average(1, 2, 3, 4));
console.log(average(1, 2, 3));