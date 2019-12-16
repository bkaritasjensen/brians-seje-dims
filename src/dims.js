function logger(string){
	let reverseString = string.split("") //split laver hvert element i string til en del af et array.
	.reverse()
	.join("");
console.log(reverseString);
}

module.exports = logger; //nød til at exportere modulet for at kunne importere modulet.