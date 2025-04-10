const mapContainer = document.getElementById("map")
if (mapContainer){
ymaps.ready(function () {  
    const center = [45.05998754483668,38.94493372883602]
    var map = new ymaps.Map("map", {
      center: center, 
      zoom: 17
    });

      const placemark = new ymaps.Placemark(center, {}, {
          
    })
    map.geoObjects.add(placemark)        
  });}