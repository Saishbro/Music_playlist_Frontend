import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Songs from "./pages/Songs";
import Playlists from "./pages/Playlists";




import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/playlists" element={<Playlists />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}




export default App;

