import './styles/style.scss'
import './styles/header.scss'
import './styles/section.scss'
import './styles/results.scss'
import londonSkyline from './media/londonSkyline.jpg'
import {handleSubmit} from './js/app'
import {testEventClose} from './js/app'
import {postData} from './js/helperFunction'
import {getData} from './js/helperFunction'

document.getElementById('input-submit').addEventListener("click", handleSubmit);
document.getElementById('travel-results').addEventListener("click", testEventClose);

export {
    londonSkyline,
    handleSubmit,
    testEventClose,
    postData,
    getData
}