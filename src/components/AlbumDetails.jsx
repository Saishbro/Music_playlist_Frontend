
function AlbumDetails(props) {

  return (
    <>
      <h1>Album Details</h1>

      <h2>{props.title}</h2>

      <p>ID: {props.id}</p>
      <p>Release Year: {props.releaseYear}</p>
      <p>Artist ID: {props.artistId}</p>

      <br></br>
    </>
  )
}

export default AlbumDetails