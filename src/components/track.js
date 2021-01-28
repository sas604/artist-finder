import styled from "styled-components";

const TrackStyle = styled.li`
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0.5rem;
  border-bottom: 2px solid var(--red);

  p {
    margin: 0;

    margin-right: 1.5rem;

    &:last-of-type {
      margin: 0;
      margin-left: auto;
    }
  }
`;
export default function Track({ name, duration, id, i }) {
  const time = (duration) => {
    const toSeconds = duration / 1000;
    const minutes = Math.floor(toSeconds / 60);

    const seconds = Math.floor(toSeconds - minutes * 60);

    return ` ${minutes}:${seconds < 10 ? seconds * 10 : seconds}`;
  };

  return (
    <TrackStyle key={id}>
      <p>#{i}</p> <p>{name}</p> <p>{time(duration)}</p>
    </TrackStyle>
  );
}
