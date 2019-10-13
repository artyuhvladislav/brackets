module.exports = function check(str, bracketsConfig) {
	let arrStr = str.split('');
	for (let i = 0; i < arrStr.length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			let firstBracket = bracketsConfig[j][0], 
			secondBracket = bracketsConfig[j][1];
			if (arrStr[i] === firstBracket && arrStr[i + 1] === secondBracket) {
				arrStr.splice(i, 2);
				i = -1;  
			}
		}
	}
	if (arrStr.length === 0){
		return true
	}
	else {
		return false
	}

}
