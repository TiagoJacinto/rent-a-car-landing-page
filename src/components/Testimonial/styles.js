import styled from 'styled-components';
import { motion } from 'framer-motion';
import { variables as v } from '../../styles/variables';

export const Grid = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media (min-width: ${v.ds.laptop}) {
    margin-block: 150px 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5%;
  }
`;

export const MainImage = styled(motion.img)`
  padding-top: ${v.size.medium};
  margin-inline: auto;
  width: 60%;
  @media (max-width: ${v.ds.laptop}) {
    margin-top: 13%;
  }
  @media (max-width: ${v.ds.tablet}) {
    width: 90%;
    padding-top: ${v.size.small};
  }
`;

export const CarImage = styled(motion.img)`
  position: absolute;
  @media (min-width: ${v.ds.laptop}) {
    width: 100%;
    right: -280px;
    bottom: -80px;
  }
`;

export const CustomerName = styled.p`
  font-family: ${v.ff.default};
  font-weight: ${v.fw.bold};
`;

export const TextColumn = styled(motion.div)`
  & > *:not(:last-child) {
    margin-bottom: ${v.size.smaller};
  }
  margin-bottom: ${v.size.smaller};
`;

export const Images = styled(motion.div)`
  position: relative;
  background-color: ${v.color.bg};
`;
