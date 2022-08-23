function toggleLogin(btn){
    console.log("you clicked on the login button", btn)
    if(btn.innerText === "Login"){
        btn.innerText = "Logout";
    }
}

function removeButton(btn){
    btn.remove();
}