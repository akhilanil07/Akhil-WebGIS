require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function (Map, MapView, FeatureLayer) {

  const featureLayer = new FeatureLayer({
    url: "https://services1.arcgis.com/qr14biwnHA6Vis6l/arcgis/rest/services/TAMU_FEATURE_WEBGIS/FeatureServer",
    popupTemplate: {
      title: "{Name}",
      content: [
        {
          type: "fields",
          fieldInfos: [
            { fieldName: "Name", label: "Name" },
            { fieldName: "Type", label: "Type" }
          ]
        }
      ]
    }
  });

  const map = new Map({
    basemap: "streets",
    layers: [featureLayer]
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-96.34, 30.61],
    zoom: 14
  });
});