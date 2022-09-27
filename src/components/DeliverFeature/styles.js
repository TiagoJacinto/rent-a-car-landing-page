import styled from 'styled-components';
import { motion } from 'framer-motion';
import { variables as v } from '../../styles/variables';

export const Grid = styled.div`
  margin-top: 350px;
  @media (min-width: ${v.ds.laptop}) {
    margin-top: 500px;
  }
  @media (min-width: ${v.ds.laptop}) {
    display: grid;
    align-items: center;
    grid-template-columns: 0.5fr 1fr;
    column-gap: 5%;
  }
`;

export const MainImage = styled(motion.img)`
  @media (max-width: ${v.ds.laptop}) {
    margin-top: 13%;
  }
`;

export const CarImage = styled(motion.img)`
  position: absolute;
  @media (min-width: ${v.ds.laptop}) {
    width: 75%;
    left: -40%;
    bottom: -10%;
  }
`;

export const DemoImage = styled(motion.img)`
  position: absolute;
  @media (max-width: ${v.ds.laptop}) {
    top: -10%;
    left: 50%;
    translate: -50% 0;
    width: 47%;
  }
  right: 17%;
  top: -13%;
  width: 33%;
`;
