//
function getPrimes(number) {
  var numberArray = [];
  for (var i = 2; i < number; i++) {
    numberArray.push(i);
  }

  for (var prime = 2; prime < number; prime++) {
    numberArray.forEach(function(arrayNumber) {
      if ((arrayNumber % prime === 0) && (arrayNumber != prime)) {
        var index = numberArray.indexOf(arrayNumber);
        numberArray.splice(index, 1);
        console.log(numberArray);
      }
    });
  }
  
  return numberArray;
}


//
$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    $("form").hide();

    var numberInput = $("#number").val();
    var primeArray = getPrimes(numberInput);

    primeArray.forEach(function(prime) {
      $("#primes").append("<li>"+prime+"</li>");
    });

  });
})
