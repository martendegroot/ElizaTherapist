export default class MyClass {
    constructor() {
        this._phrases = require('./phrases');
    }
    
    read(input) {
        const response = this._lookForResponse(input);
        return this._respond(response);
    }

    _lookForResponse(userInput) {
        for (const t in this._phrases.phraseMap) {
            const regExp = new RegExp('[^.]*' + t + '\\b\\W?([^.]*)', 'i');
            if (regExp.test(userInput)) {
                return {
                    userInput: regExp.exec(userInput)[1],
                    responses: this._phrases.phraseMap[t]
                };
            }
        }
        return { responses: this._phrases.events.noMatch };
    }

    _respond(output) {
        let choice = Math.floor(Math.random() * output.responses.length);
        let answer = output.responses[choice];

        const token = "<" + answer.charAt(answer.length - 1);
        if (token === '<*' || token === '<@') {
            const reply = ' ' + this._conjugate(output.userInput) + ((token === '<*') ? '?' : '.');
            answer = answer.replace(token, reply);
        }

        return answer;
    }

    _conjugate(str) {
        const conjugationKeys = Object.keys(this._conjugations);
        const splitStr = str.split(" ");
        this._reConjugate(conjugationKeys, splitStr);

        str = splitStr.join(" ");
        for (const c in this._corrections) {
            str = str.replace(c, this._corrections[c]);
        }

        return str;
    }

    _reConjugate(conjugationKeys, strArray) {
        let con = conjugationKeys.shift();
        if (con !== undefined) {
            const regExp = new RegExp('\\b' + con + '\\b', 'i'),
                matches = [];
            for (let s = 0; s < strArray.length; s++) {
                if (regExp.test(strArray[s])) matches.push(s);
            }
            this._reConjugate(conjugationKeys, strArray);
            for (let m of matches) {
                strArray[m] = strArray[m].replace(regExp, this._conjugations[con]);
            }
        }
        return;
    }

    _conjugations = {
        "are": "am",
        "am": "are",
        "were": "was",
        "was": "were",
        "I": "you",
        "me": "you",
        "you": "me",
        "my": "your",
        "your": "my",
        "mine": "your's",
        "your's": "mine",
        "I'm": "you're",
        "you're": "I'm",
        "I've": "you've",
        "you've": "I've",
        "I'll": "you'll",
        "you'll": "I'll",
        "myself": "yourself",
        "yourself": "myself"
    }

    _corrections = {
        "me am": "I am",
        "am me": "am I",
        "me can": "I can",
        "can me": "can I",
        "me have": "I have",
        "me will": "I will",
        "will me": "will I",
    }
}
