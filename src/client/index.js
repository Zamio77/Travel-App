import './styles/style.scss'
import './styles/header.scss'
import './styles/section.scss'
import londonSkyline from './media/londonSkyline.jpg'
import {testEvent} from './js/app'
import {testEventClose} from './js/app'
import {postData} from './js/postData'


document.getElementById('input-submit').addEventListener("click", testEvent);
document.getElementById('trip-results').addEventListener("click", testEventClose);

export {
    londonSkyline,
    testEvent,
    testEventClose,
    postData
}