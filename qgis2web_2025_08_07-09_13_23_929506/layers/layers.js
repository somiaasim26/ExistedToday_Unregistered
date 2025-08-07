var wms_layers = [];


        var lyr_WorldStreets_0 = new ol.layer.Tile({
            'title': 'World Streets',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LahoreTowns_1 = new ol.format.GeoJSON();
var features_LahoreTowns_1 = format_LahoreTowns_1.readFeatures(json_LahoreTowns_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LahoreTowns_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahoreTowns_1.addFeatures(features_LahoreTowns_1);
var lyr_LahoreTowns_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LahoreTowns_1, 
                style: style_LahoreTowns_1,
                popuplayertitle: 'Lahore Towns',
                interactive: false,
    title: 'Lahore Towns<br />\
    <img src="styles/legend/LahoreTowns_1_0.png" /> Aziz Bhatti Town<br />\
    <img src="styles/legend/LahoreTowns_1_1.png" /> Cantonment<br />\
    <img src="styles/legend/LahoreTowns_1_2.png" /> Data Gunj Buksh Town<br />\
    <img src="styles/legend/LahoreTowns_1_3.png" /> Gulberg Town<br />\
    <img src="styles/legend/LahoreTowns_1_4.png" /> Iqbal Town<br />\
    <img src="styles/legend/LahoreTowns_1_5.png" /> Nishtar Town<br />\
    <img src="styles/legend/LahoreTowns_1_6.png" /> Ravi Town<br />\
    <img src="styles/legend/LahoreTowns_1_7.png" /> Samanabad Town<br />\
    <img src="styles/legend/LahoreTowns_1_8.png" /> Shalamar Town<br />\
    <img src="styles/legend/LahoreTowns_1_9.png" /> Wagha Town<br />' });
var format_UnregisteredwithPRA_2 = new ol.format.GeoJSON();
var features_UnregisteredwithPRA_2 = format_UnregisteredwithPRA_2.readFeatures(json_UnregisteredwithPRA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnregisteredwithPRA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnregisteredwithPRA_2.addFeatures(features_UnregisteredwithPRA_2);
var lyr_UnregisteredwithPRA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnregisteredwithPRA_2, 
                style: style_UnregisteredwithPRA_2,
                popuplayertitle: 'Unregistered with PRA',
                interactive: true,
    title: 'Unregistered with PRA<br />\
    <img src="styles/legend/UnregisteredwithPRA_2_0.png" /> Unregistered Restaurants<br />' });
var group_InformalRestaurants = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Informal Restaurants'});

lyr_WorldStreets_0.setVisible(true);lyr_LahoreTowns_1.setVisible(true);lyr_UnregisteredwithPRA_2.setVisible(true);
var layersList = [lyr_WorldStreets_0,lyr_LahoreTowns_1,lyr_UnregisteredwithPRA_2];
lyr_LahoreTowns_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Officer_ID': 'Officer_ID', });
lyr_UnregisteredwithPRA_2.set('fieldAliases', {'FID__not_t': 'FID__not_t', 'ID': 'ID', 'ID_X': 'ID_X', 'ID_Y': 'ID_Y', 'final_lat': 'final_lat', 'final_long': 'final_long', 'name': 'name', 'address': 'address', 'hdbscan_cl': 'hdbscan_cl', 'reassigned': 'reassigned', 'Tehsil_Nam': 'Tehsil_Nam', 'UC_Name': 'UC_Name', 'UC_No': 'UC_No', 'Rank': 'Rank', 'compliance': 'compliance', 'existed_no': 'existed_no', 'registered': 'registered', 'existed_ju': 'existed_ju', 'register_1': 'register_1', 'existed_to': 'existed_to', 'Town_Name': 'Town_Name', 'Officer_ID': 'Officer_ID', 'formality': 'formality', 'Dummy': 'Dummy', });
lyr_LahoreTowns_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Officer_ID': 'Range', });
lyr_UnregisteredwithPRA_2.set('fieldImages', {'FID__not_t': 'TextEdit', 'ID': 'TextEdit', 'ID_X': 'TextEdit', 'ID_Y': 'TextEdit', 'final_lat': 'TextEdit', 'final_long': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'hdbscan_cl': 'TextEdit', 'reassigned': 'TextEdit', 'Tehsil_Nam': 'TextEdit', 'UC_Name': 'TextEdit', 'UC_No': 'TextEdit', 'Rank': 'TextEdit', 'compliance': 'TextEdit', 'existed_no': 'TextEdit', 'registered': 'TextEdit', 'existed_ju': 'TextEdit', 'register_1': 'TextEdit', 'existed_to': 'TextEdit', 'Town_Name': 'TextEdit', 'Officer_ID': 'TextEdit', 'formality': 'TextEdit', 'Dummy': 'Range', });
lyr_LahoreTowns_1.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Officer_ID': 'hidden field', });
lyr_UnregisteredwithPRA_2.set('fieldLabels', {'FID__not_t': 'no label', 'ID': 'hidden field', 'ID_X': 'no label', 'ID_Y': 'no label', 'final_lat': 'inline label - visible with data', 'final_long': 'inline label - visible with data', 'name': 'inline label - visible with data', 'address': 'inline label - visible with data', 'hdbscan_cl': 'hidden field', 'reassigned': 'hidden field', 'Tehsil_Nam': 'inline label - visible with data', 'UC_Name': 'inline label - visible with data', 'UC_No': 'no label', 'Rank': 'hidden field', 'compliance': 'inline label - visible with data', 'existed_no': 'no label', 'registered': 'no label', 'existed_ju': 'no label', 'register_1': 'no label', 'existed_to': 'no label', 'Town_Name': 'inline label - visible with data', 'Officer_ID': 'no label', 'formality': 'no label', 'Dummy': 'no label', });
lyr_UnregisteredwithPRA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});