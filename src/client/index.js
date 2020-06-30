import './styles/style.scss'
import { getName } from './js/app.js'

document.getElementById('form-submit').addEventListener('click', getName);

export {
    getName
}