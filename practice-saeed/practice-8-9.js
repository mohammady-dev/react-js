




var funcdate = function(){

  var date = new Date();
  var hutc = date.getUTCHours();
  var newdate = {
    year : date.getFullYear(),
    month : date.getMonth(),
    weekday : date.getDay(),
    day : date.getDate(),
    hour : date.getHours(),
    minute : date.getMinutes(),
    second : date.getSeconds(),
    millisecond : date.getMilliseconds()
  };





  console.log(newdate);

//   console.log(hutc-h);

} ;

funcdate();