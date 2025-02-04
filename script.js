document.addEventListener('DOMContentLoaded', function() {
    const sentences = [
        "The quick brown fox jumps over the lazy dog.",
        "All good things come to those who wait.",
        "To be or not to be, that is the question.",
        "A journey of a thousand miles begins with a single step.",
        "Every moment is a fresh beginning.",
        "Stay hungry, stay foolish.",
        "You only live once, but if you do it right, once is enough.",
        "May the Force be with you.",
        "In the midst of chaos, there is also opportunity.",
        "Hello, world! Welcome to your typing practice session! 🚗"
    ];

    let originalText = getRandomSentence();
    let typedText = document.getElementById('inputText');
    let displayText = document.getElementById('displayText');
    let speedDisplay = document.getElementById('speed');
    let accuracyDisplay = document.getElementById('accuracy');
    let startTime, endTime;

    displayText.textContent = originalText;
    typedText.addEventListener('input', handleInput);

    function getRandomSentence() {
        return sentences[Math.floor(Math.random() * sentences.length)];
    }

    function handleInput() {
        if (!startTime) {
            startTime = new Date();
        }
        updateStats();
        updateCarPosition();
        highlightCurrentWordAccuracy();
    }

    function calculateTime() {
        endTime = new Date();
        let timeDiff = (endTime - startTime) / 60000; // time in minutes
        let wordsTyped = typedText.value.trim().split(" ").length;
        let speed = Math.round(wordsTyped / timeDiff);
        speedDisplay.textContent = speed;
        return speed;
    }

    function calculateAccuracy() {
        let typedValue = typedText.value;
        let errorCount = 0;
        originalText.split('').forEach((char, index) => {
            if (index < typedValue.length && char !== typedValue[index]) errorCount++;
        });
        let accuracy = ((typedValue.length - errorCount) / originalText.length) * 100;
        accuracyDisplay.textContent = accuracy.toFixed(2);
        return accuracy;
    }

    function updateCarPosition() {
        const words = originalText.split(" ");
        const typedWords = typedText.value.trim().split(" ").filter(word => word !== "");
        let correctWordsCount = 0;

        typedWords.forEach((typedWord, index) => {
            if (index < words.length && words[index] === typedWord) {
                correctWordsCount++;
            }
        });

        let progressPercentage = (correctWordsCount / words.length) * 100;
        document.getElementById('playerCar').style.right = `${100 - progressPercentage}%`;
        document.getElementById('computerCar').style.right = `${Math.max(100 - progressPercentage - 5, 0)}%`; // Adjust for computer's challenge level
    }

    function highlightCurrentWordAccuracy() {
        const words = originalText.split(" ");
        const typedWords = typedText.value.trim().split(" ");
        if (typedWords.length <= words.length) {
            const currentWordIndex = typedWords.length - 1;
            const currentTypedWord = typedWords[currentWordIndex];

            if (words[currentWordIndex] === currentTypedWord) {
                typedText.style.backgroundColor = "#b0ffb0"; // Light green for correct
            } else {
                typedText.style.backgroundColor = "#ffb0b0"; // Light red for incorrect
            }
        } else {
            typedText.style.backgroundColor = "#ffcccc"; // Lighter red if extra words typed
        }
    }

    function restart() {
        originalText = getRandomSentence();
        typedText.value = "";
        startTime = null;
        displayText.textContent = originalText;
        speedDisplay.textContent = '0';
        accuracyDisplay.textContent = '100';
        document.getElementById('playerCar').style.right = "100%";
        document.getElementById('computerCar')..style.right = "100%";
        typedText.style.backgroundColor = ""; // Reset background color
    }

    document.getElementById('restartButton').addEventListener('click', restart);
    document.getElementById('doneButton').addEventListener('click', displaySummary);

    function displaySummary() {
        const finalSpeed = calculateTime();
        const finalAccuracy = calculateAccuracy();
        document.getElementById('finalSpeed').textContent = finalSpeed;
        document.getElementById('finalAccuracy').textContent = finalAccuracy.toFixed(2);
        document.getElementById('feedback').textContent = getFeedback(finalAccuracy);
        document.getElementById('summaryBox').classList.remove('hidden');
        document.getElementById('summaryBox').classList.add('visible');
    }

    function getFeedback(accuracy) {
        if (accuracy > 95) {
            return "Excellent job! Keep up the great work!";
        } else if (accuracy > 75) {
            return "Good effort, but there's room for improvement!";
        } else {
            return "Keep practicing, you'll get better!";
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const sentences = [
        "The quick brown fox jumps over the lazy dog.",
        "All good things come to those who wait.",
        "To be or not to be, that is the question.",
        "A journey of a thousand miles begins with a single step.",
        "Every moment is a fresh beginning.",
        "Stay hungry, stay foolish.",
        "You only live once, but if you do it right, once is enough.",
        "May the Force be with you.",
        "In the midst of chaos, there is also opportunity.",
        "Hello, world! Welcome to your typing practice session! 🚗"
    ];

    let originalText = getRandomSentence();
    let typedText = document.getElementById('inputText');
    let displayText = document.getElementById('displayText');
    let speedDisplay = document.getElementById('speed');
    let accuracyDisplay = document.getElementById('accuracy');
    let startTime, endTime;

    displayText.textContent = originalText;
    typedText.addEventListener('input', handleInput);

    function getRandomSentence() {
        return sentences[Math.floor(Math.random() * sentences.length)];
    }

    function handleInput() {
        if (!startTime) {
            startTime = new Date();
        }
        updateStats();
        updateCarPosition();
        highlightCurrentWordAccuracy();
    }

    function calculateTime() {
        endTime = new Date();
        let timeDiff = (endTime - startTime) / 60000; // time in minutes
        let wordsTyped = typedText.value.trim().split(" ").length;
        let speed = Math.round(wordsTyped / timeDiff);
        speedDisplay.textContent = speed;
        return speed;
    }

    function calculateAccuracy() {
        let typedValue = typedText.value;
        let errorCount = 0;
        originalText.split('').forEach((char, index) => {
            if (index < typedValue.length && char !== typedValue[index]) errorCount++;
        });
        let accuracy = ((typedValue.length - errorCount) / originalText.length) * 100;
        accuracyDisplay.textContent = accuracy.toFixed(2);
        return accuracy;
    }

    function updateCarPosition() {
        const words = originalText.split(" ");
        const typedWords = typedText.value.trim().split(" ").filter(word => word !== "");
        let correctWordsCount = 0;

        typedWords.forEach((typedWord, index) => {
            if (index < words.length && words[index] === typedWord) {
                correctWordsCount++;
            }
        });

        let progressPercentage = (correctWordsCount / words.length) * 100;
        document.getElementById('playerCar').style.right = `${100 - progressPercentage}%`;
        document.getElementById('computerCar').style.right = `${Math.max(100 - progressPercentage - 5, 0)}%`; // Adjust for computer's challenge level
    }

    function highlightCurrentWordAccuracy() {
        const words = originalText.split(" ");
        const typedWords = typedText.value.trim().split(" ");
        if (typedWords.length <= words.length) {
            const currentWordIndex = typedWords.length - 1;
            const currentTypedWord = typedWords[currentWordIndex];

            if (words[currentWordIndex] === currentTypedWord) {
                typedText.style.backgroundColor = "#b0ffb0"; // Light green for correct
            } else {
                typedText.style.backgroundColor = "#ffb0b0"; // Light red for incorrect
            }
        } else {
            typedText.style.backgroundColor = "#ffcccc"; // Lighter red if extra words typed
        }
    }

    function restart() {
        originalText = getRandomSentence();
        typedText.value = "";
        startTime = null;
        displayText.textContent = originalText;
        speedDisplay.textContent = '0';
        accuracyDisplay.textContent = '100';
        document.getElementById('playerCar').style.right = "100%";
        document.getElementById('computerCar')..style.right = "100%";
        typedText.style.backgroundColor = ""; // Reset background color
    }

    document.getElementById('restartButton').addEventListener('click', restart);
    document.getElementById('doneButton').addEventListener('click', displaySummary);

    function displaySummary() {
        const finalSpeed = calculateTime();
        const finalAccuracy = calculateAccuracy();
        document.getElementById('finalSpeed').textContent = finalSpeed;
        document.getElementById('finalAccuracy').textContent = finalAccuracy.toFixed(2);
        document.getElementById('feedback').textContent = getFeedback(finalAccuracy);
        document.getElementById('summaryBox').classList.remove('hidden');
        document.getElementById('summaryBox').classList.add('visible');
    }

    function getFeedback(accuracy) {
        if (accuracy > 95) {
            return "Excellent job! Keep up the great work!";
        } else if (accuracy > 75) {
            return "Good effort, but there's room for improvement!";
        } else {
            return "Keep practicing, you'll get better!";
        }
    }
});
