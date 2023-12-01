const searchIcon = document.querySelector('.search-icon');
const searchInputWrapper = document.querySelector('.search-input-wrapper');
const searchInput = document.querySelector('.search-input input');


searchIcon.addEventListener('click', () => {
    searchIcon.classList.add('change');
    searchInputWrapper.classList.add('change');

    setTimeout(() => {
        searchInput.focus()
    }, 1000)
})