import React, { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import Note from "./Note";
import _  from 'lodash';
import "../App.css";

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [sortType, setSortType] = useState("oldest");
  const [filterType, setFilterType] = useState("month");
  useEffect(() => {
    const sortArray = (type) => {
      const sorted = [...notes].sort((a, b) => {
        if (type == "oldest") {
          return a.timestamp.localeCompare(b.timestamp);
        } else {
          return b.timestamp.localeCompare(a.timestamp);
        }
      });
      console.log(sorted);
      setNotes(sorted);
    };

    sortArray(sortType);
  }, [sortType]);


   // filtering

      useEffect(() => {
        const filterArray = (type) => {
          const filtered = [...notes].sort((a,b) => {
            if (type == "month") {
              return (b.date.month)<(a.date.month);
            } else if(type =="year"){
              return (b.date.year)<(a.date.year);
            }
          });
          console.log(filtered);
          setNotes(filtered);
        };

        filterArray(filterType);
      }, [filterType]);


  const addNote = (note) => {
    if (!note.text || /^\s*$/.test(note.text)) {
      return;
    }
    let timestamp = new Date();
    let date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(timestamp);
      
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();


    
    const time = {
      month : currentMonth,
      year : currentYear
    };

    var noted = {
      note: note,
      date: time,
      timestamp: date,
    };
 
    console.log(noted)

    const newNotes = [noted, ...notes];

    setNotes(newNotes);
    console.log(...notes);
  };

  const removeNote = (id) => {
    const removedArr = [...notes].filter((note) => note.note.id !== id);

    setNotes(removedArr);
  };

  return (
    <div className="notelist">
      <h1>My Diary App</h1>
      <div className="main-header">
        <div className="sorting">
          <select
            className="select"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        <div className="filtering">
          <select
            className="select"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
      </div>
      <NoteForm onSubmit={addNote} />
      <Note notes={notes} removeNote={removeNote} />
    </div>
  );
}

export default NoteList;
