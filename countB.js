function countChar(text, letter) {
	return text.split('').filter(l => l === letter).length
}

console.log(countChar("asddda", 'd'))
