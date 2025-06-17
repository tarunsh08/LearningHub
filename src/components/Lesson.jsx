import React, { useEffect } from 'react';

function Lesson({ lesson, onBack }) {
  useEffect(() => {
    // Save progress to localStorage
    const progress = JSON.parse(localStorage.getItem('progress')) || {};
    progress[lesson.id] = true;
    localStorage.setItem('progress', JSON.stringify(progress));
  }, [lesson.id]);

  return (
    <div>
      <button onClick={onBack}>⬅ Back</button>
      <h2>{lesson.title}</h2>
      {lesson.video && (
        <video controls width="500">
          <source src={lesson.video} type="video/mp4" />
        </video>
      )}
      <p>{lesson.description}</p>
    </div>
  );
}

export default Lesson;
