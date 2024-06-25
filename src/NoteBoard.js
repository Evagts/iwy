import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Asegúrate de ajustar esta importación según tu configuración
import { collection, addDoc, getDocs } from 'firebase/firestore';

function NoteBoard() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const notesCollection = await getDocs(collection(db, 'notes'));
      setNotes(notesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchNotes();
  }, []);

  const addNote = async (note) => {
    const docRef = await addDoc(collection(db, 'notes'), { content: note });
    setNotes([...notes, { id: docRef.id, content: note }]);
  };

  return (
    <div className="note-board">
      <NoteForm addNote={addNote} />
      {notes.map(note => (
        <div key={note.id} className="note">
          {note.content}
        </div>
      ))}
    </div>
  );
}

function NoteForm({ addNote }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      addNote(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Escribe tu nota aquí"
      />
      <button type="submit">Añadir Nota</button>
    </form>
  );
}

export default NoteBoard;
