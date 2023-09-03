import BasicInfo from "../Models/BasicInfo";
import MemberList from "../Models/MemberList";
import RankTierInfo from "../Models/RankTierInfo";
import NoteInfo from "../Models/NoteInfo";

const divideMemberList = (memberListArray: MemberList[]) => {
  let basicInformationArray: BasicInfo[] = [];
  let rankTierInformationArray: RankTierInfo[] = [];
  let noteInformationArray: NoteInfo[] = [];

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

    let noteInformation : NoteInfo = {
      id: memberList._id,
      displayName: memberList.displayName,
      note: memberList.note
    }

    basicInformationArray.push(basicInformation);
    rankTierInformationArray.push(rankTierInformation);
    noteInformationArray.push(noteInformation);
  })


  return { basicInformationArray, rankTierInformationArray, noteInformationArray }
}

export default divideMemberList;