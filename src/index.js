
exports.min = function min (array) {
  if (array == undefined) {
     return '0';
  } else if ( array == '' ) {
     return '0'; 
    } else { 
    return Math.min.apply(null, array);
  }
}

exports.max = function max (array) {
  if (array == undefined) {
     return '0';
    } else if ( array == '' ) {
      return '0'; 
   } else { 
     return Math.max.apply(null, array);
   }
}

exports.avg = function avg (array) {
  if (array == undefined) {
    return '0';
   } else if ( array == '' ) {
     return '0'; 
  } else { 
     return array.reduce((a, v) => (a + v)) / array.length;
   }
}