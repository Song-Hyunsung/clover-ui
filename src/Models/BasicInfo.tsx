interface BasicInfoModel {
  displayName: string,
  tag: string,
  inGameName: string,
  isMember: boolean,
  roles: string[],
  joinedAt: Date,
  active: boolean
}

export default BasicInfoModel;