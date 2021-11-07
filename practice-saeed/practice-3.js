



let produceRandomAfterDelay = function (number){
  
  let promises = [];
    for(let i =1  ; i<= number ; i++  ){
         promises.push(new Promise((resolve, reject)=>{
           setTimeout(resolve(Math.random()), 500);
         }))
    }
  Promise.all(promises).then(values => console.log(values.reduce((total , current) => total + current)))
}


produceRandomAfterDelay(5)