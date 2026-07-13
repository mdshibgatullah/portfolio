import React from 'react';

function TrustStrip() {
  const tags = ["PHP", "Laravel", "React.js", "JavaScript", "Adobe Photoshop", "Illustrator"];

  return (
    <div className="trust-strip">
      <div className="container d-flex flex-wrap align-items-center justify-content-between gap-4">
        <span className="trust-label">Core stack</span>
        <div className="stack-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustStrip;