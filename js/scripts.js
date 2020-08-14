//Business Logic
const add =function(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
}


//User Interface Logic
$(document).ready(function() {
  $("#form1, #form2, #form3, #form4, #form5").change(function() {
  event.preventDefault();
  const number1 = parseInt($("#favfood").val());
  const number2 = parseInt($("#siblings").val());
  const number3 = parseInt($("#favmovie").val());
  const number4 = parseInt($("#pet").val());
  const number5 = parseInt($("#car").val());
  let result = add(number1, number2, number3, number4, number5);

    if (result >= 25 && number1 > 1 && number2 > 1 && number3 > 1 && number4 > 1 && number5 > 1) {
      $("#output-ruby").text("Ruby");
      $("#form-output-ruby").show();
    } else if (result <= 24 && result >= 17 && number1 > 1 && number2 > 1 && number3 > 1 && number4 > 1 && number5 > 1) {
      $("#output-javascript").text("Javascript");
      $("#form-output-javascript").show();
    } else if (result <= 16 && result >= 10 && number1 > 1 && number2 > 1 && number3 > 1 && number4 > 1 && number5 > 1) {
      $("#output-python").text("Python");
      $("#form-output-python").show();
    } else {
      $("#form-output-ruby, #form-output-javascript, #form-output-python").hide();
    }
  });
}); 
/*
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
    const number1 = parseInt($("#favfood").val());
    const number2 = parseInt($("#siblings").val());
    const number3 = parseInt($("#favmovie").val());
    const number4 = parseInt($("#pet").val());
    const number5 = parseInt($("#car").val());
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

 $("#form1").change(function() {
  $("#form2").change(function() {
  $("#form3").change(function() {
  $("#form4").change(function() {
  $("#form5").change(function() {

*/
