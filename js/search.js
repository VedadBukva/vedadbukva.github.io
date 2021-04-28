function otvoriPretragu() {
  location.replace("store.html");
  window.onload = function () {
    var input = document.getElementById("pretraga").focus();
  }
}

var input = document.getElementById('pretraga');

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    pretraga();
  }
});

function pretraga() {
  document.getElementById("carouselExampleIndicators").style.display = "none";
  // Declare variables
  var filter, shopItems, poglavlja, i, txtValue, brojac = 0;
 
  filter = input.value.toUpperCase();
  shopItems = document.getElementsByClassName("shop-item");
  poglavlja = document.getElementsByClassName("section-header");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < shopItems.length; i++) {
    var naslov = shopItems[i].getElementsByTagName("span")[0];
    txtValue = naslov.textContent || naslov.innerText;
    if (filter == "") {
      for (i = 0; i < shopItems.length; i++) {
        shopItems[i].style.display = "";
      }
      break;
    }
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      shopItems[i].style.display = "";
    } else {
      shopItems[i].style.display = "none";
    }
  }

  for (i = 0; i < poglavlja.length; i++) {  	
    poglavlja[i].style.display = "none";
  }

  for (i = 0; i < shopItems.length; i++) {
    if (shopItems[i].style.display == "none") {
      brojac++;
      if (brojac == shopItems.length) {
        for (i = 0; i < poglavlja.length; i++) {
          poglavlja[i].style.display = "";
        }
        for (i = 0; i < shopItems.length; i++) {
          shopItems[i].style.display = "";
        }
        document.getElementById("carouselExampleIndicators").style.display = "";
        swal("Nema rezultata za Vašu pretragu!", "", "warning");
        
      }
    }
  }
}