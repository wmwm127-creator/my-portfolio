const hamburger = document.getElementById('js-hamburger');
const navLinks = document.getElementById('js-nav-links');
const links = document.querySelectorAll('#js-nav-links a'); // メニュー内のリンクをすべて取得

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// リンクをクリックした時にメニューを閉じる
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});