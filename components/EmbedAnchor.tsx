interface Props {
  src: string;
}

export default function EmbedAnchor(props: Props) {
  const anchorURL = props.src.split("/");
  const anchorSlug = anchorURL[anchorURL.length - 1];
  return (
    <iframe
      src={`https://anchor.fm/resize/embed/episodes/${anchorSlug}`}
      height="102px"
      width="400px"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
}
