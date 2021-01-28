import { useFetch } from "./utils/hooks/useFetch";
import { BsMoon, BsSearch, BsSun } from "react-icons/bs";
import { useForm } from "./utils/hooks/useForm";
import { useEffect, useState } from "react";
import ArtistBio from "./components/artist-bio";
import AlbumModal from "./components/album-modal";
import AppStyles from "./styles/app-styles";
import ScaleLoader from "react-spinners/ScaleLoader";
import NotFound from "./components/404";
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
    if (!values.query) {
      setNotFound(
        <span className="empty">Empty request. Try to type artist name</span>
      );
      return;
    }
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
        <ScaleLoader color="var(--red)" loading={loading} size={150} />
        {notFound && <NotFound text={notFound} />}
        {artist && !notFound && <ArtistBio getId={getId} artist={artist} />}
      </AppStyles>
    </>
  );
}

export default App;
