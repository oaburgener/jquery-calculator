$(document).ready(function(){

  var screen = $('#screen')
  var result = [];

  function print(){
    let $target = $(event.target).context.innerHTML

    if ($target === "C"){
      $("#screen").empty();
      result = [];
    }else if ($target === "x"){
      result.push("*");
      screen.append($target);
    }else if ($target === "÷"){
      result.push("/");
      screen.append($target);
    }else if($target === "="){
      screen.append("");
    }else{
      result.push($target);
      screen.append($target);
    }
  }

  function evaluate(){
    let resultString = result.join("");
    if(resultString.startsWith("/") || resultString.startsWith("*") || resultString.startsWith("+")){
      screen.empty();
      screen.append("SYNTAX ERROR");
    }else if(resultString.endsWith("/") || resultString.endsWith("*") || resultString.endsWith("+") || resultString.endsWith("-")){
      screen.empty();
      screen.append("SYNTAX ERROR");
    }else if(resultString.includes("/0")){
      screen.empty();
      screen.append("SYNTAX ERROR");
    }else{
      let sum = eval(resultString);
      screen.empty()
      screen.append(sum)
    }
  }

$('.buttons').click(print);
$('#equals').click(evaluate);




})
