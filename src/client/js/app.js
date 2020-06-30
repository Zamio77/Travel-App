/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
export const getName = () => {
  const name = document.getElementById('destination').value
  document.getElementById("url").innerHTML = `Hello ${name}`;
}