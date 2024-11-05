window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Change background color of navbar items on hover
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = randomColor();
    });
    item.addEventListener('mouseout', () => {
        document.body.style.backgroundColor = '';
    });
});

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
