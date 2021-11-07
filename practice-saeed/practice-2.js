



let produceRandomAfterDelay = function (number){
  
  return  new Promise(function(resolve, reject) {
    let x = 1;

    
    for(let i =1  ; i<= number ; i++  ){
      setTimeout(function(){
        p = Promise.resolve().then(() => console.log(Math.random()));
        
          let x1 = 5;
            resolve(x1);
      },500);
    }
    
  }); 
}


produceRandomAfterDelay(5)
  .then(y1=>{
     console.log(y1);
  })
  .catch(error=>{
     console.log(error);
  });













// const delay = ms => new Promise(resolve => setTimeout(resolve, 2000));

// for (let i = 0, p = Promise.resolve(); i < 2; i++) {
// //     p = p.then(() => delay(Math.random() * 1000))
// //          .then(() => console.log(Math.random()))
// //     ;
  
//   p = p.then(() => console.log(Math.random()))
//     ;
  
// }