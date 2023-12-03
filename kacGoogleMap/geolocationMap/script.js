let myMap, marker;
function initialize(){
   renderMap();
   getLocation(); 
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
    myMap.setCenter(currentPos);
    marker.setPosition(currentPos);
}