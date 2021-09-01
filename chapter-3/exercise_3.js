



// function countBs(characters){
  
//   var number = 0;
//   for (var i=0; i<characters.length; i++){
//     if(characters[i] == "b"){
//       number += 1;
//     }
//   }
//   console.log(number);
// };


// countBs("bbc");



function countChar(characters , ch){
  
  var number = 0;
  for (var i=0; i<characters.length; i++){
    if(characters[i] == ch){
      number += 1;
    }
  }
  console.log(number);
};


countChar("bccbc" , "c");