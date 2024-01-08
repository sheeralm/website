/**
 * Sets themes based on browser preferences or previously set theme
 * Reference: https://stackoverflow.com/questions/69147282/set-color-theme-with-localstorage
 */
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();