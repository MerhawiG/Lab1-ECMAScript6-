function isDual(array){

    if(!(array.length % 2 == 0)){
          return false;
    }
    
    var sum = array[0] + array[1];

    for(var i = 0; i < array.length; i = i+2){

          if(sum != array[i] + array[i+1]){
              return false;
          }
    }

    return true;
}

var a = [1,2,3,0];

var c = isDual(a);
console.log(c);