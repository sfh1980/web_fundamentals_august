console.log("yo yo yo")


function petDog(){
    alert("You just pet this puppy. Thats a good boy/girl!")
}



function toggleLogin(btn){
    console.log("you clicked on the login button", btn)
    if(btn.innerText === "Login"){
        btn.innerText = "Logout";
    }else{
        btn.innerText = "Login";
    }
}

