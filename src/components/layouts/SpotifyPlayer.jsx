import styles from "./SpotifyPlayer.module.css";
import anima from "../../styles/animations.module.css";

function SpotifyPlayer() {
  return (
    <div className={`${styles.spotifyPlayer} ${anima.slideInTop}`}>
      <iframe
        src="https://open.spotify.com/embed/track/1PQRwFvNM7xV65bIkHmDtx?utm_source=generator"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Player"
      ></iframe>
    </div>
  );
}

export default SpotifyPlayer;