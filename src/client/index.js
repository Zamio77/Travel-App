import './styles/style.scss'
import './styles/header.scss'
import './styles/section.scss'
import bigBen from './media/Big_Ben.jpg'
import londonSkyline from './media/londonSkyline.jpg'
import { getName } from './js/app.js'

document.getElementById('form-submit').addEventListener('click', getName);

export {
    getName,
    bigBen,
    londonSkyline
}