// Global functions

import { postData } from "./helperFunction";

/* Global Variables */
const travelCard = document.getElementById('travel-card');
const travelResults = document.getElementById('travel-results');



export async function handleSubmit(event) {
  event.preventDefault();
  console.log('The trip begins');

  // Create a new date instance dynamically with JS
  const currentDate = new Date();
  const newDate = currentDate.getMonth() + "-" + currentDate.getDate() + "-" + currentDate.getFullYear();
  console.log(`newDate: ${newDate}`)

  const destination = document.getElementById('input-destination').value;
  const departureDate = document.getElementById('input-date').value;
  const returnDate = document.getElementById('input-return-date').value;

  // Calculate the travel duration
  const startDate = new Date(departureDate);
  const endDate = new Date(returnDate);

  const tripDuration = endDate.getTime() - startDate.getTime();
  const daysInTravel = tripDuration / (1000 * 60 * 60 * 24);
  console.log(daysInTravel);

  // Find the time between now and departure
  const timeTillTripStart = startDate.getTime() - currentDate.getTime();
  const timeTillTravel = Math.round(timeTillTripStart / (1000 * 60 * 60 * 24));
  console.log(`timeTillTravel: ${timeTillTravel}`);

  const travelCard = document.getElementById('travel-card');
  const travelResults = document.getElementById('travel-results');

  
  await postData('http://localhost:8000/createTrip', {
      location: destination,
      startDate: startDate,
      endDate: endDate,
      duration: daysInTravel,
      timeTillTravel: timeTillTravel
    })
  


  await Client.getData('http://localhost:8000/geonames')
  await Client.getData('http://localhost:8000/weatherBit')
  await Client.getData('http://localhost:8000/pixabay')
  await Client.updateUI('http://localhost:8000/all')
  travelCard.style.display = 'none'; 
  travelResults.style.display = 'flex';
}


export const closeButtonEvent = () => {
  travelCard.style.display = 'flex';
  travelResults.style.display = 'none';
  }



