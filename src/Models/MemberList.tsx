import Rank from "./Rank";

interface MemberList {
  displayName: string,
  tag: string,
  inGameName: string,
  isMember: boolean,
  joinedAt: Date,
  active: boolean,
  roles: string[],
  ranks: {
    [key: string]: Rank
  }
}

export default MemberList;