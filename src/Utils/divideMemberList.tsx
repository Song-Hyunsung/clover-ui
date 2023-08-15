const divideMemberList = (memberListArray: any) => {
  let basicInformationArray: any = [];
  let rankTierInformationArray: any = [];

  memberListArray.forEach((memberList:any) => {
    let basicInformation : any = {
      displayName: memberList.displayName,
      tag: memberList.tag,
      inGameName: memberList.inGameName,
      roles: memberList.roles,
      isMember: memberList.isMember,
      joinedAt: memberList.joinedAt,
      active: memberList.active
    }

    let rankTierInformation : any = {
      ranks: memberList.ranks,
    }

    basicInformationArray.push(basicInformation);
    rankTierInformationArray.push(rankTierInformation);
  })


  return { basicInformationArray, rankTierInformationArray }
}

export default divideMemberList;