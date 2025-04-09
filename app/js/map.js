initMap();
import {YMapDefaultMarker} from '@yandex/ymaps3-default-ui-theme';
async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;
    console.log(ymaps3)

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls} = ymaps3;
    
    // const {YMapOpenMapsButton} = await ymaps3.import('@yandex/ymaps3-default-ui-theme-extra');
    const {YMapOpenMapsButton} = await ymaps3.import('@yandex/ymaps3-default-ui-theme-extra');
    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),
        
        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты[,]
                center: [38.94493488870216,45.059998950790245],
                
                // Уровень масштабирования
                zoom: 17
            }
        }
    );
    
    
    const controls = new YMapControls({position: 'bottom left'})
    // Добавляем слой для отображения схематической карты
    const openMapsButton = new YMapOpenMapsButton({});
    map.addChild(new YMapDefaultSchemeLayer()); 
    map.addChild(new YMapDefaultFeaturesLayer()); 
    controls.addChild(openMapsButton);
    map.addChild(controls);
    map.addChild(new YMapDefaultMarker({
        coordinates: [38.94493488870216,45.059998950790245],
        color: 'blue'
    }));
}