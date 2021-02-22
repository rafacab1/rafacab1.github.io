/**
 * 
 * @author Rafa Caballero
 */

{
    let btnFlecha;

    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("botonNav").addEventListener("click", toggleNav);
        btnFlecha = document.getElementById("btnFlecha");
    });
    
    function toggleNav() {
        let items = document.getElementsByName("listItem");
        items.forEach(item => {
            item.classList == "listaOculta" ? item.classList = "" : item.classList = "listaOculta";
        });
        btnFlecha.innerHTML == "keyboard_arrow_down" ? btnFlecha.innerHTML = "keyboard_arrow_up" : btnFlecha.innerHTML = "keyboard_arrow_down";
    }

}