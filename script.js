const searchIcon = document.querySelector('.search-icon');
const searchInputWrapper = document.querySelector('.search-input-wrapper');


searchIcon.addEventListener('click', () => {
    searchIcon.classList.toggle('change');
    searchInputWrapper.classList.toggle('change');
})