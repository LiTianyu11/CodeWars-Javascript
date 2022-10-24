/*6 kyu Your order, please

DESCRIPTION:
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

#STRINGS #FUNDAMENTALS

*/

//Solution 1
function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      // the -, it is a arithmetic operator which will coerce a.match(/\d/) into a number
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

//Solution 2
const order = (words) =>
  words
    .split(" ")
    .sort((a, b) => /\d/.exec(a) - /\d/.exec(b))
    .join(" ");
