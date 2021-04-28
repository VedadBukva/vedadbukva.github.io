$(document).ready(function () {
    jQuery.validator.addMethod("phoneUS", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length >= 9 && phone_number.match(/^([0][6][0-7])[\/-]?(\d{3})[-]?(\d{3,4})$/);
    }, "Invalid phone number");
    $("#contact").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                phoneUS: true
            },
            message: {
                required: true,
                minlength: 20
            }
        },
        messages: {
            name: "Molimo vas unesite ime i prezime",
            email: {
                required: "Molimo vas unesite email",
                email: "Validan format: unibans@mail.com"
            },
            tel: {
                required:"Molimo vas unesite telefon",
                phoneUS: "Validni formati: 061/100-100, 061-100-100 ili 061100100"
                },
            message: "Molimo vas unesite poruku"
        }
    });
});


function fun(){
    var ime = $('#ime').css("border-color");
    var mail = $('#mail').css("border-color");
    var poruka = $('#poruka').css("border-color");
    var tel = $('#tel').css("border-color");
    
    var imeP = $('#ime').val();
    var mailP = $('#mail').val();
    var porukaP = $('#poruka').val();
    var telP = $('#tel').val();


    if (ime != 'rgb(255, 0, 0)' && mail != 'rgb(255, 0, 0)' && poruka != 'rgb(255, 0, 0)' && tel != 'rgb(255, 0, 0)' &&
    imeP != "" && mailP != "" && telP != "" && porukaP != "" ){
        swal("Uspješno ste poslali poruku !", "", "success");
        alert("Uspješno ste poslali poruku !");
    }
        
    else swal("Niste ispravno popunili podatke!", "", "error");
}