function PlaylistDetails(props) {

  return (
    <>
      <h1>Playlist Details</h1>

      <h2>{props.name}</h2>

      <p>ID: {props.id}</p>
      <p>User ID: {props.userId}</p>

      <br></br>
    </>
  )
}

export default PlaylistDetails