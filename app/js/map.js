const mapContainer = document.getElementById("map")
if (mapContainer){
ymaps.ready(function () {  
    const center = [45.05998754483668,38.94493372883602]
    const map = new ymaps.Map(mapContainer, {
      center: center, 
      zoom: 17
    });

      const placemark = new ymaps.Placemark(center, {}, {
          
    })
    map.geoObjects.add(placemark)    
    map.controls.remove("searchControl")    
    map.behaviors.disable(["scrollZoom"])
    map.controls.remove("zoomControl")
  });}