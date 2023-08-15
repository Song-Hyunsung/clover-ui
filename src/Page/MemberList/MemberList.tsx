import { FC } from 'react';
import './MemberList.css';
import useMemberService from '../../Hooks/useMemberService';
import FullInformation from '../../Components/FullInformation/FullInformation';

interface MemberListProps {}

const MemberList: FC<MemberListProps> = () => {
  const { memberList } = useMemberService();

  return (
    <div>
      <div className="container main-heading">
        Clover Member List
      </div>
      <div className="container">
        <div className="columns sub-heading">
          <div className={"column column-heading"}><strong>Basic Information</strong></div>
          <div className={"column column-heading"}><strong>Rank & Tier</strong></div>
          <div className={"column column-heading"}><strong>Note</strong></div>
        </div>
      </div>
      <div className="container">
        <FullInformation memberList={memberList}/>
      </div>
    </div>
  )
};

export default MemberList;
