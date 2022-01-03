import L from 'leaflet';

const LocationIcon = L.icon({
  iconUrl: require ('../../assets/icon.png'),
  iconRetinaUrl: require ('../../assets/icon.png'),
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [50, 50],
  className: 'leaflet-venue-icon'
})

export default LocationIcon;
