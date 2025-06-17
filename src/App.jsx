import React, { useState } from 'react';
import Home from './components/Home';
import Lesson from './components/Lesson';
import Progress from './components/Progress';

function App() {
  const [view, setView] = useState('home');
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setView('lesson');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>📚 LearningHub Portal</h1>
      {view === 'home' && <Home onSelect={handleLessonSelect} />}
      {view === 'lesson' && selectedLesson && (
        <Lesson lesson={selectedLesson} onBack={() => setView('home')} />
      )}
      <Progress />
    </div>
  );
}

export default App;
