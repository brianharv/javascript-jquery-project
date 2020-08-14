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
      $("#output").text("Ruby");
      $("#form-output").show();
    } else if (result <= 24 && result >= 17 && number1 > 1 && number2 > 1 && number3 > 1 && number4 > 1 && number5 > 1) {
      $("#output").text("Javascript");
      $("#form-output").show();
    } else if (result <= 16 && result >= 10 && number1 > 1 && number2 > 1 && number3 > 1 && number4 > 1 && number5 > 1) {
      $("#output").text("Python");
      $("#form-output").show();
    } else {
      $("#form-output").hide();
    }
  });
}); 

