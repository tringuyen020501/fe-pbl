// src/VideoModal.js
import React from "react";
import Modal from "react-modal";
import "./App.css";

const VideoModal = ({ isOpen, onRequestClose, videoUrl }) => {
  const isYouTube =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video Modal"
      className="Modal"
      overlayClassName="Overlay"
      ariaHideApp={false}
    >
      {isYouTube ? (
        <iframe
          width="100%"
          height="400"
          src={videoUrl.replace("watch?v=", "embed/")}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <video width="100%" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </Modal>
  );
};

export default VideoModal;
