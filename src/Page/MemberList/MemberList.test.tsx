import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemberList from './MemberList';

describe('<MemberList />', () => {
  test('it should mount', () => {
    render(<MemberList />);
    
    const memberList = screen.getByTestId('MemberList');

    expect(memberList).toBeInTheDocument();
  });
});