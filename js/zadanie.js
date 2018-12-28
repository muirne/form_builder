

function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.querySelector('.one-car').style.display = 'block';
    } else if (document.getElementById('noCheck').checked) {
        document.querySelector('.one-car').style.display = 'none';
    }
}


function ford() {
    var sel = document.querySelector(".carbrand");
    var val = sel.options[sel.selectedIndex].text;

    if (val === "Ford") {
        document.querySelector('.one-car__ford').style.display = 'block';
        document.querySelector('.one-car__fordd').style.display = 'block';
    } else {
        document.querySelector('.one-car__ford').style.display = 'none';
        document.querySelector('.one-car__fordd').style.display = 'none';
    }
    if (val === "Toyota"){
        document.querySelector('.one-car__toyota').style.display = 'block';
    }else {
        document.querySelector('.one-car__toyota').style.display = 'none';
}
}

function wheel(){

    var wheels = document.querySelector(".wheelnr").value;
    if (wheels > 4){
        document.querySelector('.one-car__fordnr').style.display = 'block';
    }else{
        document.querySelector('.one-car__fordnr').style.display = 'none';
}
}

$(document).ready(function() {

$(".form").submit(function(e) {
    var formURL = $('form').attr('action');
$.ajax({
            type: 'POST',
            url:formURL,
            data: $(".form").serialize(),
            success: function(data) {
                console.log(data);
            }


                    });




e.preventDefault();
})
})
// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.querySelector('form');
//     var errors = document.querySelector('.error-message');
//
//     form.addEventListener("submit", function(e) {
//
//         e.preventDefault();
//
//         errors.innerHTML = "";
//
//         var valid = true;
//
//         if (valid) {
//                     form.submit();
//                 }
//
//             })
//
//         });
