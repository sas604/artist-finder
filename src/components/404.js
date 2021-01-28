export default function NotFound({ text }) {
  if (text) return text;
  return <h2>Oops, nothing was found. Try to make different request.</h2>;
}
