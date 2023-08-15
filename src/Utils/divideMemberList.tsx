import BasicInfo from "../Models/BasicInfo";
import MemberList from "../Models/MemberList";
import RankTierInfo from "../Models/RankTierInfo";

const divideMemberList = (memberListArray: MemberList[]) => {
  let basicInformationArray: BasicInfo[] = [];
  let rankTierInformationArray: RankTierInfo[] = [];

  memberListArray.forEach((memberList: MemberList) => {
    let basicInformation : BasicInfo = {
      displayName: memberList.displayName,
      tag: memberList.tag,
      inGameName: memberList.inGameName,
      roles: memberList.roles,
      isMember: memberList.isMember,
      joinedAt: memberList.joinedAt,
      active: memberList.active
    }

    let rankTierInformation : RankTierInfo = {
      ranks: memberList.ranks,
    }

    basicInformationArray.push(basicInformation);
    rankTierInformationArray.push(rankTierInformation);
  })


  return { basicInformationArray, rankTierInformationArray }
}

export default divideMemberList;