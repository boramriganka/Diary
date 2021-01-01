  
import React, { useState } from 'react';
import NoteForm from './NoteForm';
import { RiCloseCircleLine } from 'react-icons/ri';

const Note = ({ notes, removeNote, updateNote }) => {
 



  return notes.map((note, index) => (
    <div
      className={note.isComplete ? "note-row complete" : "note-row"}
      key={index}
    >
      <div className="note" key={note.note.id}>
        <div className="main">
          <h1>Note</h1>
          <p>"{note.note.text}"</p>
        </div>
        <div className="info">
           <p>
            created at : {note.date.hour}:{note.date.minute} , {note.date.month} /{note.date.year}
          </p>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeNote(note.note.id)}
              className="delete-icon"
            />
            <h6>delete</h6>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Note;
