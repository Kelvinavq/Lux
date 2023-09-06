const Player = ({ selectedVideo }) => {
  return (
    <div className="Player">
      {selectedVideo && (
        <iframe
          title="Vimeo Video"
          src={`${selectedVideo}`}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Player;
