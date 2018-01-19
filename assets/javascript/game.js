var arrayOfProperNouns = ["Harry Potter", "Ron Weasley", "Hermione Granger", "Albus Dumbledore", "Hagrid", 
"Severus Snape", "Voldemort", "Sirius Black", "Draco Malfoy", "Fred Weasley", "Remus Lupin", "George Weasley",
"Neville Longbottom", "Arthur Weasley", "Ginny Weasley", "Minerva McGonagall", "Molly Weasley", "Dolores Umbridge",
"Alastor Moody", "Vernon Dursley", "Cornelius Fudge", "Peter Pettigrew", "Dobby", "Dudley Dursley",
"Horace Slughorn", "Percy Weasley", "Luna Lovegood", "Cedric Diggory", "Petunia Dursley", "Kreacher",
"Bill Weasley", "Barty Crouch Sr", "Argus Filch", "Viktor Krum", "Gilderoy Lockhart", "Sybill Trelawney",
"Fleur Delacour", "Lucius Malfoy", "Ludo Bagman", "Nymphadora Tonks", "Gregory Goyle", "Vincent Crabbe",
"Bellatrix Lestrange", "Cho Chang", "Dean Thomas", "Oliver Wood", "Hedwig", "James Potter", "Rita Skeeter",
"Seamus Finnigan", "Igor Karkaroff", "Peeves", "Crookshanks", "Winky", "Poppy Pomfrey", "Rufus Scrimgeour",
"Mundungus Fletcher", "Lavender Brown", "Filius Flitwick", "Griphook", "Buckbeak", "Angelina Johnson", 
"Parvati Patil", "Lily Potter", "Xenophilius Lovegood", "Nearly Headless Nick", "Quirinus Quirrell",
"Moaning Myrtle", "Garrick Olivander", "Katie Bell", "Olympe Maxim", "Charlie Weasley", "Lee Jordan",
"Kingsley Shacklebot", "Fang", "Fenrir Greyback", "Ernie Macmillan", "Pomona Sprout", "Phineas Black",
"Narcissa Malfoy", "Stan Shunpike", "Aberforth Dumbledore", "Bathilda Bagshot", "Colin Creevey",
"Amos Diggory", "Firenze", "Grawp", "Marge Dursley", "Gellert Grindelwald", "Cormac McLaggen",
"Fat Lady", "Salazar Slytherin", "Marvolo Gaunt", "Bob Ogden", "Pansy Parkinson", "Fawkes", 
"Frank Bryce", "Morfin Gaunt", "Godric Gryffindor", "Elphias Doge", "Elder Wand", "Goblet of Fire", 
"Godric Gryffindor's Sword", "Sorceror's Stone", "Deathly Hallows", "Deluminator", "Knight Bus",
"Mirror of Erised", "Resurrection Stone", "Room of Requirement", "Vanishing Cabinet", "Sorting Hat",
"Wand of Destiny", "Floo Powder", "Broomstick", "Flying Carpet", "Portkey", "Apparition",
"Enchanted Motorbike", "Hogwarts Express", "Horcrux", "Howler", "Pensieve", "Remembrall", "Revealer",
"Peruvian Instant Darkness Powder", "Shield Cloak", "Invisibility Cloak", "Time-Turner",
"The Marauder's Map", "Probity Probe", "Sneakoscope", "Exploding Snap", "Gobstones", "Wizard's Chess",
"Marvolo Gaunt's Ring", "Tom Riddle's Diary", "Helga Hufflepuff's Cup", "Salazar Slytherin's Locket",
"Rowena Ravenclaw's Diadem", "Nagini", "Azkaban", "Beauxbatons", "Diagon Alley", "Durmstrang",
"Floo Network", "Hogwarts", "The Three Broomsticks", "The Leaky Cauldron", "Godric's Hollow", 
"The Burrow", "Nurmengard", "Gringotts", "Zonko's Joke Shop", "St Mungo", "The Ministry of Magic",
"Privet Drive", "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin", "Nimbus", "Firebolt", "Quidditch",
"Chaser", "Beater", "Seeker", "Keeper", "Quaffle", "Snitch", "Bludgeon", "Nosebleed Nougat",
"Fever Fudge", "Fainting Fancies", "Blood Blisterpods", "Puking Pastilles", "Daydream Charm",
"Extendable Ears", "Portable Swamps", "Decoy Detonator", "Anti-Cheating Quill", "Blood Quill",
"Quick Quotes Quill", "Spell-Checking Quill", "Spellotape", "Gubraithian Fire", "Madam Hooch"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var charactersOfSelectedWord = [];
var selectedWord;
var stringOfUnderlines = "";
var userChoice;
var lettersGuessed = "";
var lettersGuessedArray = [];
var randomNumber;
var wins = 0;
var guessesRemaining = 8; 

document.onkeyup = function(event) {
	randomNumber = Math.floor(Math.random() * arrayOfProperNouns.length);
	selectedWord = arrayOfProperNouns[randomNumber];
	document.getElementById("guesses_remaining").textContent = guessesRemaining;
	document.getElementById("wins").textContent = wins;

	for(var i = 0; i < selectedWord.length; i++) {
		charactersOfSelectedWord.push(selectedWord.charAt(i));
		if(alphabet.indexOf(selectedWord.charAt(i).toLowerCase()) > -1)
			stringOfUnderlines = stringOfUnderlines.concat("_");
		else
			stringOfUnderlines = stringOfUnderlines.concat(selectedWord.charAt(i));
	}

	document.getElementById("current_word").textContent = stringOfUnderlines;

	document.onkeyup = function(event) {
		userChoice = event.key;
		userChoice = userChoice.toLowerCase();

		if(alphabet.indexOf(userChoice) > -1) {
			if(lettersGuessedArray.indexOf(userChoice) === -1 && charactersOfSelectedWord.indexOf(userChoice) === -1 && charactersOfSelectedWord.indexOf(userChoice.toUpperCase()) === -1) {
				guessesRemaining--;
				lettersGuessedArray.push(userChoice);
				document.getElementById("guesses_remaining").textContent = guessesRemaining;
				if(lettersGuessed.length === 0)
					lettersGuessed = lettersGuessed.concat(userChoice);
				else 
					lettersGuessed = lettersGuessed.concat(", ", userChoice);
				document.getElementById("letters_guessed").textContent = lettersGuessed;
			}
			else {
				for(var j = 0; j < charactersOfSelectedWord.length; j++) {
					if(userChoice === charactersOfSelectedWord[j].toLowerCase())
						stringOfUnderlines = stringOfUnderlines.substr(0,j) + charactersOfSelectedWord[j] + stringOfUnderlines.substr(j+1);
				}
				document.getElementById("current_word").textContent = stringOfUnderlines;
			}
		}
		
		if(stringOfUnderlines.indexOf("_") === -1) {
			wins++;
			document.getElementById("wins").textContent = wins;
		}

		if(guessesRemaining === 0 || stringOfUnderlines.indexOf("_") === -1) {
			guessesRemaining = 8;
			lettersGuessed = "";
			lettersGuessedArray = [];
			stringOfUnderlines = "";
			charactersOfSelectedWord = [];

			randomNumber = Math.floor(Math.random() * arrayOfProperNouns.length);
			selectedWord = arrayOfProperNouns[randomNumber];
			document.getElementById("guesses_remaining").textContent = guessesRemaining;
			document.getElementById("letters_guessed").textContent = lettersGuessed;

			for(var i = 0; i < selectedWord.length; i++) {
				charactersOfSelectedWord.push(selectedWord.charAt(i));
				if(alphabet.indexOf(selectedWord.charAt(i).toLowerCase()) > -1)
					stringOfUnderlines = stringOfUnderlines.concat("_");
				else
					stringOfUnderlines = stringOfUnderlines.concat(selectedWord.charAt(i));
			}

			document.getElementById("current_word").textContent = stringOfUnderlines;
		}
	}
}