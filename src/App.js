import {nanoid } from 'nanoid'
import { useState } from 'react'
import NotesList from './components/NotesList.js'
const App = () => {
  const[notes, setNotes] = useState([{
    id: nanoid(),
    text: "this is my first note",
    date: "12/04/2020"
  },

  {
    id: nanoid(),
    text: "this is my second note",
    date: "13/04/2020"
  },

  {
    id: nanoid(),
    text: "this is my third note",
    date: "14/04/2020"
  },

  {
    id: nanoid(),
    text: "this is my fourth note",
    date: "15/04/2020"
  },

  {
    id: nanoid(),
    text: "this is my fifth note",
    date: "16/04/2020"
  },
  {
    id: nanoid(),
    text: "this is my sixth note",
    date: "17/04/2020"
  }
]);

  return(
    <div className='container'>
      
      <NotesList notes={notes}/>                                     
       
    </div>
  )
}

export default App;