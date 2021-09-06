import menuData from '../menu.json'
import menuCardTemplate from '../templates/menu.hbs'


console.log(menuCardTemplate(menuData))

const menu = document.querySelector('.js-menu')
 
const menuMarkup = menuCardTemplate(menuData)
menu.insertAdjacentHTML('beforeend', menuMarkup)