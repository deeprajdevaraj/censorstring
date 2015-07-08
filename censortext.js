var censoredWords = ["sad","mad",bad"];
var customCensoredWords = [];

// function to censor the string
function censor(inStr) {
	for(indx in censoredWords) {
		inStr = inStr.replace(censoredWords[indx],"*****");
	}
	for(indx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[indx],"*****");
	}
	return inStr;
}

// function to add user defined censored words
function addCensoredWord(word) {
	customCensoredWords.push(word);
}

// function to list all censored words
function getCensoredWords() {
	censoredWords.concat(customCensoredWords);
}

export.censor = censor;
export.addCensoredWord = addCensoredWord;
export.getUnwantedWords = getCensoredWords;
