(() => {
    const typingSection = document.querySelector('.section-typing');
    const wordsContainer = document.querySelector('.words');
    const inputField = document.querySelector('.typing-input-field');
    const caret = document.querySelector('#caret');
    const activeModeElement = document
        .querySelector('.choices[data-mode="mode"]')
        .getElementsByClassName('choice--active');

    const timerContainer = document.querySelector('.timer');
    const accuracyContainer = document.querySelector('.accuracy');
    const mistakesContainer = document.querySelector('.mistakes');
    const wpmContainer = document.querySelector('.wpm');
    const restartBtn = document.querySelector('.btn--restart');

    const timerElement = document.querySelector('.timer span');
    const accuracyElement = document.querySelector('.accuracy span');
    const mistakesElement = document.querySelector('.mistakes span');
    const wpmElement = document.querySelector('.wpm span');

    let words = document.getElementsByClassName('word');
    let wordChildren;
    let charElement;
    let wordIdx = 0;
    let charIdx = 0;
    let currentWordOffset;
    let offsetCounter = 1;
    let offset;

    let totalMistakes = 0;
    let wpm = 0;
    let accuracy = 0;

    let timer;
    let totalTime = Number(timerElement.textContent);
    let timeElapsed;

    const startTimer = () => {
        totalTime = Number(timerElement.textContent);
        timeElapsed = 0;
        const leftSide =
            document
                .querySelector('.choices[data-mode="mode"]')
                .querySelector('.choice--active').textContent === 'Time'
                ? totalTime
                : 0;
        timer = setInterval(() => {
            timeElapsed++;
            timerElement.textContent = Math.abs(leftSide - timeElapsed);
            if (timeElapsed === totalTime) {
                inputField.removeEventListener('input', checkLastTypedChar);
                clearInterval(timer);
                updateStats();
            }
        }, 1000);
        inputField.removeEventListener('input', startTimer);
    };

    const placeCaret = (after = true) => {
        if (!charElement) return;

        let rect = charElement.getBoundingClientRect();
        let top = rect.top;
        let left = rect.left;
        let charWidth = Number.parseFloat(
            window.getComputedStyle(charElement).width
        );
        caret.style = `top: ${top}px; left: ${left + after * charWidth - 2}px`;
    };

    const resetTyping = (e) => {
        if (e && !e?.target.classList.contains('choice')) return;
        timerContainer.classList.remove('hidden');
        accuracyContainer.classList.add('hidden');
        mistakesContainer.classList.add('hidden');
        wpmContainer.classList.add('hidden');
        typingSection.classList.remove('hidden');
        totalTime = Number(timerElement.textContent);
        timerElement.textContent = totalTime;
        offsetCounter = 1;

        wordIdx = 0;
        charIdx = 0;
        wordChildren = words[wordIdx].children;
        wordChildren.realLength = wordChildren.length;
        words[wordIdx].classList.add('word--active');

        currentWordOffset = words[wordIdx].getBoundingClientRect().y;

        timer && clearInterval(timer);
        timeElapsed = 0;

        totalMistakes = 0;
        wpm = 0;
        accuracy = 0;

        charElement = wordChildren[charIdx];
        inputField.value = '';

        placeCaret(false);

        inputField.removeEventListener('input', checkLastTypedChar);
        inputField.addEventListener('input', checkLastTypedChar);
        inputField.removeEventListener('input', startTimer);
        inputField.addEventListener('input', startTimer);
    };

    const validTypedChar = (typedChar, currentChar) => {
        return typedChar === currentChar;
    };

    const endOfWord = () => {
        return charIdx === wordChildren.realLength;
    };

    const correctWord = () => {
        for (let i = 0; i < wordChildren.length; i++)
            if (wordChildren[i].classList.contains('letter--incorrect'))
                return false;
        return true;
    };

    const goToPreviousWord = () => {
        words[wordIdx--].classList = 'word';
        wordChildren = words[wordIdx].children;
        words[wordIdx].className = 'word word--active';
        currentWordOffset = words[wordIdx].getBoundingClientRect().y;

        let i;
        for (i = wordChildren.length - 1; i >= 0; i--)
            if (wordChildren[i].className !== 'letter') break;
        i++;
        charIdx = i;
        charElement = wordChildren[charIdx - 1];
    };

    const finishedTyping = () => {
        if (wordIdx !== words.length - 1) return false;
        for (let i = 0; i < wordChildren.length; i++)
            if (!wordChildren[i].classList.contains('letter--correct'))
                return false;
        return true;
    };

    const handleBackSpace = () => {
        if (charIdx === 0) {
            if (wordIdx === 0) return;
            if (words[wordIdx - 1].classList.contains('word--incorrect')) {
                goToPreviousWord();
                offset = true;
            }
            return;
        }
        charElement = wordChildren[--charIdx];
        if (charElement.classList.contains('letter--extra')) {
            charElement.remove();
            charElement = wordChildren[charIdx - 1];
            offset = true;
        } else {
            charElement.className = 'letter';
            offset = false;
        }
    };

    const handleSpace = () => {
        if (!endOfWord() || !correctWord()) {
            words[wordIdx].classList.add('word--incorrect');
            totalMistakes++;
        }

        if (wordIdx === words.length - 1) {
            return;
        }

        words[wordIdx].classList.remove('word--active');
        wordChildren = words[++wordIdx].children;
        wordChildren.realLength = wordChildren.length;
        words[wordIdx].classList.add('word--active');
        charIdx = 0;
        charElement = wordChildren[charIdx];
        if (
            activeModeElement[0].textContent != 'Quote' &&
            currentWordOffset !== words[wordIdx].getBoundingClientRect().y
        ) {
            Array.prototype.forEach.call(
                words,
                (word) =>
                    (word.style = `transform: translateY(-${
                        offsetCounter * 4
                    }rem);`)
            );
            offsetCounter++;
            currentWordOffset = words[wordIdx].getBoundingClientRect().y;
        }
        offset = false;
    };

    const handleLetter = (typedChar) => {
        if (charIdx >= wordChildren.realLength) {
            charElement = wordChildren[--charIdx];
            charElement.insertAdjacentHTML(
                'afterend',
                `<span class="letter letter--extra letter--incorrect">${typedChar}</span>`
            );
            charElement = wordChildren[++charIdx];
            totalMistakes++;
        } else if (!validTypedChar(typedChar, charElement.textContent)) {
            charElement.classList.add('letter--incorrect');
            totalMistakes++;
        } else charElement.classList.add('letter--correct');
        charIdx++;
        offset = true;
    };

    const getTypingStats = () => {
        let totalTyped = 0;
        let remainingMistakes = 0;
        for (let i = 0; i < words.length; i++) {
            let children = words[i].children;
            for (let j = 0; j < children.length; j++) {
                if (children[j].className === 'letter') break;
                if (children[j].classList.contains('letter--incorrect'))
                    remainingMistakes++;
                totalTyped++;
            }
        }
        return [totalTyped, remainingMistakes];
    };

    const updateStats = () => {
        const [totalTyped, remainingMistakes] = getTypingStats();
        accuracy = (((totalTyped - totalMistakes) / totalTyped) * 100).toFixed(
            1
        );
        wpm = ((totalTyped - 4 * remainingMistakes) / (4 * timeElapsed)) * 60;
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm.toFixed(1);

        timerContainer.classList.add('hidden');
        accuracyContainer.classList.remove('hidden');
        mistakesContainer.classList.remove('hidden');
        wpmContainer.classList.remove('hidden');
        typingSection.classList.add('hidden');
        accuracyElement.textContent = accuracy;
        mistakesElement.textContent = totalMistakes;
        wpmElement.textContent = wpm;
    };

    const checkLastTypedChar = (e) => {
        charElement = wordChildren[charIdx];
        if (e.inputType === 'deleteContentBackward') {
            handleBackSpace();
        } else if (e.data === ' ') {
            handleSpace();
        } else {
            handleLetter(e.data);
        }
        if (finishedTyping()) {
            inputField.removeEventListener('input', checkLastTypedChar);
            updateStats();
            clearTimeout(timer);
        }
        placeCaret(offset);
    };

    resetTyping();
    inputField.addEventListener('input', checkLastTypedChar);

    inputField.addEventListener('input', startTimer);

    document
        .querySelector('.header-menu')
        .addEventListener('click', resetTyping);

    document.addEventListener('click', () => inputField.focus());
    document.addEventListener('keydown', (e) => {
        console.log(e);
        if (e.code === 'Tab') {
            e.preventDefault();
            restartBtn.focus();
        }
    });
    restartBtn.addEventListener('focus', () => {
        activeModeElement[0].click();
    });
    restartBtn.addEventListener('click', () => activeModeElement[0].click());
})();
