// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }
//
// function set_background(){
//   var col = document.querySelector('cat');
//   let para = document.querySelector('par');
//   console.log(para);
//   col.addEventListner("click", function () {
//   para.style.background = "blue"
// });
// }
//
//
// function Bill (string){
//     var arra = string.split(" ");
//     var arraynew = [];
//     var arra_length = arra.length-1;
//     for (var i = 0; i < 2^arra_length; i++) {
//       arraynew = onezero(i,arra_length);
//       var outcome= '';
//       for (var j = 0; j < arra_length; j++) {
//           if (arraynew[j]===1) {
//               concat.outcome(arra[j]);
//
//           }
//       }
//       print(outcome);
//     }
//
// }
//
// function onezero(number, length) {
//     var total = number;
//     var array = [];
//     for (var i = number.length -1;i>=0; i--) {
//       if (2^i<=total) { array.push(1);
//          total= total - 2^i;
//      }else{
//          array.push(0);
//      }
//
//     }
//     return array;
// }


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

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');
    var errors = document.querySelector('.error-message');

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        errors.innerHTML = "";

        var valid = true;

        if (valid) {
                    form.submit();
                }

            })

        });

        heartAjax() {
            let heart = document.querySelectorAll(".btn-primary");

            // CLICKED_REF
            let clickedHeart;
            let on = true;

              heart.addEventListener("click", function() {
                clickedHeart = this;
                ajax();
              }, false);

            // AJAX
            function ajax() {
              const url = "https://demo3451683.mockable.io/mag";
              const request = new XMLHttpRequest();
              request.open("GET", url);
              request.onload = function() {
                if (request.status === 200) {
                  getResponse(this.responseText);
                }
              };
              request.send(null);
            }
            // GET_RESPONSE
            function getResponse(responseText) {
              const response = JSON.parse(responseText);
              if (on) {
                alert(response.dodano);
                on = null;
              } else {
                alert(response.niedodano);
                on = true;
              }
              console.log("submit");;
            }


// document.addEventListener("DOMContentLoaded", function(){
//     var buttonIcon = document.querySelector('.icon-wheel');
//     buttonIcon.addEventListner("click", function(){
//
//         var wheels = document.querySelector(".wheelnr").value;
//         if ( typeof wheels === "number" &&  wheels > 4){
//             document.querySelector('.wheel').style.display = 'block'
//         }else{
//             document.querySelector('.wheel').style.display = 'none';
//     }
//
// });
// })
//
//     var form = document.querySelector('form');
// document.addEventListener("DOMContentLoaded", function(){
//
//     var form = document.querySelector('form');
//
//
//     form.addEventListener("submit", function(e){
//
//       e.preventDefault();
//

//
//                // var inputs = document.querySelectorAll('input[type=text]');
//                // for (var i=0; i<inputs.length; i++) {
//                //         inputs[i].value="";
//                // }
//
//            });
//  })
