function validateForm() {
    var x =  document.getElementById('name').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Name cannot be empty";
        return false;
    }
    x =  document.getElementById('email').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(x)){
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
    }
    x =  document.getElementById('adress').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Adress cannot be empty";
        return false;
    }
    x =  document.getElementById('postcode').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Postcode cannot be empty";
        return false;
    }
    x =  document.getElementById('province').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Province cannot be empty";
        return false;
    }
    x =  document.getElementById('country').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Country cannot be empty";
        return false;
    }
 //get input field values data to be sent to server
    document.getElementById('status').innerHTML = "Sending...";
    formData = {
        'name'     : $('input[name=name]').val(),
        'adress'   : $('input[name=adress]').val(),
        'postcode' : $('input[name=postcode]').val(),
        'province' : $('input[name=province]').val(),
        'country'  : $('input[name=country]').val(),
        'email'    : $('input[name=email]').val(),
    };


   $.ajax({
    url : "mail.php",
    type: "POST",
    data : formData,
    success: function(data, textStatus, jqXHR)
    {

        $('#status').text(data.message);
        if (data.code) //If mail was sent successfully, reset the form.
        $('#contact-form').closest('form').find("input[type=text], textarea").val("");
    },
    error: function (jqXHR, textStatus, errorThrown)
    {
        $('#status').text(jqXHR);
    }
});



}