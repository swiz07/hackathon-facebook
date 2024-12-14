const likeButton= document.getElementsByClassName("like-btn");
function bgChange(x){
    x.style.backgroundColor="pink";
}

function normalbgColor(x){
    x.style.backgroundColor="#20E3D9";
}

function toggleLike(likeButton){
    if(likeButton.innerHTML==="Like"){
        likeButton.innerHTML="Unlike";
        likeButton.style.backgroundColor = "rgba(238, 105, 127, 0.84)";
        likeButton.style.borderColor = "yellow";
    }
    else{
        likeButton.innerHTML="Like";
        likeButton.style.backgroundColor = "red";
        likeButton.style.borderColor = "yellow";
    }
}