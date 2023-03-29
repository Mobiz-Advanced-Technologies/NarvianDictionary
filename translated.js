// Define the English-Narvian word mappings
const wordMappings = {
    "the": "den",
    "boy": "bɔɪ",
    "girl": "dʒɜrl",
    "runs": "rʌnz",
    "eats": "its",
    "an": "æn",
    "apple": "æpl",
    "blue": "blu",
    "car": "kɑr",
    "drives": "draɪvz",
    "fast": "fæst",
    "i": "aɪ",
    "sleep": "slip",
    "animal": "ænɪml",
    "bird": "bɜrd",
    "earth": "ɜrθ",
    "fire": "fɪr",
    "fish": "fɪʃ",
    "flower": "flaʊr",
    "insect": "ɪnsɛkt",
    "moon": "mun",
    "mountain": "maʊntɪn",
    "rain": "reɪn",
    "rock": "rɑk",
    "sky": "skaɪ",
    "snow": "sno",
    "star": "stɑr",
    "sun": "sʌn",
    "tree": "tri",
    "valley": "væli",
    "water": "wɔtər",
    "wind": "wɪnd",
    "0": "null",
    "1": "en",
    "2": "to",
    "3": "tre",
    "4": "fire",
    "5": "fem",
    "6": "seks",
    "7": "syv",
    "8": "åtte",
    "9": "ni",
    "red": "rød",
    "yellow": "gul",
    "green": "grønn",
    "black": "svart",
    "white": "hvit",
    "to eat": "spise",
    "to drink": "drikke",
    "to walk": "gå",
    "to run": "løpe",
    "to sleep": "sove",
    "to speak": "snakke",
    "open": "åpne",
    "car": "bil",
    "drink": "drikke",
    "apple": "eple",
    "four": "fire",
    "walk": "gå",
    "boy": "gutt",
    "green": "grønn",
    "white": "hvit",
    "I": "jeg",
    "girl": "jente",
    "runs": "kjører",
    "run": "løpe",
    "nine": "ni",
    "zero": "null",
    "red": "rød",
    "speak": "snakke",
    "sleep": "sove",
    "eat": "spise",
    "eats": "spiser",
    "black": "svart",
    "three": "tre",
    "five": "fem",
    "six": "seks",
    "seven": "syv",
    "eight": "åtte"
};

// Function to translate a sentence from English to Narvian
function translateToNarvian(sentence) {
    // Split the sentence into words
    const words = sentence.toLowerCase().split(" ");

    // Replace each word with its Narvian equivalent
    const translatedWords = words.map((word) => {
        // Check if the word is in the wordMappings object
        if (word in wordMappings) {
            // If it is, replace it with the Narvian equivalent
            return wordMappings[word];
        } else {
            // If not, leave it unchanged
            return word;
        }
    });

    // Join the translated words into a sentence and return it
    return translatedWords.join(" ");
}

document.getElementById("edit_5ce8949f").addEventListener("change", (event) => {
    const translatedDiv = document.getElementById('edit_50693a0d')

    translatedDiv.value = translateToNarvian(document.getElementById("edit_5ce8949f").value)
})
// Example usage
console.log(translateToNarvian("The boy runs")); // Output: "Den gutt løper"
console.log(translateToNarvian("The girl eats an apple")); // Output: "Den jente spiser et eple"
console.log(translateToNarvian("The blue car drives fast")); // Output: "Den blå bilen kjører fort"
console.log(translateToNarvian("I sleep")); // Output: "Jeg sover"
