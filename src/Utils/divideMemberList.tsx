const divideMemberList = (memberListArray: any) => {
  let basicInformationArray: any = [];
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
    basicInformationArray.push(basicInformation);
  })


  return basicInformationArray;
}

export default divideMemberList;