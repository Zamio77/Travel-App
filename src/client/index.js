import './styles/style.scss'
import './styles/header.scss'
import './styles/section.scss'
import './styles/results.scss'
import londonSkyline from './media/londonSkyline.jpg'
import {handleSubmit} from './js/app'
import {closeButtonEvent} from './js/app'
import {postData} from './js/helperFunction'
import {getData} from './js/helperFunction'
import {updateUI} from './js/helperFunction'

document.getElementById('input-submit').addEventListener("click", handleSubmit);
document.getElementById('close-btn').addEventListener("click", closeButtonEvent);

export {
    londonSkyline,
    handleSubmit,
    testEventClose,
    postData,
    getData,
    updateUI
}