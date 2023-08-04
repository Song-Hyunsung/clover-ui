import React, { FC } from 'react';
import { LandingWrapper } from './Landing.styled';

interface LandingProps {}

const Landing: FC<LandingProps> = () => (
 <LandingWrapper data-testid="Landing">
    Landing Component
 </LandingWrapper>
);

export default Landing;
