
import { useState, useEffect } from "react";

function Playlists() {
  const [message, setMessage] = useState("");

  const playlists = [
    {
      id: 1,
      name: "Daily Mix",
      songs: 12,
      artwork: "♫",
      style: "art-purple"
    },
    {
      id: 2,
      name: "Workout Energy",
      songs: 18,
      artwork: "⚡",
      style: "art-orange"
    },
    {
      id: 3,
      name: "Late Night Vibes",
      songs: 14,
      artwork: "☾",
      style: "art-blue"
    },
    {
      id: 4,
      name: "Focus Mode",
      songs: 10,
      artwork: "☘",
      style: "art-green"
    }
  ];

  useEffect(() => {
    setMessage("Your soundtrack, organized your way.");
  }, []);

  return (
    <div className="page">
      <div className="page-top">
        <div>
          <span className="eyebrow">Your music space</span>
          <h1>My Playlists</h1>
          <p className="page-subtitle">{message}</p>
        </div>

        <div className="profile-circle">♙</div>
      </div>

      <section className="hero-banner">
        <div className="hero-text">
          <h2>Find your next favourite</h2>

          <p>
            Explore your music, discover your mood,
            and keep your favourite songs close.
          </p>

          <a href="/songs" className="primary-button">
            Explore Songs →
          </a>
        </div>

        <div className="hero-art">♫</div>
      </section>

      <div className="section-heading">
        <h2>Your Playlists</h2>
        <span className="muted-text">
          {playlists.length} collections
        </span>
      </div>

      <div className="item-list">
        {playlists.map((playlist) => (
          <div className="item-card" key={playlist.id}>
            <div className={`card-artwork ${playlist.style}`}>
              {playlist.artwork}
            </div>

            <h3>{playlist.name}</h3>

            <p>{playlist.songs} songs</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlists;
