require('dotenv').config();
const API_KEY = process.env.API_KEY; 
let myMap, marker, originPos;
const input = document.getElementById("destination");
const button = document.getElementById("destinationRoute");
const travelMode = document.getElementById("mode");
function initialize(){
   renderMap();
   getLocation();
   setEventListeners();
}

function setEventListeners(){
    button.onclick = () => {
    const {value} = input; 
    renderRoute(value); 
    }
}

function requestFromInputSubmit(){
    input.onkeyup = () => {
    const {value} = input;
    renderRoute(value)
    } 
}

function renderRoute(destination){
    const routeDetails = {
        destination : destination,
        origin : originPos,
        travelMode : travelMode.value
    }
    const service = new google.maps.DirectionsService();
    service.route(
        routeDetails, 
        routeResult => trackRoute(routeResult),
    )
}

function trackRoute(routeResult){
  const renderer = new google.maps.DirectionsRenderer();
  renderer.setDirections(routeResult);
  renderer.setMap(myMap);  
}

function renderMap(){
     myMap = new google.maps.Map(
        document.querySelector("#myMap"),
        {
            zoom : 12,
            center : {
                lat :  38.889805,
                lng : -77.009056
            },
            styles : mapStyles.retro
        }
    )

   marker = new google.maps.Marker({
          map : myMap, 
          position: {
            lat : 38.889805,
            lng : -77.009056
          }
    }
    )
}

function getLocation(){
    navigator.geolocation.getCurrentPosition(
        position => updateMap(position),
        error => console.log("Something went wrong ", error )     
    ); 
}

function updateMap(position){
    const {coords} = position;
    const currentPos = {lat: coords.latitude, lng: coords.longitude};
    originPos = currentPos;
    myMap.setCenter(currentPos);
    marker.setPosition(currentPos);
}