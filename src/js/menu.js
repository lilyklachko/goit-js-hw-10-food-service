import menuData from '../menu.json'
import menuCardTemplate from '../templates/menu.hbs'


console.log(menuCardTemplate(menuData))

const menu = document.querySelector('.js-menu')
 
const menuMarkup = menuCardTemplate(menuData)
menu.insertAdjacentHTML('beforeend', menuMarkup)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme

const checkbox = document.getElementById('theme-switch-toggle')
const body = document.body;

checkbox.addEventListener("change", onCheckboxChecked)
// checkbox.addEventListener("toggle", onCheckboxToggle)
// function onCheckboxToggle(evt) {
//      evt.checked = true
//  }

body.classList.add(window.localStorage.getItem('currentTheme'));

function onCheckboxChecked() {

    if (checkbox.checked) {
        body.classList.remove(LIGHT)
        body.classList.add(DARK)
        window.localStorage.setItem('currentTheme', DARK);
        // window.localStorage.setItem('checkbox', checkbox.checked = true);

        // checkbox.setAttribute('checked')

    }
    else {
        body.classList.remove(DARK)
        body.classList.add(LIGHT)
        window.localStorage.setItem('currentTheme', LIGHT);
        // window.localStorage.setItem('checkbox', checkbox.checked != true);



    }
}
