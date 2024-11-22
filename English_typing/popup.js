import { $ } from "./Arrow/dom.mjs";
import { useState } from "./Arrow/arow.mjs";
import { keyCountAlert } from "./Arrow/alert.mjs";
import { words_ } from "./data/words_0.mjs";

// selecting elements
const output = $("#output");
const input = $("#input");
const keyCount = $("#keyCount");
const wordCount = $("#wordCount");
const wrongCount = $("#wrongCount");
const wordsType = $("#wordsType");
const clear = $("#clear");
const info = $("#info");

// creating states
const [words, setWords] = useState(words_());
const [count, setCount] = useState(0);
const [keyCountValue, setKeyCountValue] = useState(0);
const [wordCountValue, setWordCountValue] = useState(0);
const [wrongCountValue, setWrongCountValue] = useState(0);

// adding first word to output
output.textContent = words()[count()];
// adding key count to keyCount
keyCount.textContent = keyCountValue();
// adding word count to wordCount
wordCount.textContent = wordCountValue();
// adding wrong count to wrongCount
wrongCount.textContent = wrongCountValue();

// Getting key count from chrome storage
chrome.storage.local.get(["key_count"], (result) => {
    setKeyCountValue(result.key_count); 
    keyCount.textContent = keyCountValue().toString().padStart(3, '0');
});

// Getting word count from chrome storage
chrome.storage.local.get(["word_count"], (result) => {
    setWordCountValue(result.word_count);
    wordCount.textContent = wordCountValue().toString().padStart(3, '0');
});

// Getting wrong count from chrome storage
chrome.storage.local.get(["wrong_count"], (result) => {
    setWrongCountValue(result.wrong_count);
    wrongCount.textContent = wrongCountValue().toString().padStart(3, '0');
});

// event listener for words type
wordsType.addEventListener("change", (e) => {setWords(words_(wordsType.value))});


// event listener for input
input.addEventListener("input", () => {
    let inputValue = input.value;
    let outputValue = output.textContent;

    // Increment key count
    setKeyCountValue(keyCountValue() + 1);
    keyCount.textContent = keyCountValue().toString().padStart(4, '0');
    // saving key count to chrome storage
    chrome.storage.local.set({ key_count: keyCountValue() });
    chrome.storage.local.get(["key_count"]);
    keyCountAlert(keyCountValue());

    
    
    // chack if input value is equal to output value
    if (inputValue === outputValue) {
        if (count() < words().length - 1) {
            setCount(count() + 1);
            output.textContent = words()[count()];
            input.value = "";

            // Increment word count
            setWordCountValue(wordCountValue() + 1);
            wordCount.textContent = wordCountValue().toString().padStart(3, '0');
            // saving word count to chrome storage
            chrome.storage.local.set({ word_count: wordCountValue() });
            chrome.storage.local.get(["word_count"]);

        }
        else {
            setCount(0);
            output.textContent = words()[0];
            input.value = "";
        }
    }
    else {
        if (inputValue.length != 0) {
            // show if input value is not equal to output value
            for (let i = 0; i < inputValue.length; i++) {
                if (inputValue[i] !== outputValue[i]) {
                    output.style.color = "var(--red)";
                    // Increment wrong count
                    setWrongCountValue(wrongCountValue() + 1);
                    wrongCount.textContent = wrongCountValue().toString().padStart(3, '0');
                    // saving wrong count to chrome storage
                    chrome.storage.local.set({ wrong_count: wrongCountValue() });
                    chrome.storage.local.get(["wrong_count"]);
                }
                else {
                    output.style.color = "var(--fg)";
                }
            }
        }
    }
})

clear.addEventListener("click", () => {
    input.value = "";
    output.textContent = words()[0];

    chrome.storage.local.set({ key_count: 0 });
    chrome.storage.local.set({ word_count: 0 });
    chrome.storage.local.set({ wrong_count: 0 });

    chrome.storage.local.get(["key_count"]);
    chrome.storage.local.get(["word_count"]);
    chrome.storage.local.get(["wrong_count"]);

    keyCount.textContent = 0;
    wordCount.textContent = 0;
    wrongCount.textContent = 0;
})

info.addEventListener("click", () => {
    alert("English typing 1.0 created by Akash")
})