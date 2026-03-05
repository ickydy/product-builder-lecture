
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberContainer = document.querySelector('.number-container');
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    // Theme logic
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeBtn.textContent = 'Switch to Dark Mode';
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        themeBtn.textContent = isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Menu logic
    const menus = [
        "김치찌개", "된장찌개", "부대찌개", "제육볶음", "삼겹살",
        "치킨", "피자", "짜장면", "짬뽕", "탕수육",
        "돈까스", "제육덮밥", "비빔밥", "불고기", "보쌈",
        "족발", "떡볶이", "순대", "칼국수", "수제비",
        "냉면", "마라탕", "쌀국수", "초밥", "육회비빔밥"
    ];

    generateBtn.addEventListener('click', () => {
        const randomMenu = menus[Math.floor(Math.random() * menus.length)];
        displayMenu(randomMenu);
    });

    function displayMenu(menuName) {
        numberContainer.innerHTML = '';
        const badge = document.createElement('div');
        badge.classList.add('number-circle'); // Reusing class for animation
        badge.style.width = 'auto';
        badge.style.height = 'auto';
        badge.style.padding = '15px 40px';
        badge.style.borderRadius = '30px';
        badge.style.fontSize = '2.2em';
        badge.textContent = menuName;
        
        // Random color
        const colors = ['#F44336', '#FFC107', '#4CAF50', '#2196F3', '#9C27B0'];
        badge.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        numberContainer.appendChild(badge);
    }
});
