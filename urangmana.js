<script>
function getDetails(url) {
    return fetch(url).then(response => response.json());
}

var u = "https://get.geojs.io/v1/ip/country.json";
getDetails(u).then(function(data) {
    if (data['country'] == "AR" || data['country'] == "UK" || data['country'] == "US" ) {
              window.location = "URLMU";
            }
    else if (data['country'] == "JP") {
              window.location = "URLMU";
            }
}
})
  $('img').click(function(){
    var uimg = $(this).attr('code');
    var url    = 'https:'+'//www.movieunlimited'+'.com'+'/'+uimg;
    window.open(url);
  });
</script>
