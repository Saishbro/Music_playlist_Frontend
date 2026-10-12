function SongDetails(props) {

  return (
    <>
      <h1>Song Details</h1>

      <h2>{props.title}</h2>

      <p>ID: {props.id}</p>
      <p>Artist: {props.artist}</p>
      <p>Genre: {props.genre}</p>
      <p>Duration: {props.duration}</p>

      <br></br>
    </>
  )
}

export default SongDetails