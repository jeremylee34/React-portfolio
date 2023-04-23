export function toggleDarkMode(getters, setters) {
  if (localStorage.getItem('darkMode') === 'true') {
    localStorage.setItem('darkMode', 'false')
    setters.setDarkMode('false')
    setters.setBgColor('white')
    setters.setFontColor('black')
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.setItem('darkMode', 'true')
    setters.setDarkMode('true')
    setters.setBgColor('#181a1b')
    setters.setFontColor('#e8e6e3')
    document.documentElement.classList.add('dark');
  }
}

export function initDarkMode(setDarkMode, setters) {
  if (!localStorage.getItem('darkMode')) {
    localStorage.setItem('darkMode', 'true')
  }
  setDarkMode(localStorage.getItem('darkMode'))
  if (localStorage.getItem('darkMode') === 'true') {
    setters.setBgColor('#181a1b')
    setters.setFontColor('#e8e6e3')
    document.documentElement.classList.add('dark');
  } else {
    setters.setBgColor('white')
    setters.setFontColor('black')
    document.documentElement.classList.remove('dark')
  }
}