"use strict";

const removeDuplicateArrayObject = function(arr = [], comp = null) {
     if (comp) {
          const unique1 = arr
          .map(e => e[comp])
     
          .map((e, i, final) => final.indexOf(e) === i && i)
     
          .filter(e => arr[e]).map(e => arr[e]);
     
          return unique1;
     } else {
          const jsonObject = arr.map(JSON.stringify); 
          const uniqueSet = new Set(jsonObject); 

          const unique2 = Array.from(uniqueSet).map(JSON.parse); 

          return unique2
     }
}

module.exports = removeDuplicateArrayObject
