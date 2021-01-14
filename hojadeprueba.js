// let array = [["juan",1,2,3],[0,"daniel",2,3],["cristian",1,2,3],[0,"pipe",2,3],["juan",1,2,3],[0,"daniel",2,3],["cristian",1,2,3],[0,"pipe",2,3],["cristian",1,2,3],[0,"pipe",2,3]];

// for (let i = 0; i < 4; i++) {
//       console.log(array[i])
//       for (let x = 0; x <array.length; x++) {
//             console.log(array[x][i]);
//             console.log(array[x][i]);
//             console.log(array[x][i]);
//             console.log(array[x][i]);
//       }
// }
// let  array = [1,2,3,4];

// for (let i = 0; i < array.length; i++) {
//       if(i === 0){
//             console.log(array[2]);
//       }
//       if(i === 1){
//             console.log(array[3]);
//       }
//       if(i === 2){
//             console.log(array[1++]);
//       }
//       if(i === 3){
//             console.log(array[0++]);
//       }
// }

// function repetido (aleat) {
//              var repe=false;
//              for (i=0; i<usados.length; i++) {
//                  if (aleat==usados[i]){
//                      repe=true;
//                  }
             
//              return repe;
//          }
//          }
         
//          function aleatorio(a,b) {
           
//            var aleat= Math.round(Math.random()*(b-a)+parseInt(a));
          
//            return aleat;
//          }
// function random (min,max ){
//      min = Math.ceil(min);
//      max = Math.floor(max);
//      return Math.floor(Math.random() * (1 + max - min)+ min)
// }

// for (let i = 0; i < array.length; i++) {
//       console.log(random(0,3))
// }





var array = [0,1,2,3];
array1 = array.sort(function() {return Math.random() - 0.5});
console.log(array); // imprime por ejemplo: 7,9,1,5,2,3,6,4,8
