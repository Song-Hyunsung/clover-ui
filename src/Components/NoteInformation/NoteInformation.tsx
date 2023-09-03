import { FC, useEffect, useState } from 'react';
import './NoteInformation.css';
import NoteInfo from '../../Models/NoteInfo';
import Note from '../../Models/Note';
import useUpdateMemberService from '../../Hooks/useUpdateMemberService';

interface INoteInformationProps {
  noteInformation: NoteInfo
}

const NoteInformation: FC<INoteInformationProps> = (props: INoteInformationProps) => {
  const { noteInformation } = props;
  const { id, displayName, note } = noteInformation;
  const [displayNote, setDisplayNote] = useState<boolean>(true);
  const [noteObject, setNoteObject] = useState<Note | null>(note);
  const [updateNoteObject, setUpdateNoteObject] = useState<Note | null>(note);
  const { updateMemberNote } = useUpdateMemberService();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    switch(status){
      case 0:
        break;
      case 200:
        setNoteObject(updateNoteObject);
        setDisplayNote(true);
        setStatus(0);
        break;
      default:
        alert("Error during update member note. If this continues, please stop and reach out to me.");
        setUpdateNoteObject(noteObject);
        setDisplayNote(true);
        setStatus(0);
        break;
    }
  },[status])

  const createNote = () => {
    const emptyNote: Note = {
      joinReason: "",
      userComment: "",
      receptionist: "",
      recommender: "",
      miscNote: "",
    }
    setNoteObject(emptyNote);
    setUpdateNoteObject(emptyNote);
  }

  const destroyEmptyNote = () => {
    if(isEmptyNote(noteObject)){
      setNoteObject(null);
      setUpdateNoteObject(null);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(updateNoteObject){
      setUpdateNoteObject({...updateNoteObject,[event.target.name] : event.target.value });
    }
  }

  const handleSubmit = async () => {
    if(updateNoteObject){
      const payload: NoteInfo = {
        id: id,
        displayName: displayName,
        note: updateNoteObject
      }
  
      const status: number = await updateMemberNote(payload);
      setStatus(status);
    }
  }

  const isEmptyNote = (note: Note | null) => {
    let isEmpty = true;
    if(!note){
      return isEmpty;
    } else {
      Object.keys(note).forEach(key => {
        if(note[key as keyof Note] !== ""){
          isEmpty = false;
        }
      })
      return isEmpty;
    }
  }

  return(
    <div className="tile is-child box info-tile">
      {
        noteObject ? 
          displayNote ?
          <div>
            <div>
              <div className="note"><strong>Join reason: </strong>{noteObject.joinReason}</div>
              <div className="note"><strong>User comment: </strong>{noteObject.userComment}</div>
              <div className="note"><strong>Greeter: </strong>{noteObject.receptionist}</div>
              <div className="note"><strong>Recommender: </strong>{noteObject.recommender}</div>
              <div className="note"><strong>Note: </strong>{noteObject.miscNote}</div>
            </div>
            <div>
              <button onClick={(e) => setDisplayNote(prevState => !prevState)}>Edit</button>
            </div>
          </div>
          :
          <div>
            <div>
              <div className="note">
                <strong>Join reason: </strong>
                <input className="noteInput" type="text" name="joinReason" value={updateNoteObject?.joinReason} onChange={e => handleChange(e)}/>
              </div>
              <div className="note">
                <strong>User comment: </strong>
                <input className="noteInput" type="text" name="userComment" value={updateNoteObject?.userComment} onChange={(e) => handleChange(e)}/>
              </div>
              <div className="note">
                <strong>Greeter: </strong>
                <input type="text" name="receptionist" value={updateNoteObject?.receptionist} onChange={(e) => handleChange(e)}/>
              </div>
              <div className="note">
                <strong>Recommender: </strong>
                <input type="text" name="recommender" value={updateNoteObject?.recommender} onChange={(e) => handleChange(e)}/>
              </div>
              <div className="note">
                <strong>Note: </strong>
                <input className="noteInput" type="text" name="miscNote" value={updateNoteObject?.miscNote} onChange={(e) => handleChange(e)}/>
              </div>
            </div>
            <div>
              <button onClick={() => {setDisplayNote(prevState => !prevState); destroyEmptyNote()}}>Cancel</button>
              <button onClick={handleSubmit}>Update</button>
            </div>
          </div>
        :
        <div>
          <div>This user doesn't have any notes.</div>
          <div>
            <button onClick={(e) => {setDisplayNote(prevState => !prevState); createNote()}}>Edit</button>
          </div>
        </div>
      }
    </div>
  )
}


export default NoteInformation;
