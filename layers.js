var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_all_nato_countries_1 = new ol.format.GeoJSON();
var features_all_nato_countries_1 = format_all_nato_countries_1.readFeatures(json_all_nato_countries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_all_nato_countries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_all_nato_countries_1.addFeatures(features_all_nato_countries_1);
var lyr_all_nato_countries_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_all_nato_countries_1, 
                style: style_all_nato_countries_1,
                interactive: true,
    title: 'all_nato_countries<br />\
    <img src="styles/legend/all_nato_countries_1_0.png" /> 0 - 108000<br />\
    <img src="styles/legend/all_nato_countries_1_1.png" /> 108001 - 216000<br />\
    <img src="styles/legend/all_nato_countries_1_2.png" /> 216001 - 324000<br />\
    <img src="styles/legend/all_nato_countries_1_3.png" /> 324001 - 432000<br />\
    <img src="styles/legend/all_nato_countries_1_4.png" /> 432000<<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_all_nato_countries_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_all_nato_countries_1];
lyr_all_nato_countries_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'COUNTRIES': 'COUNTRIES', 'ENGLISH NA': 'ENGLISH NA', 'LOCAL NAME': 'LOCAL NAME', 'ACTIVE PER': 'ACTIVE PER', 'RESERVE PE': 'RESERVE PE', });
lyr_all_nato_countries_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRIES': 'TextEdit', 'ENGLISH NA': 'TextEdit', 'LOCAL NAME': 'TextEdit', 'ACTIVE PER': 'TextEdit', 'RESERVE PE': 'TextEdit', });
lyr_all_nato_countries_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'inline label', 'COUNTRIES': 'inline label', 'ENGLISH NA': 'inline label', 'LOCAL NAME': 'inline label', 'ACTIVE PER': 'inline label', 'RESERVE PE': 'inline label', });
lyr_all_nato_countries_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});