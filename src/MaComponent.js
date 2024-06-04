// src/MapComponent.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// URL icon tùy chỉnh
const customIconUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png";
const customIcon = new L.Icon({
  iconUrl: customIconUrl,
  iconSize: [20, 31],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const locations = [
  {
    id: 1,
    position: [16.074151466760846, 108.21651177362932],
    videoUrl: "https://www.youtube.com/watch?v=FqJWMaJaKkM",
  },
  {
    id: 2,
    position: [16.074058171262294, 108.21605447341446],
    videoUrl: "https://www.youtube.com/watch?v=UY0u7LgVcm0",
  },
  {
    id: 3,
    position: [16.075352889037482, 108.1518654854271],
    videoUrl: "https://www.youtube.com/watch?v=0vezwLiQIpk",
  },
];

const MapComponent = ({ onMarkerClick }) => {
  return (
    <MapContainer
      center={[16.047079, 108.20623]}
      zoom={13}
      style={{ height: "1000px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.position}
          icon={customIcon}
          eventHandlers={{
            click: () => {
              onMarkerClick(location.videoUrl);
            },
          }}
        >
          {/* <Popup>Click to view video.</Popup> */}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
