const getWeather = (city) => {
    cityName.innerHTML = city;
fetch('https://api.openweathermap.org/data/2.5/weather?appid=fe30ed449388f152a6fd596581c4a26b&q='+ city)
// fetch( 'https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=fe30ed449388f152a6fd596581c4a26b', options)
.then(response => response.json())
.then(response => {
  console.log(response);

  temp.innerHTML = response.main.temp;

  for (var key in response.weather) {
   // Update the content of an HTML element with the weather description
    desp.innerHTML = response.weather[key].description;
    // var obj=JSON.parse(this.response);
    // document.getElementById('icon').src = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
  }
  temp_min.innerHTML = response.main.temp_min;
  temp_max.innerHTML = response.main.temp_max;
})
.catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    e.preventDefault()//will not reload 
getWeather(city.value)
})

getWeather("Delhi")

let time = document.getElementById("current-time");

let d = new Date();
time.innerHTML = d.toLocaleTimeString();


const findmystate=()=>{
  const status=document.querySelector('.status');

  //if user allows then success else error function

  const success=(position)=>{
      console.log(position)
      const latitude=position.coords.latitude;
      const longitude=position.coords.longitude;
      // console.log(latitude+ ' ' +longitude);

      //api
      const geoApiUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

      //get the data-fetch
      fetch(geoApiUrl)
      //promise
      .then(res=> res.json())//result in json format
      //getting data
      .then(data =>{
        //  console.log(data)
        status.textContent=data.principalSubdivision;
      })

  }
const error=()=>{
  status.textContent='unable to retrieve your location';
}

  navigator.geolocation.getCurrentPosition(success,error);
}

document.querySelector('.find-state').addEventListener('click',findmystate);


// const displayTemperature=()=>{
//   const temp=document.querySelector('.temp');


// }