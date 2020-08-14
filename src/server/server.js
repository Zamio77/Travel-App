// Global variables
const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');


// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
const { response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));

console.log(__dirname)

// Setup Server
const port = 8000;

// Spin up the server
const server = app.listen(port, listening);

// Callback to degug
function listening() {
  console.log("server running");
  console.log(`running on localhost ${port}`);
}

// Callback to receive website
app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

// Callback function to complete GET '/all'
app.get("/all", (req, res) => {
  res.send(projectData);
  console.log(projectData);
});

app.post('/createTrip', (req, res) => {
  console.log(req.body);

  // targeting the days of date to get the difference
  console.log(req.body.startDate);
  console.log(req.body.endDate);
  console.log(req.body.duration);

  const startDays = req.body.startDate.slice(0, 10);
  const endDays = req.body.endDate.slice(0, 10);

  projectData.location = req.body.location;
  projectData.startDate = startDays
  projectData.endDate = endDays
  projectData.duration = req.body.duration;

  console.log(projectData);
  res.send('ok');
})

app.get('/geonames', (req, res) => {
  console.log('GET geonames');
  const url = `http://api.geonames.org/searchJSON?placename=${projectData.location}&maxRows=1&username=${process.env.GEONAMES_API_ID}`
  console.log(url);
  getData(url).then(response => {
    console.log('Data from Genames[0]')
    console.log(response.geonames[0]);
    projectData.lat = response.geonames[0].lat;
    projectData.long = response.geonames[0].lng;
    
    console.log(`ProjectData is, ${projectData}`);
    res.send(true);
  }).catch(error => {
    res.send(JSON.stringify({error: error}))
  })
  
})

app.get('/weatherBit', (req, res) => {
  console.log('GET weatherBit');
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${projectData.lat}&lon=${projectData.long}&key=${process.env.WBit_Key}`
  console.log(url);
  getData(url).then(response => {
    console.log('Data from weatherBit');
    const weatherData = response.data;

    weatherData.forEach((data) => {
      if (data.valid_date == projectData.startDate) {
        projectData.description = data.weather.description;
        projectData.temp = data.temp;
        console.log(projectData);
        res.send(true);
      } else return
    })
  })
})


app.get("/all", (req, res) => {
  res.send(projectData);
  console.log(projectData);
});

// Test to test the server is workinga
app.get("/test", (req, res) => {
  res.send("Hi, the server is working...");
});


// Global functions
const getData = async (url) => {
  const response = await fetch(url);
  try {
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
