import { FC } from 'react';
import './NoteInformation.css';
import moment from 'moment-timezone';
import NoteInfo from '../../Models/NoteInfo';

interface INoteInformationProps {
  noteInformation: NoteInfo
}

const NoteInformation: FC<INoteInformationProps> = (props: INoteInformationProps) => {
  const { noteInformation } = props;
  const { id, displayName, note } = noteInformation;

  return(
    <div className="tile is-child box info-tile">
      {
        note ? 
        <div>
          <div><strong>Join Reason: </strong>{note.joinReason}</div>
          <div><strong>User's Comment: </strong>{note.userComment}</div>
          <div><strong>Receptionist: </strong>{note.receptionist}</div>
          <div><strong>Recommender: </strong>{note.recommender}</div>
        </div> :
        <div>
          This user doesn't have any notes.
        </div>
      }
    </div>
  )
}


export default NoteInformation;
