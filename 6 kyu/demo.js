var s = "The sunset sets at twelve o' clock.";
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

console.log(s)

console.log( 
    
    s.toLowerCase()
    .replace(/[^a-z]/g,'')
    .split("")
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(" ")
   


)


