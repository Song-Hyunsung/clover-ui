import Note from "./Note";
import Rank from "./Rank";

interface MemberList {
  id: string,
  displayName: string,
  tag: string,
  inGameName: string,
  isMember: boolean,
  joinedAt: Date,
  active: boolean,
  roles: string[],
  ranks: {
    [key: string]: Rank
  },
  note: Note
}

export default MemberList;