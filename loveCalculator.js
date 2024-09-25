function loveCalc (girl,boy){

  var girl= prompt("What is your name?")
  var boy= prompt("What is your lover's name?")

  var n = Math.random();
  var lovePercent = Math.floor(n*100)+1;
  alert("❤️"+" "+"Love between"+" "+girl +" "+ "and"+" " + boy +" " +"is "+" "+ lovePercent + "%"+" "+"❤️");
  
}

loveCalc();