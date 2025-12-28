import React from 'react';
import styled from 'styled-components';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin: -16px;
`;

const ShoeWrapper = styled.div` 
  width: 275px;
  margin-left: 16px;
  margin-right: 16px;
  flex: 1 1 auto;
`;

export default ShoeGrid;
 