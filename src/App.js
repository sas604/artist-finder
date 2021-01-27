import { useFetch } from "./utils/hooks/useFetch";
import { BsSearch } from "react-icons/bs";
import { useForm } from "./utils/hooks/useForm";
import { useEffect, useState } from "react";
import ArtistBio from "./components/artist-bio";
import styled from "styled-components";

const AppStyles = styled.main`
  padding: 3rem 1rem;
  max-width: 960px;
  margin: 0 auto;
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
      padding: 0.5rem;
      border-radius: 30px;
      border: 2px solid var(--blue);
      display: flex;
      align-items: center;
      flex: 7;
      input {
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
  console.log(data);
  return (
    <AppStyles>
      <div className="title">
        <h1>Music Finder</h1>
        <span>Your faiworite artists just a click away</span>
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
      {artist && !notFound && <ArtistBio artist={artist} />}
    </AppStyles>
  );
}

export default App;
