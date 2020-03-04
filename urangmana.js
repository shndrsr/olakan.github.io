function getDetails(url) {
    return fetch(url).then(response => response.json());
}

var u = "https://get.geojs.io/v1/ip/country.json";
getDetails(u).then(function(data) {
    var negara = data['country'];
})
