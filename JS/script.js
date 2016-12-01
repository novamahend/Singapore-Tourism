var map;

var dataDestination = $.getJSON("./JS/data.json", function(json) {
  dataDestination = json;
  $(".map").removeClass().addClass('col-md-12 map');
$(".asidebar").removeClass().addClass('col-md-0 asidebar');
});

function chooseDestination(id) {
  $(".map").removeClass().addClass('col-md-9 map');
  $(".asidebar").removeClass().addClass('col-md-3 asidebar');
  document.getElementById("asidebar").style.display="block";
  document.getElementById("place-name").innerHTML = dataDestination.destination[id].name;
  document.getElementById("description").innerHTML = dataDestination.destination[id].description;
  document.getElementById("place-image").src = dataDestination.destination[id].image_url;
  map.setCenter({
    lat : dataDestination.destination[id].latitude,
    lng : dataDestination.destination[id].longitude
  });
  map.setZoom(17);
}

function initMap() {
  if (dataDestination){

        var myLatlng = {lat: dataDestination.destination[0].latitude, lng: dataDestination.destination[0].longitude};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: myLatlng
        });

        var marker = [];
        for(var i=0;i<9;i++) {
          marker[i] = new google.maps.Marker({
              position: {lat:dataDestination.destination[i].latitude,lng:dataDestination.destination[i].longitude},
              map: map,
              title: dataDestination.destination[i].name
            });     
        }

        marker[0].addListener('click', function() {
          map.setZoom(17);
          map.setCenter(marker[0].getPosition());
          chooseDestination(0);
        });

        marker[1].addListener('click', function() {
          map.setZoom(17);
          map.setCenter(marker[1].getPosition());
          chooseDestination(1);
        });

        marker[2].addListener('click', function() {
          map.setZoom(17);
          map.setCenter(marker[2].getPosition());
          chooseDestination(2);
        });

        marker[3].addListener('click', function() {
          map.setZoom(17);
          map.setCenter(marker[3].getPosition());
          chooseDestination(3);
        });

        marker[4].addListener('click', function() {
          map.setZoom(17);
          map.setCenter(marker[4].getPosition());
          chooseDestination(4);
        });

        marker[5].addListener('click', function() {
          map.setZoom(17);
          map.setCenter(marker[5].getPosition());
          chooseDestination(5);
        });

        marker[6].addListener('click', function() {
          map.setZoom(17);
          map.setCenter(marker[6].getPosition());
          chooseDestination(6);
        });

        marker[7].addListener('click', function() {
          map.setZoom(17);
          map.setCenter(marker[7].getPosition());
          chooseDestination(7);
        });

        marker[8].addListener('click', function() {
          map.setZoom(17);
          map.setCenter(marker[8].getPosition());
          chooseDestination(8);
        });
  }
}