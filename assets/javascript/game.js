//Global Variables
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
"Quick Quotes Quill", "Spell-Checking Quill", "Spellotape", "Gubraithian Fire", "Madam Hooch", "Peeves",
"Whomping Willow", "Aragog", "Professor Trelawney", "Muggle Studies", "Divination", "Herbology", 
"Transfiguration", "Charms", "Defense Against the Dark Arts", "Care of Magical Creatures",
"Arithmancy"];
	
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var repeatLetterMusicTags = ["avadakedavrar", "changesr", "comingr", "crapr", "darer", "dirtr", "dobbyr",
"episkeyr", "finite-incantatemr", "incendior", "insultr", "liesr", "mer", "merlinsbeardr", "muggler", 
"nosuchthingr", "patheticr", "repugnor", "requirer", "sectumsemprar", "shutitr", "spellsr", "tensionr", 
"wrongr"];

var victoryMusicTags = ["arrival_of_baby_harryv", "chess_gamev", "christmas_at_hogwartsv", "diagon_alleyv",
"entry_into_great_hallv", "face_of_voldemortv", "fluffy's_harpv", "flying_keysv", "harry's_wondrous_worldv",
"hedwig's_themev", "invisibility_cloakv", "journey_to_hogwartsv", "leaving_hogwartsv", "letters_from_hogwartsv",
"longbottom_fliesv", "norwegian_ridgebackv", "prologuev", "the_moving_stairsv", "the_quidditch_matchv"];

var randomNumber;

//Global functions

//Plays repeat music
function playRepeatMusic(){
	randomNumber = Math.floor(Math.random() * repeatLetterMusicTags.length);
	pauseMusic("r");
	document.getElementById(repeatLetterMusicTags[randomNumber]).play();
}

//Plays victory music
function playVictoryMusic(){
	randomNumber = Math.floor(Math.random() * victoryMusicTags.length);
	pauseMusic("v");
	document.getElementById(victoryMusicTags[randomNumber]).play();
}

// Prevents music of same class (victory or repeat) from playing over each other 
function pauseMusic(music_class){
	var audios = document.getElementsByTagName("audio");
	for(var i = 0; i < audios.length; i++) {
		var audio_id = audios[i].id;
		if(audio_id.charAt(audio_id.length-1) === music_class)
			audios[i].pause();
	}
}; 

