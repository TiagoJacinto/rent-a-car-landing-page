import styled from 'styled-components';
import { variables as v } from '../../styles/variables';
import { Container as CH, Title as TH } from '../../styles/helpers';
import { motion } from 'framer-motion';

export const Container = styled(CH)`
  height: 50vh;
  @media (min-width: ${v.ds.tablet}) {
    height: 100vh;
  }
  background-color: ${v.color.bg};
`;

export const Title = styled(TH)`
  margin-top: ${v.size.small};
  color: white;
  @media (min-width: ${v.ds.laptop}) {
    line-height: ${v.size.large};
    font-size: ${v.fs.largest};
  }
`;

export const LeftCol = styled.div`
  position: relative;
  @media (min-width: ${v.ds.laptop}) {
    width: 65%;
  }
`;

export const CarImg = styled.img`
  position: absolute;
  top: 300px;
  @media (min-width: ${v.ds.tablet}) {
    top: 400px;
  }
  width: ${({ pos }) => (pos === 'middle' ? '65%' : '60%')};

  translate: ${({ pos }) =>
    pos === 'left' ? '0' : pos === 'right' ? '75%' : '30%'};

  @media (min-width: ${v.ds.laptop}) {
    width: ${({ pos }) => (pos === 'middle' ? '80%' : '75%')};
    translate: ${({ pos }) =>
      pos === 'left' ? '-13%' : pos === 'right' ? '58%' : '13%'};
  }
`;

export const AppDemo = styled(motion.img)`
  position: absolute;
  top: ${v.size.small};
  right: ${v.size.medium};
  width: 20.5%;
`;

export const Cars = styled(motion.div)`
  position: relative;
  bottom: 200px;
  @media (min-width: ${v.ds.laptop}) {
    bottom: 350px;
  }
  @media (min-width: ${v.ds.desktop}) {
    bottom: 300px;
  }
  width: 100%;
`;
