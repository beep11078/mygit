const gnb = document.querySelector('.gnb')
const gnbButtons = document.querySelectorAll('.gnb button');

gnbButtons.forEach(gnbBtn => {
    const toggleDisplay = () => {
        const sibling = gnbBtn.nextElementSibling;
        sibling.style.display = (sibling.style.display === 'flex') ? 'none' : 'flex';
    };

    gnbBtn.addEventListener('click', toggleDisplay);
    gnbBtn.addEventListener('mouseenter', toggleDisplay);
});
