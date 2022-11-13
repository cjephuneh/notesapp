import {useState} from 'react'
const AddNote = ({ handleaddNote }) => {
     const[noteText, setNoteText] = useState('')

    const handleChange = (event) => (
        setNoteText(event.target.value)
    )

    const handleSaveClick = () =>{
        handleaddNote(noteText)
    }
    return(
        <>
            <div className='note new'>
                    <textarea 
                     rows="8"
                     cols="15" 
                     placeholder="Type to add a note..."
                     value={noteText}
                     onChange={handleChange}
                    ></textarea>
           
                <div className="note-footer">
                     <small> 200 remaining</small>
                    <button className='save' onCLick={handleSaveClick}>Save</button>
                </div>
            </div>

        </>
    )
}

export default AddNote