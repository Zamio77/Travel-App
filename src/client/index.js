import './styles/style.scss'
import './styles/header.scss'
import { getName } from './js/app.js'

document.getElementById('form-submit').addEventListener('click', getName);

export {
    getName
}