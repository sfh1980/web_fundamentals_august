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

function playVideo(videoElement){
    videoElement.play();
}

function pauseVideo(videoElement){
    videoElement.pause();
}


function switchImg(imgElement){
    console.log(imgElement.src);
    if(imgElement.src === "http://127.0.0.1:5500/Day6-puppyGram/puppyGram/resources/puppy.jpeg"){
        imgElement.src = "./resources/anothaPuppy.jpeg"
    }else{
        imgElement.src = "./resources/puppy.jpeg"
    }
}


function increaseLikes(elementID){
    let spanElement = document.querySelector("#"+ elementID);
    let currentCount = spanElement.innerText;
    currentCount++;
    spanElement.innerText = currentCount;
}

function removeCookieBox(id){
    let elementToRemove = document.querySelector("#"+id);
    elementToRemove.remove();
}


function searchPuppy(){
    // console.log("searching for a puppy named clifford!");
    let element = document.querySelector("#name-search");
    alert("you searched for " + element.value);
}


function chooseLocation(element){
    // console.log("choosing a location!", element.value);
    // alert("You are searching for a pet in this location: " + element.value)

    alert('You are searching for a dog in ${element.value}. Come by anytime!')
}