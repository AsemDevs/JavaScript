var values = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = maxValue(values);
document.getElementById("demo1").innerHTML = minValue(values);


function maxValue(arr) {
  var len = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

function minValue(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }