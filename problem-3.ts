//problem 3 -Create a TypeScript function called countWordOccurrences that
// accepts a sentence (string) and a word (string).
// The function should return the number of times the word appears in the sentence, 
//ignoring case. Use the simple sentence without punctuation as input.

function countWordOccurrences(sentence: string, word: string) {
    //ignoring case
    const ignoredCaseSentence: string = sentence.toLowerCase();
    const ignoredCaseWord: string = word.toLowerCase();

    console.log({ ignoredCaseSentence, ignoredCaseWord });

    const sentenceInWord: string[] = ignoredCaseSentence.split(" ");

    // console.log(sentenceInWord); //got the array


    const repeatedWordArray: string[] = sentenceInWord.filter((word: string) => {
        // console.log({ word });
        return word === ignoredCaseWord;
    });

    // console.log(repeatedWordArray);
    return repeatedWordArray.length;

}

const repeatedTimes = countWordOccurrences('She said she would call but she never did call even though she promised to call again', 'call');
console.log(repeatedTimes);