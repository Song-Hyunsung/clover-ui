import { FC, useEffect } from 'react';

interface ForbiddenProps {}

const Forbidden: FC<ForbiddenProps> = () => {
  return (
    <div>
      <div>You don't have admin role in Clover Discord and cannot access the site.</div>
      <div>If you are an admin but somehow is seeing this message, contact me.</div>
      <div>If not, stop trying and get out.</div>
    </div>
  )
}

export default Forbidden;
