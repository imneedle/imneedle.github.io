(() => {
    'use strict';

    /* Choices containers*/
    const langChoicesContainer = document.querySelector(
        '.choices[data-mode="lang"]'
    );
    const modeChoicesContainer = document.querySelector(
        '.choices[data-mode="mode"]'
    );
    const timeChoicesContainer = document.querySelector(
        '.choices[data-mode="time"]'
    );
    const wordsChoicesContainer = document.querySelector(
        '.choices[data-mode="words"]'
    );
    const codeChoicesContainer = document.querySelector(
        '.choices[data-mode="code"]'
    );
    const dataModeMap = new Map([
        ['time', timeChoicesContainer],
        ['words', wordsChoicesContainer],
        ['code', codeChoicesContainer],
    ]);

    const langChoices = langChoicesContainer.querySelectorAll('.choice');
    const modeChoices = modeChoicesContainer.querySelectorAll('.choice');
    const timeChoices = timeChoicesContainer.querySelectorAll('.choice');
    const wordsChoices = wordsChoicesContainer.querySelectorAll('.choice');
    const codeChoices = codeChoicesContainer.querySelectorAll('.choice');
    const activeChoices = document.getElementsByClassName('choice--active');

    /* Menu option indices */
    const langIdx = 0;
    const modeIdx = 1;
    const timeIdx = 2;
    const wordsIdx = 3;
    const codeIdx = 5;

    /* Stats containers */
    const timerElement = document.querySelector('.timer span');

    /* Typing containers */
    const wordsContainer = document.querySelector('.words');
    const inputField = document.querySelector('.typing-input-field');

    let generator;

    const validMenuClick = (target) => {
        return target.classList.contains('choice');
    };

    const makeTargetActive = (
        choices,
        target,
        classAttr = 'choice--active'
    ) => {
        choices.forEach((choice) => choice.classList.remove(classAttr));
        target?.classList.add(classAttr);
    };

    const getAndWriteTotalTime = () => {
        if (activeChoices[modeIdx].textContent === 'Time')
            timerElement.textContent = activeChoices[timeIdx].textContent;
        else timerElement.textContent = 0;
    };

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const getRandomEnglishWord = function* () {
        const max = englishWords.length - 1;
        yield englishWords[randomNumber(0, max)];
    };

    const getRandomEnglishQuote = function* () {
        const max = englishQuotes.length - 1;
        yield englishQuotes[randomNumber(0, max)];
    };

    const getRandomFrenchWord = function* () {
        const max = frenchWords.length - 1;
        yield frenchWords[randomNumber(0, max)];
    };

    const getRandomFrenchQuote = function* () {
        const max = frenchQuotes.length - 1;
        yield frenchQuotes[randomNumber(0, max)];
    };

    const getRandomCode = function* () {
        yield 'TODO :)';
    };

    const insertText = (text) => {
        wordsContainer.insertAdjacentHTML(
            'beforeend',
            text
                .split(' ')
                .map(
                    (word) =>
                        `<div class="word">${word
                            .split('')
                            .map(
                                (letter) =>
                                    `<span class="letter">${letter}</span>`
                            )
                            .join('')}</div>`
                )
                .join('')
        );
    };

    const addWords = (e) => {
        if (e.data === ' ') insertText(generator().next().value);
    };

    const initWords = () => {
        wordsContainer.innerHTML = '';
        if (activeChoices[langIdx].textContent === 'English') {
            generator =
                activeChoices[modeIdx].textContent === 'Quote'
                    ? getRandomEnglishQuote
                    : getRandomEnglishWord;
        } else {
            generator =
                activeChoices[modeIdx].textContent === 'Quote'
                    ? getRandomFrenchQuote
                    : getRandomFrenchWord;
        }

        if (activeChoices[modeIdx].textContent === 'Code')
            generator = getRandomCode;

        let generatorCounter;
        if (activeChoices[modeIdx].textContent === 'Time')
            generatorCounter = 30;
        else if (activeChoices[modeIdx].textContent === 'Words')
            generatorCounter = Number(activeChoices[wordsIdx].textContent);
        else generatorCounter = 1;

        for (let i = 0; i < generatorCounter; i++) {
            insertText(generator().next().value);
        }

        if (activeChoices[modeIdx].textContent === 'Quote') {
            wordsContainer.style.maxHeight = 'max-content';
        } else wordsContainer.style.maxHeight = '12rem';

        if (activeChoices[modeIdx].textContent === 'Time') {
            inputField.addEventListener('input', addWords);
        } else inputField.removeEventListener('input', addWords);
    };

    langChoicesContainer.addEventListener('click', (e) => {
        if (!validMenuClick(e.target)) return;
        makeTargetActive(langChoices, e.target);
        getAndWriteTotalTime();
        initWords();
    });
    modeChoicesContainer.addEventListener('click', (e) => {
        if (!validMenuClick(e.target)) return;
        makeTargetActive(modeChoices, e.target);
        makeTargetActive(
            dataModeMap,
            dataModeMap.get(e.target.textContent.toLowerCase()),
            'active'
        );
        getAndWriteTotalTime();
        initWords();
    });
    timeChoicesContainer.addEventListener('click', (e) => {
        if (!validMenuClick(e.target)) return;
        makeTargetActive(timeChoices, e.target);
        getAndWriteTotalTime();
        initWords();
    });
    wordsChoicesContainer.addEventListener('click', (e) => {
        if (!validMenuClick(e.target)) return;
        makeTargetActive(wordsChoices, e.target);
        getAndWriteTotalTime();
        initWords();
    });
    codeChoicesContainer.addEventListener('click', (e) => {
        if (!validMenuClick(e.target)) return;
        makeTargetActive(codeChoices, e.target);
        getAndWriteTotalTime();
        initWords();
    });

    getAndWriteTotalTime();
    initWords();
})();
