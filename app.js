let user_input = document.querySelector("#userSearchEngine");


let enterBtnClickHint = setTimeout(popup, 3000);

function popup() {
    let popupshow = document.querySelector(".popup-window");
    popupshow.style.opacity = "1";
}

window.addEventListener("keydown" , (event)=>{
    if(event.key === "Enter") {
        let user_value = user_input.value;

        location.href= `https://www.google.com/search?q=${user_value}`;

    }
})
