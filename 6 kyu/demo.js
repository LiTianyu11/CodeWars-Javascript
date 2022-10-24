function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))

    .join(" ");
}


console.log("is2".match(/\d/) - "is3".match(/\d/))
