// Global functions

import { postData } from "./helperFunction";

/* Global Variables */
const travelCard = document.getElementById('travel-card');
const travelResults = document.getElementById('travel-results');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

export async function handleSubmit(event) {
  event.preventDefault();
  console.log('The trip begins');

  const destination = document.getElementById('input-destination').value;
  const departureDate = document.getElementById('input-date').value;
  const returnDate = document.getElementById('input-return-date').value;

  const startDate = new Date(departureDate);
  const endDate = new Date(returnDate);

  const tripDuration = endDate.getTime() - startDate.getTime();
  const daysInTravel = tripDuration / (1000 * 60 * 60 * 24);
  console.log(daysInTravel);

  const travelCard = document.getElementById('travel-card');
  const travelResults = document.getElementById('travel-results');

  if(daysInTravel > 0){
    await postData('http://localhost:8000/createTrip', {
      location: destination,
      startDate: startDate,
      endDate: endDate,
      duration: daysInTravel
    })
  }

  travelCard.style.display = 'none'; 
  travelResults.style.display = 'flex';
  await Client.getData('http://localhost:8000/geonames')
  await Client.getData('http://localhost:8000/weatherBit')
}


export const testEventClose = () => {
  travelCard.style.display = 'flex';
  travelResults.style.display = 'none';
  }



