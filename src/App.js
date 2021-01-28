import { useFetch } from "./utils/hooks/useFetch";
import { BsMoon, BsSearch, BsSun } from "react-icons/bs";
import { useForm } from "./utils/hooks/useForm";
import { useEffect, useState } from "react";
import ArtistBio from "./components/artist-bio";
import styled from "styled-components";
import AlbumModal from "./components/album-modal";

const AppStyles = styled.main`
  position: relative;
  overflow: ${(props) => (props.albumId ? "hidden" : "auto")};
  max-height: ${(props) => (props.albumId ? "100vh" : "unset")};
  padding: 4rem 1rem;
  max-width: 960px;
  margin: 0 auto;
  .theme-switch-wrapper {
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: flex;
    align-items: center;
  }
  .theme-switch {
    display: inline-block;
    height: 25px;
    position: relative;
    width: 60px;
  }

  .theme-switch input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 18px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 18px;
  }

  input:checked + .slider {
    background-color: var(--blue);
  }

  input:checked + .slider:before {
    transform: translateX(33px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .sun,
  .moon {
    margin: 0 0.5rem;
    font-size: 1.3rem;
  }
  .moon {
    color: var(--moon);
  }
  .sun {
    color: var(--sun);
  }
  .title {
    text-align: center;
    margin-bottom: 3rem;

    h1 {
      font-size: 3.5rem;
      margin: 0;
      background: linear-gradient(
        74deg,
        var(--red) 24%,
        var(--yellow) 44%,
        var(--auqa) 67%,
        var(--blue) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  form {
    width: 90vw;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0 1rem;
    > * {
      margin-top: 1rem;
    }
    .field {
      padding: 0.5rem 0.5rem 0.5rem 1rem;
      border-radius: 30px;
      border: 2px solid var(--blue);
      display: flex;
      align-items: center;
      flex: 7;
      input {
        color: inherit;
        border: none;
        padding: 0.5rem;
        background-color: transparent;
      }
    }
    button {
      appearance: none;
      border: none;
      cursor: pointer;
      border-radius: 30px;
      background: linear-gradient(74deg, var(--red) 0%, var(--yellow) 100%);
      flex: 3;
      color: white;
      padding: 0.5rem;
      font-size: 2rem;
      line-height: 2rem;
      max-width: 150px;
    }
  }
`;
function App() {
  const [artist, SetArtist] = useState(false);
  const [query, SetQuery] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [loading, data] = useFetch(query);
  const { values, updateValue } = useForm({ query: "" });
  const [albumId, setAlbumId] = useState(null);
  const getId = (id) => setAlbumId(id);
  const searchArtist = (e) => {
    e.preventDefault();
    SetQuery(
      `https://theaudiodb.com/api/v1/json/1/search.php?s=${values.query.replace(
        " ",
        "_"
      )}`
    );
  };
  useEffect(() => {
    setNotFound(false);
    if (!data) return;
    if (!data.artists) {
      SetArtist("false");
      setNotFound(true);
      return;
    }
    SetArtist(data.artists[0]);
  }, [data, query]);

  return (
    <>
      {albumId && <AlbumModal id={albumId} getId={getId} />}
      <AppStyles albumId={albumId}>
        <div className="theme-switch-wrapper">
          <BsSun className="sun" />
          <label className="theme-switch" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={(e) => document.body.classList.toggle("dark")}
            />
            <div className="slider round"></div>
          </label>
          <BsMoon className="moon" />
        </div>
        <div className="title">
          <h1>Music Finder</h1>
          <span>Your favorite artists just a click away</span>
        </div>
        <form onSubmit={searchArtist}>
          <div className="field">
            <label htmlFor="query">Search:</label>
            <input
              id="query"
              type="text"
              name="query"
              value={values.query}
              onChange={updateValue}
              placeholder="Type artist name"
            />
          </div>
          <button>
            <BsSearch />
          </button>
        </form>
        {loading && <h1>Loading</h1>}
        {notFound && <h3>NotFound</h3>}
        {artist && !notFound && <ArtistBio getId={getId} artist={artist} />}
      </AppStyles>
    </>
  );
}

export default App;
