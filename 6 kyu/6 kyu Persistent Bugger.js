/*6 kyu Persistent Bugger

DESCRIPTION:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

#FUNDAMENTALS

*/

//solution 1 (original)
function persistence(num) {
  let times = 0;
  while (num >= 10) {
    num = Array.from(String(num), Number).reduce((a, b) => a * b);
    times++;
  }

  return times;
}

//solution 2
function persistence(num) {
  var times = 0;

  while (num > 9) {
    times++;
    num = num
      .toString()
      .split("")
      .map(Number) // could skip this step
      .reduce((a, b) => a * b);
  }

  return times;
}

//solution 3 (recursion)
const persistence = (num) => {
  //`${num}` == num.toString()
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
    : 0;
};
