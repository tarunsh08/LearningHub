import React from 'react';
import { lessons } from '../data/lessons';

function Home({ onSelect }) {
  return (
    <div>
      <h2>Select a Subject</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {lessons.map((lesson) => (
          <div key={lesson.id} style={{ border: '1px solid #ccc', padding: '10px', cursor: 'pointer' }}
               onClick={() => onSelect(lesson)}>
            <h4>{lesson.subject}</h4>
            <p>{lesson.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
