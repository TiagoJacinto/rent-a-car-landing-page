import styled from 'styled-components';
import { variables as v } from '../../styles/variables';
import { motion } from 'framer-motion';

export const Grid = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: ${v.ds.laptop}) {
    display: grid;
    grid-template-columns: 0.95fr 1fr;
    column-gap: 20%;
    align-items: center;
  }
`;

export const MainImage = styled(motion.img)`
  @media (max-width: ${v.ds.laptop}) {
    margin-top: 13%;
  }
`;

export const DemoImage = styled(motion.img)`
  position: absolute;
  @media (max-width: ${v.ds.laptop}) {
    top: 50%;
    left: 75%;
    translate: 0 -50%;
    width: 64%;
  }
  top: 50%;
  left: 55%;
  translate: 0 -50%;
  width: 64%;
`;

export const Images = styled.div`
  position: relative;
  background-color: ${v.color.bg};
  padding-block: 490px;
  width: 70%;
  padding-inline: 100px;
  @media (min-width: ${v.ds.laptop}) {
    width: 100%;
    padding-inline: 120px;
  }
`;
