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

    var numberInput = $("#number").val();

    if (numberInput > 10000 || numberInput < 0) {
      alert("Enter a number between 0 and 10,000");
    } else {
      var primeArray = getPrimes(numberInput);
      primeArray.forEach(function(prime) {
        $("#primes").append("<li>"+prime+"</li>");
      });
      $("form").hide();
    }

  });
})
