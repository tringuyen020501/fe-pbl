import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./App.css";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 21.0285,
  lng: 105.8542,
};

function App() {
  return (
    <div className="App">
      <h1>WebGIS Đơn Giản với React và Google Maps</h1>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default App;
