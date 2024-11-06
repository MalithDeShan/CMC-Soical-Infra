var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CMCboundary_1 = new ol.format.GeoJSON();
var features_CMCboundary_1 = format_CMCboundary_1.readFeatures(json_CMCboundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CMCboundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CMCboundary_1.addFeatures(features_CMCboundary_1);
var lyr_CMCboundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CMCboundary_1, 
                style: style_CMCboundary_1,
                popuplayertitle: "CMC boundary",
                interactive: true,
                title: '<img src="styles/legend/CMCboundary_1.png" /> CMC boundary'
            });
var format_WaterBodies_2 = new ol.format.GeoJSON();
var features_WaterBodies_2 = format_WaterBodies_2.readFeatures(json_WaterBodies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterBodies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterBodies_2.addFeatures(features_WaterBodies_2);
var lyr_WaterBodies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterBodies_2, 
                style: style_WaterBodies_2,
                popuplayertitle: "Water Bodies",
                interactive: true,
                title: '<img src="styles/legend/WaterBodies_2.png" /> Water Bodies'
            });
var format_GreenSpaces_3 = new ol.format.GeoJSON();
var features_GreenSpaces_3 = format_GreenSpaces_3.readFeatures(json_GreenSpaces_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenSpaces_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenSpaces_3.addFeatures(features_GreenSpaces_3);
var lyr_GreenSpaces_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreenSpaces_3, 
                style: style_GreenSpaces_3,
                popuplayertitle: "Green Spaces",
                interactive: true,
                title: '<img src="styles/legend/GreenSpaces_3.png" /> Green Spaces'
            });
var format_Railways_4 = new ol.format.GeoJSON();
var features_Railways_4 = format_Railways_4.readFeatures(json_Railways_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railways_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railways_4.addFeatures(features_Railways_4);
var lyr_Railways_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railways_4, 
                style: style_Railways_4,
                popuplayertitle: "Railways",
                interactive: true,
                title: '<img src="styles/legend/Railways_4.png" /> Railways'
            });
var format_Roads_5 = new ol.format.GeoJSON();
var features_Roads_5 = format_Roads_5.readFeatures(json_Roads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_5.addFeatures(features_Roads_5);
var lyr_Roads_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_5, 
                style: style_Roads_5,
                popuplayertitle: "Roads",
                interactive: true,
                title: '<img src="styles/legend/Roads_5.png" /> Roads'
            });
var format_Schools_6 = new ol.format.GeoJSON();
var features_Schools_6 = format_Schools_6.readFeatures(json_Schools_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_6.addFeatures(features_Schools_6);
var lyr_Schools_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_6, 
                style: style_Schools_6,
                popuplayertitle: "Schools",
                interactive: true,
                title: '<img src="styles/legend/Schools_6.png" /> Schools'
            });
var format_HealthFacilities_7 = new ol.format.GeoJSON();
var features_HealthFacilities_7 = format_HealthFacilities_7.readFeatures(json_HealthFacilities_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthFacilities_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthFacilities_7.addFeatures(features_HealthFacilities_7);
var lyr_HealthFacilities_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthFacilities_7, 
                style: style_HealthFacilities_7,
                popuplayertitle: "Health Facilities",
                interactive: true,
                title: '<img src="styles/legend/HealthFacilities_7.png" /> Health Facilities'
            });
var group_WebMap = new ol.layer.Group({
                                layers: [lyr_CMCboundary_1,lyr_WaterBodies_2,lyr_GreenSpaces_3,lyr_Railways_4,lyr_Roads_5,lyr_Schools_6,lyr_HealthFacilities_7,],
                                fold: "open",
                                title: "WebMap"});

