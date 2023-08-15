import React, { FC } from 'react';
import divideMemberList from '../../Utils/divideMemberList';
import BasicInformation from '../BasicInformation/BasicInformation';
import RankTierInformation from '../RankTierInformation/RankTierInformation';
import './FullInformation.css';
import MemberList from '../../Models/MemberList';
import BasicInfo from '../../Models/BasicInfo';
import RankTierInfo from '../../Models/RankTierInfo';


interface IFullInformationProps {
  memberList: MemberList[]
}

const FullInformation: FC<IFullInformationProps> = (props: IFullInformationProps) => {
  const { memberList } = props;
  const { basicInformationArray, rankTierInformationArray } = divideMemberList(memberList);

  return(
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-vertical is-4">
            {
              basicInformationArray.map((basicInformation: BasicInfo, index: number) => (
                <BasicInformation basicInformation={basicInformation} key={index}/>
              ))
            }
          </div>
          <div className="tile is-parent is-vertical is-4">
            {
              rankTierInformationArray.map((rankTierInformation: RankTierInfo, index: number) => (
                <RankTierInformation rankTierInformation={rankTierInformation} key={index}/>
              ))
            }
          </div>
          <div className="tile is-parent is-vertical is-4">
            NOTE WILL GO HERE
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullInformation;
