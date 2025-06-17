import React, { useEffect, useState } from 'react';
import { lessons } from '../data/lessons';

function Progress() {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('progress')) || {};
    const done = lessons.filter((l) => saved[l.id]);
    setCompleted(done);
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>✅ Progress</h3>
      <ul>
        {completed.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
        {completed.length === 0 && <p>No lessons completed yet.</p>}
      </ul>
    </div>
  );
}

export default Progress;
