//Business Logic
const add =function(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
}

let form1Changed = false;
let form2Changed = false;
let form3Changed = false;
let form4Changed = false;
let form5Changed = false;

//User Interface Logic
/*$(document).ready(function() {
  $("#form1").change(function() {
    alert("working1");
  $("#form2").change(function() {
    alert("working2");
  $("#form3").change(function() {
    alert("working3");
  $("#form4").change(function() {
    alert("working4");
  $("#form5").change(function() {
    alert("working5");
  event.preventDefault();
  const number1 = parseInt($("#favfood").val());
  const number2 = parseInt($("#siblings").val());
  const number3 = parseInt($("#favmovie").val());
  const number4 = parseInt($("#pet").val());
  const number5 = parseInt($("#car").val());

          });
        });
      });
    });
  });
}); */

$(document).ready(function() {
  $("#form1").on('change',function() {
    const number1 = parseInt($("#favfood").val());
    const number2 = parseInt($("#siblings").val());
    const number3 = parseInt($("#favmovie").val());
    const number4 = parseInt($("#pet").val());
    const number5 = parseInt($("#car").val());
    form1Changed = true;
    if (form2Changed && form3Changed && form4Changed && form5Changed) {
      let result = add(number1, number2, number3, number4, number5);
      $("#output").text(result);
      $("form-output").show();
    }
  });

  $("#form2").on('change',function() {
    const number2 = parseInt($("#siblings").val());
    form2Changed = true;
    if (form1Changed && form3Changed && form4Changed && form5Changed) {
      alert("working");
    }
  });

  $("#form3").on('change',function() {
    const number3 = parseInt($("#favmovie").val());
    form3Changed = true;
    if (form1Changed && form2Changed && form4Changed && form5Changed) {
      alert("working");
    }
  });
  
  $("#form4").on('change',function() {
    const number4 = parseInt($("#pet").val());
    form4Changed = true;
    if (form1Changed && form2Changed && form3Changed && form5Changed) {
      alert("working");
    }
  });
  
  $("#form5").on('change',function() {
    const number5 = parseInt($("#car").val());
    form5Changed = true;
    if (form1Changed && form2Changed && form3Changed && form4Changed) {
      alert("working");
    }
  });
});    


