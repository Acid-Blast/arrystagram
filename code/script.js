// Alert para paginas disponible
// const page = document.getElementsByTagName("title");

// if (page[0].innerText == "Arrystagram"){
//     window.onload = () => {
//         alert(`
//             Paginas disponibles:
//                 -Home
//                 -Alquimia
//             `
//         );
//     }
// }







//Responsive menu, despliega en click
const show = () => {
    const menu = document.getElementById("navbar__ul__res");

    if (menu.getAttribute("class") != "navbar__ul__res menu_res"){
        menu.classList = "navbar__ul__res menu_res"
        
    }else {menu.classList = "navbar__ul__res"}
}

