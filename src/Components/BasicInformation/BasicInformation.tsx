import { FC } from 'react';
import './BasicInformation.css';
import moment from 'moment-timezone';
import BasicInfo from '../../Models/BasicInfo';

interface IBasicInformationProps {
  basicInformation: BasicInfo
}

const BasicInformation: FC<IBasicInformationProps> = (props: IBasicInformationProps) => {
  const { basicInformation } = props;
  const { displayName, tag, isMember, inGameName, roles, joinedAt, active } = basicInformation;

  return(
    <div className="tile is-child box info-tile">
      <div><strong>Nickname: </strong>{displayName}</div>
      <div><strong>Tag: </strong>{tag}</div>
      { isMember ? <div><strong>IGN: </strong>{inGameName}</div> : <div></div> }
      <div>
        <strong>Roles: </strong>
        {
          roles.map((role: string, index: number) => {
            let comma = ",";
            if(index === roles.length-1){
              comma = "";
            }
            return(
              <span key={index}>{role}{comma} </span>
            )
          })
        }   
      </div>
      <div><strong>JoinedAt: </strong>{moment(joinedAt).tz("America/New_York").format("ddd, M/D/YY, h:mm:ssA")} EST</div>
      {
        active ? <div><strong>Current</strong> user in Discord</div> : <div><strong>No longer</strong> in Discord</div>
      }
    </div>
  )
}


export default BasicInformation;
