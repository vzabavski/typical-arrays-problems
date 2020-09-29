
exports.min = function min (array = 0) {
  var n = array.length;
    
  if (n === 0 || array === 0) {
    return 0;
  } else {
    for (var i = 0; i < n; i++)
     { var v = array[ i ], j = i-1;
       while (j >= 0 && array[j] > v)
        { array[j+1] = array[j]; j--; }
       array[j+1] = v;
     }                    
    return array[0];
  }
}

exports.max = function max (array = 0) {
  var n = array.length;

  if (n === 0 || array === 0) {
    return 0;
  } else {
    for (var i = 0; i < n; i++)
     { var v = array[ i ], j = i-1;
       while (j >= 0 && array[j] > v)
        { array[j+1] = array[j]; j--; }
       array[j+1] = v;
     }                    
    return array[n-1];
  }
}

exports.avg = function avg (array = 0) {
  let avg = 0;
  
  if (array.length === 0 || array === 0 ){
      return 0;
  } else {
      for (i = 0; i < array.length; i++) {
          avg += array[i];
      }
    return avg/array.length;
  }
}
