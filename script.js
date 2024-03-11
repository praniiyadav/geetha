const overplay = document.querySelector(".overplay")
const avatarBtn = document.querySelector('.avatar img');

avatarBtn.onclick = function() {
    overplay.style.display = "flex"
}

overplay.onClick = () => {

}

window.onclick = function(e){
    if (e.target.classList.contains('overplay')) {
        overplay.style.display = 'none'
    }
}