lyr_OSMStandard_0.setVisible(true);lyr_CMCboundary_1.setVisible(true);lyr_WaterBodies_2.setVisible(true);lyr_GreenSpaces_3.setVisible(true);lyr_Railways_4.setVisible(true);lyr_Roads_5.setVisible(true);lyr_Schools_6.setVisible(true);lyr_HealthFacilities_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_WebMap];
lyr_CMCboundary_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WaterBodies_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'WA_TYPE': 'WA_TYPE', 'WA_NAME': 'WA_NAME', });
lyr_GreenSpaces_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GS_NAME': 'GS_NAME', 'GS_TYPE': 'GS_TYPE', });
lyr_Railways_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', });
lyr_Roads_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'maxspeed_a': 'maxspeed_a', 'trolley_wi': 'trolley_wi', 'informal': 'informal', 'parking_co': 'parking_co', 'segregated': 'segregated', 'constructi': 'constructi', 'crossing_m': 'crossing_m', 'tactile_pa': 'tactile_pa', 'turn_lanes': 'turn_lanes', 'destinatio': 'destinatio', 'descriptio': 'descriptio', 'parking_la': 'parking_la', 'trail_visi': 'trail_visi', 'traffic_si': 'traffic_si', 'crossing_i': 'crossing_i', 'button_ope': 'button_ope', 'maxspeed_t': 'maxspeed_t', 'parking__1': 'parking__1', 'motorroad': 'motorroad', 'crossing': 'crossing', 'footway': 'footway', 'indoor': 'indoor', 'level': 'level', 'parking_bo': 'parking_bo', 'parking__2': 'parking__2', 'noref': 'noref', 'destinat_1': 'destinat_1', 'tracktype': 'tracktype', 'highway_1': 'highway_1', 'sidewalk_r': 'sidewalk_r', 'cutting': 'cutting', 'route': 'route', 'check_date': 'check_date', 'covered': 'covered', 'height': 'height', 'maxheight_': 'maxheight_', 'dual_carri': 'dual_carri', 'int_ref': 'int_ref', 'int_name': 'int_name', 'step_count': 'step_count', 'bridge_str': 'bridge_str', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'toll': 'toll', 'operator': 'operator', 'minspeed': 'minspeed', 'parking__3': 'parking__3', 'service': 'service', 'parking__4': 'parking__4', 'parking__5': 'parking__5', 'parking_ri': 'parking_ri', 'parking__6': 'parking__6', 'tunnel': 'tunnel', 'source_wid': 'source_wid', 'oneway_bus': 'oneway_bus', 'name_ta': 'name_ta', 'noname': 'noname', 'is_in_coun': 'is_in_coun', 'name_si': 'name_si', 'direction': 'direction', 'motor_vehi': 'motor_vehi', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'hgv': 'hgv', 'loc_name': 'loc_name', 'maxweight_': 'maxweight_', 'horse': 'horse', 'cycleway': 'cycleway', 'bicycle': 'bicycle', 'access': 'access', 'turn_lan_1': 'turn_lan_1', 'lanes_forw': 'lanes_forw', 'lanes_back': 'lanes_back', 'parking__7': 'parking__7', 'layer': 'layer', 'bridge': 'bridge', 'oneway_hgv': 'oneway_hgv', 'maxheight': 'maxheight', 'destinat_2': 'destinat_2', 'parking__8': 'parking__8', 'width': 'width', 'parking__9': 'parking__9', 'parking_10': 'parking_10', 'parking_11': 'parking_11', 'parking_12': 'parking_12', 'oneway_con': 'oneway_con', 'check_da_1': 'check_da_1', 'bus': 'bus', 'sidewalk_b': 'sidewalk_b', 'foot': 'foot', 'sidewalk_l': 'sidewalk_l', 'cycleway_r': 'cycleway_r', 'cycleway_1': 'cycleway_1', 'official_n': 'official_n', 'name_zh-Ha': 'name_zh-Ha', 'name_zh-_1': 'name_zh-_1', 'name_en': 'name_en', 'alt_name': 'alt_name', 'junction': 'junction', 'parking_13': 'parking_13', 'is_in': 'is_in', 'lane_marki': 'lane_marki', 'old_name': 'old_name', 'smoothness': 'smoothness', 'sidewalk': 'sidewalk', 'shoulder': 'shoulder', 'ref': 'ref', 'parking_14': 'parking_14', 'oneway': 'oneway', 'old_ref': 'old_ref', 'name_zh': 'name_zh', 'lit': 'lit', 'surface': 'surface', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', });
lyr_Schools_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MF_TYPE': 'MF_TYPE', 'MF_NAME': 'MF_NAME', 'MF_ADDRESS': 'MF_ADDRESS', 'MF_POSTAL_': 'MF_POSTAL_', 'MFF_WARD_N': 'MFF_WARD_N', 'MF_TELEPHO': 'MF_TELEPHO', 'SC_MEDIUM': 'SC_MEDIUM', 'SC_NB_YEAR': 'SC_NB_YEAR', 'SC_TYPE': 'SC_TYPE', 'SC_NB_TEAC': 'SC_NB_TEAC', 'SC_NB_STUD': 'SC_NB_STUD', 'SC_REMARKS': 'SC_REMARKS', });
lyr_HealthFacilities_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'HF_TYPE': 'HF_TYPE', 'HF_OWNERSH': 'HF_OWNERSH', 'HF_NAME': 'HF_NAME', 'HF_ADDRESS': 'HF_ADDRESS', 'HF_POSTAL_': 'HF_POSTAL_', 'HFF_WARD_N': 'HFF_WARD_N', 'HF_TELEPHO': 'HF_TELEPHO', 'HF_OFFICER': 'HF_OFFICER', });
lyr_CMCboundary_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WaterBodies_2.set('fieldImages', {'OBJECTID': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'WA_TYPE': 'Range', 'WA_NAME': 'TextEdit', });
lyr_GreenSpaces_3.set('fieldImages', {'OBJECTID': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GS_NAME': 'TextEdit', 'GS_TYPE': 'Range', });
lyr_Railways_4.set('fieldImages', {'OBJECTID': 'Range', 'Shape_Leng': 'TextEdit', });
lyr_Roads_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'maxspeed_a': 'TextEdit', 'trolley_wi': 'TextEdit', 'informal': 'TextEdit', 'parking_co': 'TextEdit', 'segregated': 'TextEdit', 'constructi': 'TextEdit', 'crossing_m': 'TextEdit', 'tactile_pa': 'TextEdit', 'turn_lanes': 'TextEdit', 'destinatio': 'TextEdit', 'descriptio': 'TextEdit', 'parking_la': 'TextEdit', 'trail_visi': 'TextEdit', 'traffic_si': 'TextEdit', 'crossing_i': 'TextEdit', 'button_ope': 'TextEdit', 'maxspeed_t': 'TextEdit', 'parking__1': 'TextEdit', 'motorroad': 'TextEdit', 'crossing': 'TextEdit', 'footway': 'TextEdit', 'indoor': 'TextEdit', 'level': 'TextEdit', 'parking_bo': 'TextEdit', 'parking__2': 'TextEdit', 'noref': 'TextEdit', 'destinat_1': 'TextEdit', 'tracktype': 'TextEdit', 'highway_1': 'TextEdit', 'sidewalk_r': 'TextEdit', 'cutting': 'TextEdit', 'route': 'TextEdit', 'check_date': 'TextEdit', 'covered': 'TextEdit', 'height': 'TextEdit', 'maxheight_': 'TextEdit', 'dual_carri': 'TextEdit', 'int_ref': 'TextEdit', 'int_name': 'TextEdit', 'step_count': 'TextEdit', 'bridge_str': 'TextEdit', 'ramp': 'TextEdit', 'incline': 'TextEdit', 'handrail': 'TextEdit', 'toll': 'TextEdit', 'operator': 'TextEdit', 'minspeed': 'TextEdit', 'parking__3': 'TextEdit', 'service': 'TextEdit', 'parking__4': 'TextEdit', 'parking__5': 'TextEdit', 'parking_ri': 'TextEdit', 'parking__6': 'TextEdit', 'tunnel': 'TextEdit', 'source_wid': 'TextEdit', 'oneway_bus': 'TextEdit', 'name_ta': 'TextEdit', 'noname': 'TextEdit', 'is_in_coun': 'TextEdit', 'name_si': 'TextEdit', 'direction': 'TextEdit', 'motor_vehi': 'TextEdit', 'motorcycle': 'TextEdit', 'motorcar': 'TextEdit', 'hgv': 'TextEdit', 'loc_name': 'TextEdit', 'maxweight_': 'TextEdit', 'horse': 'TextEdit', 'cycleway': 'TextEdit', 'bicycle': 'TextEdit', 'access': 'TextEdit', 'turn_lan_1': 'TextEdit', 'lanes_forw': 'TextEdit', 'lanes_back': 'TextEdit', 'parking__7': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'oneway_hgv': 'TextEdit', 'maxheight': 'TextEdit', 'destinat_2': 'TextEdit', 'parking__8': 'TextEdit', 'width': 'TextEdit', 'parking__9': 'TextEdit', 'parking_10': 'TextEdit', 'parking_11': 'TextEdit', 'parking_12': 'TextEdit', 'oneway_con': 'TextEdit', 'check_da_1': 'TextEdit', 'bus': 'TextEdit', 'sidewalk_b': 'TextEdit', 'foot': 'TextEdit', 'sidewalk_l': 'TextEdit', 'cycleway_r': 'TextEdit', 'cycleway_1': 'TextEdit', 'official_n': 'TextEdit', 'name_zh-Ha': 'TextEdit', 'name_zh-_1': 'TextEdit', 'name_en': 'TextEdit', 'alt_name': 'TextEdit', 'junction': 'TextEdit', 'parking_13': 'TextEdit', 'is_in': 'TextEdit', 'lane_marki': 'TextEdit', 'old_name': 'TextEdit', 'smoothness': 'TextEdit', 'sidewalk': 'TextEdit', 'shoulder': 'TextEdit', 'ref': 'TextEdit', 'parking_14': 'TextEdit', 'oneway': 'TextEdit', 'old_ref': 'TextEdit', 'name_zh': 'TextEdit', 'lit': 'TextEdit', 'surface': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', });
lyr_Schools_6.set('fieldImages', {'OBJECTID': 'Range', 'MF_TYPE': 'Range', 'MF_NAME': 'TextEdit', 'MF_ADDRESS': 'TextEdit', 'MF_POSTAL_': 'Range', 'MFF_WARD_N': 'Range', 'MF_TELEPHO': 'TextEdit', 'SC_MEDIUM': 'Range', 'SC_NB_YEAR': 'TextEdit', 'SC_TYPE': 'TextEdit', 'SC_NB_TEAC': 'Range', 'SC_NB_STUD': 'Range', 'SC_REMARKS': 'TextEdit', });
lyr_HealthFacilities_7.set('fieldImages', {'OBJECTID': 'Range', 'HF_TYPE': 'Range', 'HF_OWNERSH': 'Range', 'HF_NAME': 'TextEdit', 'HF_ADDRESS': 'TextEdit', 'HF_POSTAL_': 'Range', 'HFF_WARD_N': 'Range', 'HF_TELEPHO': 'TextEdit', 'HF_OFFICER': 'TextEdit', });
lyr_CMCboundary_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_WaterBodies_2.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'WA_TYPE': 'no label', 'WA_NAME': 'inline label - visible with data', });
lyr_GreenSpaces_3.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GS_NAME': 'no label', 'GS_TYPE': 'no label', });
lyr_Railways_4.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', });
lyr_Roads_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'maxspeed_a': 'no label', 'trolley_wi': 'no label', 'informal': 'no label', 'parking_co': 'no label', 'segregated': 'no label', 'constructi': 'no label', 'crossing_m': 'no label', 'tactile_pa': 'no label', 'turn_lanes': 'no label', 'destinatio': 'no label', 'descriptio': 'no label', 'parking_la': 'no label', 'trail_visi': 'no label', 'traffic_si': 'no label', 'crossing_i': 'no label', 'button_ope': 'no label', 'maxspeed_t': 'no label', 'parking__1': 'no label', 'motorroad': 'no label', 'crossing': 'no label', 'footway': 'no label', 'indoor': 'no label', 'level': 'no label', 'parking_bo': 'no label', 'parking__2': 'no label', 'noref': 'no label', 'destinat_1': 'no label', 'tracktype': 'no label', 'highway_1': 'no label', 'sidewalk_r': 'no label', 'cutting': 'no label', 'route': 'no label', 'check_date': 'no label', 'covered': 'no label', 'height': 'no label', 'maxheight_': 'no label', 'dual_carri': 'no label', 'int_ref': 'no label', 'int_name': 'no label', 'step_count': 'no label', 'bridge_str': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'toll': 'no label', 'operator': 'no label', 'minspeed': 'no label', 'parking__3': 'no label', 'service': 'no label', 'parking__4': 'no label', 'parking__5': 'no label', 'parking_ri': 'no label', 'parking__6': 'no label', 'tunnel': 'no label', 'source_wid': 'no label', 'oneway_bus': 'no label', 'name_ta': 'no label', 'noname': 'no label', 'is_in_coun': 'no label', 'name_si': 'no label', 'direction': 'no label', 'motor_vehi': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'hgv': 'no label', 'loc_name': 'no label', 'maxweight_': 'no label', 'horse': 'no label', 'cycleway': 'no label', 'bicycle': 'no label', 'access': 'no label', 'turn_lan_1': 'no label', 'lanes_forw': 'no label', 'lanes_back': 'no label', 'parking__7': 'no label', 'layer': 'no label', 'bridge': 'no label', 'oneway_hgv': 'no label', 'maxheight': 'no label', 'destinat_2': 'no label', 'parking__8': 'no label', 'width': 'no label', 'parking__9': 'no label', 'parking_10': 'no label', 'parking_11': 'no label', 'parking_12': 'no label', 'oneway_con': 'no label', 'check_da_1': 'no label', 'bus': 'no label', 'sidewalk_b': 'no label', 'foot': 'no label', 'sidewalk_l': 'no label', 'cycleway_r': 'no label', 'cycleway_1': 'no label', 'official_n': 'no label', 'name_zh-Ha': 'no label', 'name_zh-_1': 'no label', 'name_en': 'no label', 'alt_name': 'no label', 'junction': 'no label', 'parking_13': 'no label', 'is_in': 'no label', 'lane_marki': 'no label', 'old_name': 'no label', 'smoothness': 'no label', 'sidewalk': 'no label', 'shoulder': 'no label', 'ref': 'no label', 'parking_14': 'no label', 'oneway': 'no label', 'old_ref': 'no label', 'name_zh': 'no label', 'lit': 'no label', 'surface': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', });
lyr_Schools_6.set('fieldLabels', {'OBJECTID': 'no label', 'MF_TYPE': 'no label', 'MF_NAME': 'inline label - visible with data', 'MF_ADDRESS': 'no label', 'MF_POSTAL_': 'no label', 'MFF_WARD_N': 'no label', 'MF_TELEPHO': 'inline label - visible with data', 'SC_MEDIUM': 'no label', 'SC_NB_YEAR': 'no label', 'SC_TYPE': 'no label', 'SC_NB_TEAC': 'no label', 'SC_NB_STUD': 'no label', 'SC_REMARKS': 'no label', });
lyr_HealthFacilities_7.set('fieldLabels', {'OBJECTID': 'no label', 'HF_TYPE': 'no label', 'HF_OWNERSH': 'no label', 'HF_NAME': 'inline label - visible with data', 'HF_ADDRESS': 'no label', 'HF_POSTAL_': 'no label', 'HFF_WARD_N': 'no label', 'HF_TELEPHO': 'inline label - visible with data', 'HF_OFFICER': 'no label', });
lyr_HealthFacilities_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});