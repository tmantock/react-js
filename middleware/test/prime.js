function isPrime(n) {

   // If n is less than 2 or not an integer then by definition cannot be prime.
   if (n < 2) {return false}
   if (n != Math.round(n)) {return false}

   // Now assume that n is prime, we will try to prove that it is not.
   var isPrime = true;

   // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false}
   }

   // Finally return whether n is prime or not.
   console.log(isPrime);
   return isPrime;

}

isPrime(9);
