







let invokeAfterDelay = new Promise(function(resolve, reject) {
  let x = 2;
  
  setTimeout(function(){
        resolve(Math.random());
  },500);
});

invokeAfterDelay
  .then(success=>{
     console.log(success);
  })