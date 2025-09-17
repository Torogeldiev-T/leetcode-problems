function isNumericChar(char) {
  return !isNaN(Number(char));
}

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';

        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];
            let length = str.length;
            // пометим длину строки
            res += length;
            // пометим разделитель non-utf , чтобы различать длину строки от обычных цифр
            res += 'а';
            res += str;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];

        let currString = '';

        let lengthOfStringString = '';
        let lengthOfString = '';

        let lengthIterating = true;

        for (let i = 0; i < str.length; i++) {
            // тут мы собираем длину нашей строки
            if(isNumericChar(str[i])) {
                if (lengthIterating) {
                    lengthOfStringString += str[i];
                    continue;
                }
            }

            lengthOfString = Number(lengthOfStringString);

            // если нашли разделитель значит дальше будет начинаться
            // - сама строка
            // - или начало новой длины
            if (str[i] == 'а'){
                lengthIterating = false;

                if (lengthOfString == 0) {
                    res.push(currString);
                    lengthOfStringString = '';
                    currString = '';
                    lengthIterating = true;
                }
                continue;
            }

            currString += str[i];

            // добавим стоку в массив если достигли конца строки
            if (currString.length == lengthOfString) {
                res.push(currString);
                lengthOfStringString = '';
                currString = '';
                lengthIterating = true;
            }
        }

        return res;
    }
}
