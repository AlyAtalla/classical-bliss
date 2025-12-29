import { composers } from "../data/composers";
import ComposerGrid from "../components/ComposerGrid";
import "../styles/home.css";

function Home() {
  const sorted = [...composers].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <main className="home">
      <header className="hero">
        <h1>Classical Bliss</h1>
        <p>A public-domain classical music library</p>
      </header>

      <ComposerGrid composers={sorted} />
    </main>
  );
}

export default Home;
