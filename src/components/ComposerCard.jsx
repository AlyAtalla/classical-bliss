function ComposerCard({ composer }) {
  const url = `/composer/${composer.slug}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
    >
      <h2>{composer.name}</h2>
      <span>
        {composer.born} – {composer.died}
      </span>
    </a>
  );
}

export default ComposerCard;
