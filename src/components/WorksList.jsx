function WorksList({ works }) {
  if (!works.length) return null;

  // Group by instrument
  const grouped = works.reduce((acc, work) => {
    acc[work.instrument] = acc[work.instrument] || [];
    acc[work.instrument].push(work);
    return acc;
  }, {});

  return (
    <section className="works">
      <h2>Works & Recordings</h2>
      {Object.entries(grouped).map(([instrument, works]) => (
        <div key={instrument} className="instrument-group">
          <h3>{instrument}</h3>
          {works.map((work) => (
            <div key={work.id} className="work">
              <p>{work.title}</p>
              {work.audio ? (
                <audio controls preload="none">
                  <source src={work.audio} type="audio/mpeg" />
                  Your browser does not support audio playback.
                </audio>
              ) : (
                <p>No recording available</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default WorksList;
