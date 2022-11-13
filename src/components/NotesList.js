import Note from './Note.js'
import AddNote from './AddNote.js'
const NoteList = ({notes, handleaddNote }) => {
    return(
        <div className='note-list'>
            {notes.map((note) => (
            <Note 
             id={note.id}
             text={note.text} 
             date={note.date}
             />
            ))}
            <AddNote handleaddNote={handleaddNote}/>
          
        </div>
    )
}

export default NoteList;