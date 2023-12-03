function initialize(){
   const myMap = new google.maps.Map(
        document.querySelector("#myMap"),
        {
            zoom : 12,
            center : {
                lat : 46.92339,
                lng : 18.092484
            },
            styles : mapStyles.retro
        }
    )

    new google.maps.Marker({
          map : myMap, 
          position: {
            lat : 46.92339,
            lng : 18.092484
          }
    }
    )
}