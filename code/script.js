//Popup para mostrar paginas disponibles

const closePopup = () => {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}



//Responsive menu, despliega en click

const show = () => {
    const menu = document.getElementById("navbar__ul__res");

    if (menu.getAttribute("class") != "navbar__ul__res menu_res"){
        menu.classList = "navbar__ul__res menu_res"
        
    }else {menu.classList = "navbar__ul__res"}
}

