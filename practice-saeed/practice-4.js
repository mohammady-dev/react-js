








let myfunction =  function( low, high) { 
  
  let arr = [];
  let f = (x) => x * 2;
  
  for(let i= low ; i<= high ; i++){
    arr.push(f(i));
  }
  
  console.log(arr);
  
  return f(low , high);
}

myfunction(2 , 5);
