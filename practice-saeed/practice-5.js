






// 5-A

let myfunction = function(){
  
  let arr = [2 , 1 , 5 , 7 , 100 , 60 , 6];
  
  let mysort = arr.sort((a,b) => a - b).reverse();
  
  console.log(mysort);
}

myfunction();





// 5-B

let myfunction = function(){
  
  let arr = [{name: "ali", age: 20}, {name: "akbar", age: 25},{name: "majid", age: 30}];
  
  let mysort = arr.sort((a, b) => a.age - b.age);
  
  console.log(mysort);
}

myfunction();



// 5-C

let myfunction = function(){
  
  let arr = ["ab" , "abc" , "ac" , "ea" , "eg" , "f"];
  
  let mysort = arr.sort((a,b) => a.length - b.length);
  
  console.log(mysort);
}

myfunction();