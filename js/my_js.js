
//Function To Display Popup
function div_show() {
    var vrijednost = document.getElementById('cart-total-price').innerText;
    if (!(vrijednost == '0 KM')) {
        document.getElementById('abc').style.display = "block";
        document.getElementsByClassName('main-header')[0].style.display = "none";
        document.getElementById('crvena').style.zIndex = "-1";
    }

    else swal("Popunite korpu kako bi obavili narudžbu!", "", "warning");
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('abc').style.display = "none";
    document.getElementsByClassName('main-header')[0].style.display = "block";
    document.getElementById('crvena').style.zIndex = "1";
}