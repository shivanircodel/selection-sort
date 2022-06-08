function bubbleSort(arr) {
    var swapped = true;
    for(var i = arr.length; i > 0; i--) {
        swapped = true;
        for(var j = 0; j < i - 1; j++) {
          if([arr[j] > arr[j+1]) {
              var temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
              swapped = false;
        }
    }
    
    if(swapped == true) {
        break;
    }
      
    }
  
    return arr;
}

bubbleSort([2,1,5,99,6,10]);
