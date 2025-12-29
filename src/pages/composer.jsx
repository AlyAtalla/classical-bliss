import { useParams } from "react-router-dom";
import { composers } from "../data/composers";
import { works } from "../data/works";
import WorksList from "../components/WorksList";
import "../styles/composer.css";

function Composer() {
  const { slug } = useParams();
  const composer = composers.find((c) => c.slug === slug);

  if (!composer) {
    return <p>Composer not found.</p>;
  }

  const composerWorks = works[composer.slug] || [];

  return (
    <main className="composer">
      {/* Header */}
      <header className="composer-header">
        <img
          src={composer.image}
          alt={composer.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/src/assets/composer-placeholder.jpg";
          }}
        />
        <div>
          <h1>{composer.name}</h1>
          <span>{composer.born} – {composer.died}</span>
        </div>
      </header>

      {/* Bio */}
      <section className="bio">
        <p>{composer.bio}</p>
      </section>

      {/* Works list */}
      <WorksList works={composerWorks} />
    </main>
  );
}

export default Composer;
