function greetSeam(){
    //inside the body of the function
    console.log("hello sean");

}
//invoking (calling/executing) the function greetSomeone
//greetSean();


function greetSomeone(person_name){
    //person_name is parameter. parameter is placeholder variable for any data that the function needs to run
    console.log("hello" + person_name + "!");

}


//greetSomeone("colin"); //the info we feed function when we call function --> this called ARGUMENT
//greetSomeone("lazaro");
//greetSomeone("robert");
//greetSomeone("sean");

var x=5;
function setX(newValue){
    x=newValue
}

console.log(x);
setX(15);
console.log(x);


//the value of a function call is whatever that function returns


function addNums
