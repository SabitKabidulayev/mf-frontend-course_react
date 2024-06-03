import { useState } from 'react';
import './App.css';

const initialStudents = [
  { name: 'Серик', lesson: 'DOM' },
  { name: 'Саня', lesson: 'React' },
  { name: 'Дина', lesson: 'Angular' },
  { name: 'Гульжан', lesson: 'Promise' },
  { name: 'Гульмира', lesson: 'Event loop' },
  { name: 'Гульнар', lesson: 'Асинхронность' },
  { name: 'Сабит', lesson: 'Next.js' },
  { name: 'Медеу', lesson: 'Vue.js' },
  { name: 'Али', lesson: 'Jquery' }
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const handleDelete = (indexToDelete) => {
    setStudents(students.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="app-container">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          student={student}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default App;

const StudentCard = ({ student, onDelete }) => {
  return (
    <div className="student-card">
      <p>{student.name}</p>
      <p>{student.lesson}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
