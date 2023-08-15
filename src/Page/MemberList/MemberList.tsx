import { FC } from 'react';
import './MemberList.css';
import useMemberService from '../../Hooks/useMemberService';
import moment from 'moment-timezone';
import divideMemberList from '../../Utils/divideMemberList';
import BasicInformation from '../../Components/BasicInformation/BasicInformation';

interface MemberListProps {}

const MemberList: FC<MemberListProps> = () => {
  const { memberList } = useMemberService();
  const basicInformationArray = divideMemberList(memberList);

  const renderRanks = (member: any) => {
    let renderArray: JSX.Element[] = [];
    if(member.ranks){
      Object.keys(member.ranks).forEach((rankType: string, index: number) => {
        const tierRankInfo = member.ranks[rankType];
        renderArray.push(
          <div className="container" key={index}>
            <div><strong>{rankType}</strong></div>
            <div>{tierRankInfo.tier} {tierRankInfo.rank}, {tierRankInfo.leaguePoints}LP</div>
            <div>Win: {tierRankInfo.wins}, Losses: {tierRankInfo.losses}, Rate: {(tierRankInfo.wins/(tierRankInfo.wins + tierRankInfo.losses)*100.0).toPrecision(4)}%</div>
            <div>Updated: {moment(tierRankInfo.updatedAt).tz("America/New_York").format("ddd, M/D/YY, h:mm:ssA")} EST</div>
          </div>
        )
      })
    }
    return <div>{renderArray}</div>
  }
   
  return (
    <div>
      <div className="container main-heading">
        Clover Member List
      </div>
      <div className="container">
      <div className="columns">
        <div className={"column column-heading"}><strong>Basic Information</strong></div>
        <div className={"column column-heading"}><strong>Rank & Tier</strong></div>
        <div className={"column column-heading"}><strong>Note</strong></div>
      </div>
      <div className="columns">
        <div className="column">
          {
            basicInformationArray.map((basicInformation: any) => (
              <BasicInformation basicInformation={basicInformation}/>
            ))
          }
        </div>
        <div className="column">
          <div className="container">
            {/* { renderRanks(member) } */}
          </div>
        </div>
        <div className="column">
          <div className="container">
            Note or any further information will be here
          </div>
        </div>
      </div>
      </div>
    </div>
  )
};

export default MemberList;
