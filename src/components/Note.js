import {MdDeleteForever} from 'react-icons/md'
const Note = () => {
    return(
        <div className='note'>
            <span> hello this is our first note! Hurray </span>
            <div className='note-footer'>
                <small>13/14/2022</small>
                <MdDeleteForever className='delete-icon' />
            </div>
        </div>
    )
}

export default Note;