function hidenText(){
    if(text.style.display === ''){
        text.style.display = 'none';
    }else{
        text.style.display = '';
    }
}

function selfHiden(){
    selfHidenButton.style.display = 'none';
}

var toggle1 = document.getElementById("toggle1");
        var submenu1 = document.getElementById("submenu1");

        // Додаємо обробник події для заголовка
        toggle1.addEventListener("click", function () {
            if (submenu1.style.display === "none" || submenu1.style.display === "") {
                submenu1.style.display = "block";
                toggle1.textContent = "-";
            } else {
                submenu1.style.display = "none";
                toggle1.textContent = "+";
            }
        });