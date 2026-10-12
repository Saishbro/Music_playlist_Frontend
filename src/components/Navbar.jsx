import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">🎵 Music Manager</h2>

        <div className="navbar-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/artists">Artists</NavLink>
          <NavLink to="/albums">Albums</NavLink>
          <NavLink to="/songs">Songs</NavLink>
          <NavLink to="/playlists">Playlists</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;