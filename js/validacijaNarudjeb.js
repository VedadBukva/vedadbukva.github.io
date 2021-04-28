$(document).ready(function () {
    jQuery.validator.addMethod("phoneUS", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length >= 9 && phone_number.match(/^([0][6][0-7])[\/-]?(\d{3})[-]?(\d{3,4})$/);
    }, "Invalid phone number");
    $("#form").validate({
        rules: {
            name: "required",
            adresa: "required",
            email: {
                required: true,
                email: true
            },
            msg: {
                required: true,
                phoneUS: true
            }
        },
        messages: {
            name: "Molimo vas unesite ime i prezime",
            adresa: "Molimo vas unesite adresu",
            email: {
                required: "Molimo vas unesite email",
                email: "Validan format: unibans@mail.com"
            },
            msg: {
                required: "Molimo vas unesite telefon",
                phoneUS: "Validni formati: 061/100-100, 061-100-100 ili 061100100"
            }
        }
    });
});


function fun() {
    var ime = $('#name').css("border-color");
    var adresa = $('#adresa').css("border-color");
    var mail = $('#email').css("border-color");
    var tel = $('#msg').css("border-color");

    var imeP = $('#name').val();
    var mailP = $('#email').val();
    var porukaP = $('#adresa').val();
    var telP = $('#msg').val();


    if (ime != 'rgb(255, 0, 0)' && mail != 'rgb(255, 0, 0)' && adresa != 'rgb(255, 0, 0)' && tel != 'rgb(255, 0, 0)' &&
        imeP != "" && mailP != "" && telP != "" && porukaP != "") {
        var broj = Math.floor((Math.random() * 100) + 1);      
        swal("Uspješno ste izvršili narudžbu! Vaš broj narudžbe je " + broj + " !", "", "success");
        //location.reload();
    } else swal("Niste ispravno popunili podatke!", "", "error");
}