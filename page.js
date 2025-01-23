var map = L.map('map').setView([-41.293801, 174.795914], 12);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

function NameToCircle(cityname) {
    var result;
    var index;
    var entry;

    for (index = 0; index < cities.length; ++index) {
        entry = cities[index];
        if (entry.city.toUpperCase() === cityname.toUpperCase()) {
            result = entry;
            break;
        }
    }
    console.log(result)
    return result;
} // todo: invoke this function with the city name