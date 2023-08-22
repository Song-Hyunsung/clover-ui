import Rank from "./Rank";

interface RankTierInfo {
  ranks: {
    [key: string]: Rank
  }
}

export default RankTierInfo;