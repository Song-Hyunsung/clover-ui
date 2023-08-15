import React, { FC } from 'react';
import moment from 'moment-timezone';
import './RankTierInformation.css';
import Rank from '../../Models/Rank';
import RankTierInfo from '../../Models/RankTierInfo';

interface IRankTierInformation {
  rankTierInformation: RankTierInfo
}

const RankTierInformation: FC<IRankTierInformation> = (props: IRankTierInformation) => {
  const { rankTierInformation } = props;

  const renderRanks = (member: RankTierInfo) => {
    let renderArray: JSX.Element[] = [];
    
    if(member.ranks){
      Object.keys(member.ranks).forEach((rankType: string, index: number) => {
        const tierRankInfo: Rank = member.ranks[rankType];
        renderArray.push(
          <div key={index}>
            <div><strong>{rankType}</strong>: <span>{tierRankInfo.tier} {tierRankInfo.rank}, {tierRankInfo.leaguePoints}LP</span></div>
            <div>Win: {tierRankInfo.wins}, Losses: {tierRankInfo.losses}, Rate: {(tierRankInfo.wins/(tierRankInfo.wins + tierRankInfo.losses)*100.0).toPrecision(4)}%</div>
            <div>Updated: {moment(tierRankInfo.updatedAt).tz("America/New_York").format("ddd, M/D/YY, h:mm:ssA")} EST</div>
          </div>
        )
      })
    } else {
      let i = 0
      renderArray.push(
        <div key={i}>
          Rank information not available for this user
        </div>
      )
      i++;
    }

    return <div>{renderArray}</div>
  }
  
  return (
    <div className="tile is-child box">
      { renderRanks(rankTierInformation) }
    </div>
  )
}

export default RankTierInformation;
