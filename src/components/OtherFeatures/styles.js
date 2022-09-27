import styled from 'styled-components';
import { variables as v } from '../../styles/variables';
import { motion } from 'framer-motion';

export const Grid = styled.div`
  @media (min-width: ${v.ds.laptop}) {
    margin-top: 150px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 2.5%;
  }

  & > *:not(:last-child) {
    margin-bottom: ${v.size.smaller};
  }
`;

export const GridItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${v.size.smallest};
  height: 500px;
  padding: ${v.size.smaller};
  background-color: ${v.color.lightGrayBg};
`;

export const Title = styled.h1`
  font-family: ${v.ff.title};
  color: ${v.color.txt};
  font-size: ${v.fs.larger};
  @media (min-width: ${v.ds.laptop}) {
    font-size: ${v.fs.large};
  }
  @media (max-width: ${v.ds.mobile}) {
    font-size: ${v.fs.large};
  }
`;

export const Paragraph = styled.p`
  font-family: ${v.ff.default};
  font-size: ${v.fs.medium};
`;

export const Image = styled.img`
  height: 35%;
  @media (min-width: ${v.ds.desktop}) {
    height: 50%;
  }
`;
