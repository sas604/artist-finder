import styled from "styled-components";
import ArtistAlbums from "./artist-albums";

const ArtistBioStyles = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  .bio {
    flex: 3;
    min-width: 200px;
    h2 {
      margin: 0;
      font-size: 2rem;
      color: var(--blue);
    }
    .bage {
      margin-top: 1rem;
      border-radius: 30px;
      padding: 0 0.5rem;
      color: var(--white);
      background: var(--red);
    }
  }
`;
export default function ArtistBio({ artist }) {
  const { strArtist, strArtistThumb, strGenre, idArtist } = artist;
  console.log(artist);

  return (
    <ArtistBioStyles>
      <div className="bio">
        <div className="thumb">
          <img src={strArtistThumb} alt={`${strArtist} logo`} />
        </div>
        <div className="artist-title">
          <h2>{strArtist}</h2>
          <span className="bage">{strGenre}</span>
        </div>
      </div>

      <ArtistAlbums id={idArtist} />
    </ArtistBioStyles>
  );
}
