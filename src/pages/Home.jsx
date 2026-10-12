
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <div className="page-top">
        <div>
          <span className="eyebrow">Welcome to your music space</span>
          <h1>Music Manager</h1>
          <p className="page-subtitle">
            Everything you love about music, in one place.
          </p>
        </div>

        <div className="profile-circle">♙</div>
      </div>

      <section className="hero-banner">
        <div className="hero-text">
          <h2>Your music. Your mood.</h2>
          <p>
            Organize artists, explore albums,
            discover songs, and create playlists.
          </p>

          <Link to="/playlists" className="primary-button">
            View Playlists →
          </Link>
        </div>

        <div className="hero-art">♫</div>
      </section>

      

      
    </div>
  );
}

export default Home;
