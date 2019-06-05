// div section

function getSound (animal) {
	switch (animal) {
		case "Lion":
			return 'http://soundbible.com/mp3/Growling%20Lion-SoundBible.com-495747737.mp3';
		case "Elephant":
			return 'http://soundbible.com/mp3/Elephant-SoundBible.com-551032783.mp3';
		case "Giraffe":
			return 'https://retired.sounddogs.com/previews/2185/mp3/100607_SOUNDDOGS__an.mp3';
		case "Bear":
			return 'http://soundbible.com/mp3/Black%20Bear%20Cub%20Call-SoundBible.com-935311457.mp3';
		case "Goat":
			return 'http://soundbible.com/mp3/Bleat-SoundBible.com-893851569.mp3';
		case "Tiger":
			return 'http://soundbible.com/mp3/Cat%20Meow-SoundBible.com-1977450526.mp3';
		case "Panda":
			return 'http://soundbible.com/mp3/Bear%20And%20Ber%20Cubs-SoundBible.com-956087662.mp3';
		case "Raccoon":
			return 'http://soundbible.com/mp3/Raccoon-J_Dawg-688727657.mp3';
	}
}


function handleClick (section) {
	var animal = section.children[1].textContent;
	var audio = new Audio(getSound(animal));
	audio.play();
}

function main () {
	Array.from(document.getElementsByClassName("section")).forEach(function (section) {
		section.onclick = handleClick.bind(undefined, section)
	})
}

window.onload = main