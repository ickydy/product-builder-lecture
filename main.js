
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberContainer = document.querySelector('.number-container');

    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        numberContainer.innerHTML = '';
        numbers.forEach((number, index) => {
            const circle = document.createElement('div');
            circle.classList.add('number-circle');
            circle.textContent = number;
            circle.style.animationDelay = `${index * 0.1}s`;

            if (number <= 10) {
                circle.classList.add('color-1');
            } else if (number <= 20) {
                circle.classList.add('color-2');
            } else if (number <= 30) {
                circle.classList.add('color-3');
            } else if (number <= 40) {
                circle.classList.add('color-4');
            } else {
                circle.classList.add('color-5');
            }

            numberContainer.appendChild(circle);
        });
    }
});
