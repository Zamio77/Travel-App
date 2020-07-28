// Global functions

/* Global Variables */
const destination = document.getElementById('input-destination').value;
const departDate = document.getElementById('input-date').value;
const returnDate = document.getElementById('input-return-date').value;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const travelCard = document.getElementById('travel-card');
const tripResults = document.getElementById('trip-results');

export const testEvent = () => {
  travelCard.style.display = 'none';
  tripResults.style.display = 'flex';
  Client.postData('http://localhost:8000/geonames', {location: destination}).Client.getData('http://localhost:8000/all').then((data) => {
    console.log(data)
  })
}

export const testEventClose = () => {
  travelCard.style.display = 'flex';
  tripResults.style.display = 'none';
  }

