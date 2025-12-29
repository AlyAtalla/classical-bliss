import ComposerCard from "./ComposerCard";

function ComposerGrid({ composers }) {
  return (
    <section className="grid">
      {composers.map((composer) => (
        <ComposerCard key={composer.id} composer={composer} />
      ))}
    </section>
  );
}

export default ComposerGrid;
