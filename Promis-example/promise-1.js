








let asyncfunc = new Promise(function(resolve, reject) {
  let x = 1;
  
  setTimeout(function(){
    if(x === 2 ){
        resolve("I'm fullfiled");
      }else{
        reject("I'm rejected");  
      }
  },500);
});

asyncfunc
  .then(success=>{
     console.log("success" ,success);
  })
  .catch(error=>{
     console.log("error", error);
  });