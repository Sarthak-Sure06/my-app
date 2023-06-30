
export function getMergesortanime(array){
    const animearr = [];
    if(array.length <= 1) return array;
    const newArray = array.slice();
    mergesort(array , 0 , array.length-1,newArray,animearr);
    return animearr;
}


  function mergesort(array , start , end , newArray , animearr){

    if(start === end ) return;
    const mid = Math.floor((start + end)/2);
    mergesort(newArray , start , mid , array , animearr );
    mergesort(newArray , mid + 1 , end , array , animearr );
    merge(array , start , mid , end , newArray , animearr);

  }

  function merge(array , start , mid , end , newArray , animearr){
    let k = start;
    let i = start;
    let j = mid + 1;

    while(i <= mid && j <= end){
     // These are the values that we're comparing; 
     //we push them once to change their color.
        animearr.push([i,j]);
     // These are the values that we're comparing;
     //  we push them a second time to revert their color.
      animearr.push([i, j]);

      if(newArray[i] <= newArray[j] ){
        // We overwrite the value at index k in the array 
        // with the value at index i in the newArray.
        animearr.push([k , newArray[i]]);
        array[k++] = newArray[i++];
      }
      else{
        // We overwrite the value at index k in the array 
        // with the value at index j in the newArray.
        animearr.push([k, newArray[j]]);
        array[k++] = newArray[j++];
      }
    }
    
    while(i <= mid){
     // These are the values that we're comparing; 
     //we push them once to change their color.
        animearr.push([i,i]);
     // These are the values that we're comparing;
     //  we push them a second time to revert their color.
        animearr.push([i, i]);
     // We overwrite the value at index k in the array 
     // with the value at index i in the newArray.
        animearr.push([k , newArray[i]]);
        array[k++] = newArray[i++];
    }

    while(j <= end){
        // These are the values that we're comparing; 
        //we push them once to change their color.
           animearr.push([j,j]);
        // These are the values that we're comparing;
        //  we push them a second time to revert their color.
           animearr.push([j, j]);
        // We overwrite the value at index k in the array 
        // with the value at index i in the newArray.
           animearr.push([k , newArray[j]]);
           array[k++] = newArray[j++];
       }
  }
