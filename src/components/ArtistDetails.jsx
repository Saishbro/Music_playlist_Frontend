function ArtistDetails(props) {

  return (
    <>
      <h1>Artist Details</h1>

      <h2>{props.name}</h2>

      <p>ID: {props.id}</p>
      <p>Genre: {props.genre}</p>
      <p>Country: {props.country}</p>

      <br></br>
    </>
  )
}

export default ArtistDetails