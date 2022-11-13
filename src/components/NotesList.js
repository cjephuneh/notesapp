import Note from './Note.js'
import AddNote from './AddNote.js'
const NoteList = ({notes}) => {
    return(
        <div className='note-list'>
            {notes.map((note) => (
            <Note 
             id={note.id}
             text={note.text} 
             date={note.date}
             />
            ))}
            <AddNote />
          
        </div>
    )
}

export default NoteList;