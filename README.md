# GoogleAPIMapAndRouting

This is a small-scale project using Google API Map
###
Using Javascript language with few CSS and HTML elements. 
3 ways of rendering the map (basic, geolocation and routing) 
You can only really use it if you specify your API_KEY in the HTML figure tag in curly brackets
http://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initialize
###
BASIC
Simply set up on the given coordinate and place a marker on the map. 
When initializing, the styles variable can be used to set the style of the map (default: retro), these are included in mapStyles.js.

###
Geolocation
If you allow geolocation in the browser, it will use it as the map center and place the marker there. Styles can also be changed here

###
Routing
In this case, the map is able to display a route on the map based on the input and the specified transport mode. 

###
A further possible upgrade is the enhanced display of retrieved data and route information

Created by : Balázs Kaczor
2023
