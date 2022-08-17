// // var favFoods = ["calamari" , "pho" , "pizza" , "sushi" , "medium-rare steak" , "tacos" , "korean bbq"];

// for(var i = 0; i< favFoods.length; i++){
//     if(favFoods[i] == "sushi"){
//         console.log("inflation doe for" + favFoods[i])
//     }else if (favFoods[i] =="chipotle"){
//         console.log("great deal for that" + favFoods[if])
//     }
//     else{
//         console.log(favFoods[i]);
//     }
// }
// // 


var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
   for(var i=0; i<numbers.length; i++){
    if(numbers[i] > 0){
        countPositives +=1;
    }
   }
// your code here!
    
console.log("there are " + countPositives + " positive values");
