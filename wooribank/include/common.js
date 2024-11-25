const gnbButtons = document.querySelectorAll('.gnb button');

gnbButtons.forEach(gnbBtn => {
    gnbBtn.addEventListener('mouseenter', () => {
        gnbBtn.nextElementSibling.style.display = 'flex';
    });
    gnbBtn.addEventListener('mouseleave', () => {
        gnbBtn.nextElementSibling.style.display = 'none';
    });
});
