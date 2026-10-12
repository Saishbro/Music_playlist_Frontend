import { useState, useEffect } from "react";

function Artists() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Welcome to the Artists page!");
  }, []);

  return (
    <div className="page">
      <h1>Artists</h1>
      <p>{message}</p>
    </div>
  );
}

export default Artists;