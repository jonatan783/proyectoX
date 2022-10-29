const sumaDeArray = (arr1, arr2) => {
  var r = [];
  for (i = 0; i < arr1.length; i++) {
    r[i] = arr1[i] + arr2[i];
  }
  return r
};

module.exports={sumaDeArray}