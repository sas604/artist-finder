import { BsCardImage, BsXCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { useFetch } from "../utils/hooks/useFetch";
import Track from "./track";

const ModalStyles = styled.div`
  position: absolute;
  z-index: 5;
  display: flex;
  justify-content: center;
  background-color: var(--black);
  align-items: flex-start;
  min-height: 100%;
  width: 100%;
  .modal-content {
    position: relative;
    margin: 3rem 2rem;
    background-color: var(--bg);
    padding: 3rem;
    max-width: 960px;
    width: 90vw;
  }
  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    border: none;
    color: var(--blue);
    font-size: 2rem;
    background-color: transparent;
    cursor: pointer;
  }
  .modal-album-header {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .media {
    flex: 3;
    min-width: 150px;
  }
  .description {
    margin-top: 1rem;
    flex: 7;
    min-width: 300px;
  }
  ul {
    padding: 0;
  }
  li {
    margin: 0;
  }
  li + li {
    margin-top: 1rem;
  }
`;

export default function AlbumModal({ id, getId }) {
  const url = `https://theaudiodb.com/api/v1/json/1/album.php?m=${id}`;
  const urlTracks = `https://theaudiodb.com/api/v1/json/1/track.php?m=${id}`;
  const [loading, data] = useFetch(url);
  const [loadingTracks, tracks] = useFetch(urlTracks);
  if (!data || !tracks) return null;
  if (loading || loadingTracks) return <h1> Loading </h1>;

  console.log(tracks);
  console.log(data.album[0]);
  const album = data.album[0];
  return (
    <ModalStyles>
      <div className="modal-content">
        <button
          type="button"
          aria-label="close modal"
          onClick={() => getId(null)}
        >
          <BsXCircleFill />
        </button>
        <div className="modal-album-header">
          <div className="media">
            {album.strAlbumThumb ? (
              <img src={album.strAlbumThumb} alt={`${album.strAlbum} logo`} />
            ) : (
              <div className="no-image">
                <BsCardImage />
                <span>No album image</span>
              </div>
            )}
          </div>

          <div className=" description">
            <h2>{album.strAlbum}</h2>
            <span className="year">{album.intYearReleased}</span>
            <p>{album.strDescriptionEN} </p>
          </div>
        </div>
        <h2>Tracks</h2>
        <ul>
          {tracks.track.map((track, i) => (
            <Track
              i={i}
              key={track.idTrack}
              name={track.strTrack}
              duration={track.intDuration}
            />
          ))}
        </ul>
      </div>
    </ModalStyles>
  );
}
