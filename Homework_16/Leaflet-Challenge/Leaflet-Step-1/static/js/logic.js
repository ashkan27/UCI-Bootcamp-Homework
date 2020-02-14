// Make Sure to add your API key here:

var API_KEY = "Please add your API key here!"

var mymap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
    });
  
var map = L.map("map", {
center: [37, -95],
zoom: 4,
});

mymap.addTo(map);


var colors = ["lightgreen", "green", "yellow", "pink", "darkorange", "darkred"];

function color(mag) {
    switch (true) {
    case mag > 5:
        return colors[5];
    case mag > 4:
        return colors[4];
    case mag > 3:
        return colors[3];
    case mag > 2:
        return colors[2];
    case mag > 1:
        return colors[1];
    default:
        return colors[0];
        }
      }


d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", function(d) {

var mag = []
var lon = []
var lat =[]
var dep = []
var place = []
size = d["features"].length

var i;
for (i = 0; i < size; i++) {

mag[i] = d["features"][i]["properties"]["mag"]
lon[i] = d["features"][i]["geometry"]["coordinates"][0]
lat[i] = d["features"][i]["geometry"]["coordinates"][1]
dep[i] = d["features"][i]["geometry"]["coordinates"][2]
place[i] = d["features"][i]["properties"]["place"]

L.circleMarker([lat[i], lon[i]], {
    color: color(mag[i]),
    fillColor: color(mag[i]),
    fillOpacity: 1,
    radius: mag[i]*3
  }).addTo(map).bindPopup(
    "Magnitude: " + mag[i] + "<br>Depth: " + dep[i] + "<br>Place: " + place[i]
 ).openPopup();

}
});

var legend = L.control({position: "bottomright"});

legend.onAdd = function() {
    
    var div = L.DomUtil.create("div", "info legend");
    var magnitudes = [0, 1, 2, 3, 4, 5];
    
    var j;
    for (j = 0; j < magnitudes.length; j++) {
      div.innerHTML +=
        "<i style='background: " + colors[j] + "'></i> " +
        magnitudes[j] + (magnitudes[j + 1] ? "&ndash;" + magnitudes[j + 1] + "<br>" : "+");
    }
    return div;
  };

  legend.addTo(map);

