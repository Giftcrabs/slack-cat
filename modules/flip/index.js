'use strict';

const flipTable = {
        "a" : "ɐ", "b" : "q", "c" : "ɔ", "d" : "p", "e" : "ǝ", "f" : "ɟ", "g" : "ƃ", "h" : "ɥ",
        "i" : "ı", "j" : "ɾ", "k" : "ʞ", "l" : "ן", "m" : "ɯ", "n" : "u", "r" : "ɹ", "s": "s", "t" : "ʇ",
        "v" : "ʌ", "w" : "ʍ", "y" : "ʎ", "." : "˙", "[" : "]", "(" : ")", "{" : "}", "?" : "¿",
        "!" : "¡", "'" : ",", "<" : ">", "_" : "‾", "\"" : "„", "\\" : "/", "/" : "\\", ";" : "؛",
        "‿" : "⁀", "⁅" : "⁆", "∴" : "∵", "ɐ" : "a", "q" : "b", "ɔ" : "c", "p" : "d", "ǝ" : "e",
        "ɟ" : "f", "ƃ" : "g", "ɥ" : "h", "ı" : "i", "ɾ" : "j", "ʞ" : "k", "ן" : "l", "ɯ" : "m",
        "u" : "n", "ɹ" : "r", "ʇ" : "t", "ʌ" : "v", "ʍ" : "w", "ʎ" : "y", "˙" : ".", "]" : "[",
        ")" : "(", "}" : "{", "¿" : "?", "¡" : "!", "," : "'", ">" : "<", "‾" : "_", "„" : "\"",
        "؛" : ";", "⁀" : "‿", "⁆" : "⁅", "∵" : "∴", "1" : "Ɩ", "Ɩ" : "1", "2" : "ᄅ", "ᄅ" : "2",
        "3" : "Ɛ", "Ɛ" : "3", "4" : "ㄣ", "ㄣ" : "4", "5" : "ϛ", "ϛ" : "5", "6" : "9", "7" : "ㄥ",
        "9" : "6", "?" : "¿", "¿" : "?", "!" : "¡", "¡" : "!",
        "&" : "⅋"
};

module.exports = class Flip extends BaseModule {
  handle(data) {
    this.bot.postMessage(
      data.channel, 
      this.getFlippedString(data.user_text)    
    );  
  }


  getFlippedString(text) {
  	const chars = text.split('').reverse();
  	let output = "";

  	chars.forEach(char => {
  		output += flipTable[char];
  	});

    return `(╯°□°）╯︵ ┻━${output}━┻`  	
  }

  help() {
    return "Usage: `?flip <text>`";
  }
};