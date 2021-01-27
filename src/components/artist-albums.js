import { useFetch } from "../utils/hooks/useFetch";
import { BsCardImage } from "react-icons/bs";
import styled from "styled-components";

const AlbumListStyles = styled.div`
  flex: 7;
  padding-left: 3rem;
  h3 {
    font-size: 1.5rem;
  }
  ul {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  li {
    list-style: none;
    &:hover {
      cursor: poiner;
    }
  }
  .no-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    border: 1px solid var(--red);
  }
  .album-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--red);
    .year {
      font-size: 1rem;
      font-weight: normal;
      color: var(--font);
    }
  }
`;
export default function ArtistAlbums({ id }) {
  const url = `https://theaudiodb.com/api/v1/json/1/album.php?i=${id}`;
  const [loading, data] = useFetch(url);

  if (loading) return <h1>Loading</h1>;
  const album = data?.album;
  if (!album) return null;
  return (
    <AlbumListStyles>
      <h3>Albums</h3>
      <ul>
        {album.map((album) => (
          <li key={album.idAlbum}>
            {album.strAlbumThumb ? (
              <img src={album.strAlbumThumb} alt={`${album.strAlbum} logo`} />
            ) : (
              <div className="no-image">
                <BsCardImage />
                <span>No album image</span>
              </div>
            )}
            <div className="album-info">
              <h4>{album.strAlbum}</h4>
              <span className="year">{album.intYearReleased}</span>
            </div>
          </li>
        ))}
      </ul>
    </AlbumListStyles>
  );
}