//Game object
var game = {
	charactersOfSelectedWord: [],
	selectedWord: "", 
	stringOfUnderlines: "",
	userInput: "",
	userChoices: "", 
	wrongLettersGuessed: "",
	wrongLettersGuessedArray: [],
	allLettersGuessedArray: [],
	wins: 0,
	guessesRemaining: 8, 
	solvedPuzzle: false,

	//initializes game
	setGame: function(){
		randomNumber = Math.floor(Math.random() * arrayOfProperNouns.length);
		this.selectedWord = arrayOfProperNouns[randomNumber];

		for(var i = 0; i < this.selectedWord.length; i++) {
			this.charactersOfSelectedWord.push(this.selectedWord.charAt(i));
			if(alphabet.indexOf(this.selectedWord.charAt(i).toLowerCase()) > -1) {
				this.stringOfUnderlines = this.stringOfUnderlines.concat("_");
			}
			else
				this.stringOfUnderlines = this.stringOfUnderlines.concat(this.selectedWord.charAt(i));
		}
	}, 

	//underlines, guesses remaining and wins dissolve onto screen
	dissolveNewBoard: function(){
		var arrayOfIds;
		arrayOfIds = this.stringOfUnderlines.split("").map(function(element, index) {
			return $('<span id="'+ index + '">' + element + '</span>');
		});

		var currentWord = $("#current_word");
		arrayOfIds.forEach(function(element, index) {
			currentWord.append(element);
			element.hide();
			setTimeout(function() {
				element.fadeIn(500)
			}, 500 + index*500);
		});

		var victory = $("#wins");
		victory.empty();
		var new_victory = $('<span id="win">' + this.wins + '</span>')
		victory.append(new_victory);
		new_victory.hide();
		setTimeout(function() {
			new_victory.fadeIn(1000)
		}, 1000);

		var guesses = $("#guesses_remaining");
		guesses.empty();
		var new_guesses = $('<span id="guess">' + this.guessesRemaining + '</span>');
		guesses.append(new_guesses);
		new_guesses.hide();
		setTimeout(function() {
			new_guesses.fadeIn(1000)
			}, 1000);
	},

	//stores user's input
	getUserInput: function(){
		this.userInput = event.key.toLowerCase();
	},

	//checks if user's input is valid
	checkUserInput: function(){
		if(alphabet.indexOf(this.userInput) === -1)
			return false;
		else
			return true;
	},

	resetUserInput: function(){
		this.userInput = "";
	},

	//checks if user entered a repeat letter
	checkRepeatedLetter: function(){
		if(this.allLettersGuessedArray.indexOf(this.userInput) > -1) {
			pauseMusic("r");
			playRepeatMusic();
			return true;
		}
		else
			return false;
	}, 

	//checks if user entered a correct letter
	checkCorrectLetter: function(){
		this.allLettersGuessedArray.push(this.userInput);
		if(this.charactersOfSelectedWord.indexOf(this.userInput) > -1 || this.charactersOfSelectedWord.indexOf(this.userInput.toUpperCase()) > -1)	
			return true;
		else {
			this.wrongLettersGuessedArray.push(this.userInput);
			this.guessesRemaining--;
			var guesses = $("#guesses_remaining");
			guesses.empty();
			var new_guesses = $('<span id="guess">' + this.guessesRemaining + '</span>');
			guesses.append(new_guesses);
			new_guesses.hide();
			setTimeout(function() {
				new_guesses.fadeIn(1000)
				}, 1000);
			
			if(this.wrongLettersGuessed.length === 0)
					this.wrongLettersGuessed = this.wrongLettersGuessed.concat(this.userInput);
				else 
					this.wrongLettersGuessed = this.wrongLettersGuessed.concat(", ", this.userInput);
			return false;
		}
	},

	//dissolves an incorrect guess onto "incorrect letters guessed" part of screen
	dissolveIncorrectLetter: function(){
		var arrayOfIds;
		if(this.wrongLettersGuessed.length === 1)
			arrayOfIds = [$('<span id="1">' + this.userInput + '</span>')];
		else
			arrayOfIds = [$('<span id="1">,</span>'), 
			$('<span id="2"> </span>'), $('<span id="3">' + this.userInput + '</span>')]; 

		var currentWord = $("#letters_guessed");
		arrayOfIds.forEach(function(element, index) {
			currentWord.append(element);	
			element.hide();
			setTimeout(function() {
				element.fadeIn(500)
			}, 500 + index*500);
		});
	},

	//updates string of underlines with correct letters filled in
	dissolveCorrectLetter: function(){
		var arrayOfIndexesToChange = [];

		for(var j = 0; j < this.charactersOfSelectedWord.length; j++) {
			if(this.userInput === this.charactersOfSelectedWord[j].toLowerCase()) {
				this.stringOfUnderlines = this.stringOfUnderlines.substr(0,j) + this.charactersOfSelectedWord[j] + this.stringOfUnderlines.substr(j+1);
				arrayOfIndexesToChange.push(j);
			}
		}
				
		var arrayOfIds = this.stringOfUnderlines.split("").map(function(element, index) {
			return $('<span id="'+ index + '">' + element + '</span>');
		});
	
		var currentWord = $("#current_word");		
		currentWord.empty();
		arrayOfIds.forEach(function(element, index) {
			currentWord.append(element);
			if(arrayOfIndexesToChange.indexOf(index) > -1) {
				element.hide();
				setTimeout(function() {
					element.fadeIn(1000)
				}, 1000 + arrayOfIndexesToChange.indexOf(index)*1000);
			};
		});
	},

	//checks for victory
	checkForVictory: function(){
		if(this.stringOfUnderlines.indexOf("_") === -1) {
			this.wins++;
			this.solvedPuzzle = true;
			pauseMusic("v");
			pauseMusic("r");
			playVictoryMusic();
		}
	},

	//checks for loss
	checkForLoss: function(){
		if(this.guessesRemaining === 0) {
			pauseMusic("v");
			return true;
		}
		else
			return false;
	},

	//checks for end of game
	checkForEndGame: function(){
		if(this.checkForLoss() === true || this.solvedPuzzle === true)
			return true;
		else
			return false;
	},

	//resets board
	resetBoard: function(){
		this.charactersOfSelectedWord = [];
		this.selectedWord = ""; 
		this.stringOfUnderlines = "";
		this.userChoices = ""; 
		this.wrongLettersGuessed = "";
		this.wrongLettersGuessedArray = [];
		this.allLettersGuessedArray = [];
		this.guessesRemaining = 8; 
		this.solvedPuzzle = false;
		$("#current_word").empty();
		$("#letters_guessed").empty();
		$("#wins").empty();
	}
};

document.onkeyup = function(event) {
	game.setGame();
	game.dissolveNewBoard();
	document.onkeyup = function(event) {
		var dummy = event.key;
		game.getUserInput();
		if(game.checkUserInput() === true) {
			if(game.checkRepeatedLetter() === false) {
				if(game.checkCorrectLetter() === false) {
					game.dissolveIncorrectLetter();
				}
				else
					game.dissolveCorrectLetter();
			}
			game.checkForVictory();
			if(game.checkForEndGame()) {
				game.resetBoard();
				game.setGame();
				game.dissolveNewBoard();
			}
		}
		game.resetUserInput();
	}
}