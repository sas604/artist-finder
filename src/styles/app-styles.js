import styled from "styled-components";
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
export default AppStyles;
