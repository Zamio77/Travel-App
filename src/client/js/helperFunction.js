export const postData = async ( url='', data={})=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      } catch (error) {
        console.log("error", error);
      }
}


export const getData = async (url) => {
  const response = await fetch(url);
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const updateUI = async (url) => {
  const response = await fetch(url);
  try {
    const data = await response.json();
    document.getElementById("result-destination").innerHTML = `Trip to: ${data.location}`
    document.getElementById("result-departure").innerHTML = `Departure: ${data.startDate}`
    document.getElementById("result-return").innerHTML = `Return: ${data.endDate}`
    document.getElementById("result-duration").innerHTML = `Duration: ${data.duration}`
    document.getElementById("trip-start").innerHTML = `Your trip is ${data.timeTillTravel} days from now`


  } catch (error) {
    console.log("error", error);
  }
};
