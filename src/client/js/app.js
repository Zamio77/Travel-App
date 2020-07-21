/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const travelCard = document.getElementById('travel-card');
const tripResults = document.getElementById('trip-results');

export const testEvent = () => {
  travelCard.style.display = 'none';
  tripResults.style.display = 'flex';
  }

export const testEventClose = () => {
  travelCard.style.display = 'flex';
  tripResults.style.display = 'none';
  }