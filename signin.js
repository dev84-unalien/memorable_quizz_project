$(document).ready(function() {

    let id = null;
    let lname = '';
    let fname = '';
    let address = '';
    let zip = '';
    let city ='';
    let phone = '';
    let mail = '';
    let pwd1 = '';
    let pwd2 = '';
    let ausweis = null;
    
    $('#validate').click(function() {

        ausweis = 0;
        lname = $('#lastname').val();
        fname = $('#firstname').val();
        address = $('#address').val();
        zip = $('#zipcode').val();
        city = $('#city').val();
        phone = $('#phone').val();
        mail = $('#mail').val();
        pwd1 = $('#password1').val();
        pwd2 = $('#password2').val();

        if (lname == '') {$('#lastname').addClass('badentry'); ausweis = 0;}
        else {ausweis++; $('#lastname').removeClass('badentry');}

        if (fname == '') {$('#firstname').addClass('badentry'); ausweis = 0;}
        else {ausweis++; $('#firstname').removeClass('badentry');}

        if (address == '') {$('#address').addClass('badentry'); ausweis = 0;}
        else {ausweis++; $('#address').removeClass('badentry');}

        if (zip == '') {$('#zipcode').addClass('badentry'); ausweis = 0;}
        else {ausweis++; $('#zipcode').removeClass('badentry');}

        if (city == '') {$('#city').addClass('badentry'); ausweis = 0;}
        else {ausweis++; $('#city').removeClass('badentry');}

        if (phone == '') {$('#phone').addClass('badentry'); ausweis = 0;}
        else {ausweis++; $('#phone').removeClass('badentry');}

        if (mail == '') {$('#mail').addClass('badentry'); ausweis = 0;}
        else {ausweis++; $('#mail').removeClass('badentry');}

        if (pwd1 == '') {$('#password1').addClass('badentry'); ausweis = 0;}
        else {ausweis++; $('#password1').removeClass('badentry');}

        if ((pwd2 == '') || (pwd2 != pwd1)) {$('#password2').addClass('badentry'); ausweis = 0;}
        else {ausweis++; $('#password2').removeClass('badentry');}

        if (ausweis == 9) {
        cifammoniacal(lname, fname, address, zip, city, phone, mail, pwd1, pwd2);
        }
        else {alert("Formulaire invalide : il manque des champs, non mais wtf!");}
        });

    function cifammoniacal(ciflna, ciffna, cifadd, cifzip, cifcit, cifpho, cifmai, cifpwd1, cifpwd2) {

        console.log(ciflna);
        console.log(ciffna);
        console.log(cifadd);
        console.log(cifzip);
        console.log(cifcit);
        console.log(cifpho);
        console.log(cifmai);
        console.log(cifpwd1);
        console.log(cifpwd2);

        $.ajax({
            url: "http://localhost/signin.php",
            type: 'POST',
            data: {bcklna: ciflna, bckfna: ciffna, bckadd: cifadd, bckzip: cifzip, bckcit: cifcit, 
                bckpho: cifpho, bckmai: cifmai, bckpwd1: cifpwd1, bckpwd2: cifpwd2},
            success: myHandler,
            error: function () {
                alert("Something's rotten in the Kingdom : impossible de créer le compte, call fbi!");
            }
        });

        function myHandler (result) {
            alert(result);
        }
    }
});