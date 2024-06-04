import React, { useState } from "react";
import "./App.css";
import MapComponent from "./MapComponent";
import VideoModal from "./VideoModal";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMarkerClick = (url) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <MapComponent onMarkerClick={handleMarkerClick} />
        <VideoModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          videoUrl={videoUrl}
        />
      </header>
    </div>
  );
}

export default App;
