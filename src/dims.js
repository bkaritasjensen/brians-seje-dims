function rainbow(message) {
	colors = [//farver i et array
	  "\x1b[31m",
	  "\x1b[32m",
	  "\x1b[33m",
	  "\x1b[34m",
	  "\x1b[35m",
	  "\x1b[36m"
	]
	function arrayInterator(symbol, index) {  //laver en function med argument 
	  return `${colors[index % colors.length] + symbol + "\x1b[0m"}`//returnere colors array'et som divider med index
	}
	let symbols = message.split("")//laver en variabel med message som deler det op til et array.
	console.log(symbols.map(arrayInterator).join(""))//console.log symbolerne(arrayet), og gør det til en string igen, med map.
  }
module.exports = rainbow; //exportere functionen rainbow
