import styled from 'styled-components';
import { variables as v } from '../../styles/variables';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  background-color: ${v.color.bg};
  padding: ${v.size.smaller};
  @media (min-width: ${v.ds.laptop}) {
    padding-inline: ${v.size.medium};
    padding-bottom: 300px;
  }
  padding-bottom: 300px;
`;

export const Title = styled.h1`
  margin-top: ${v.size.small};
  font-family: ${v.ff.title};
  font-size: ${v.fs.larger};
  color: white;

  @media (min-width: ${v.ds.laptop}) {
    line-height: ${v.size.large};
    font-size: ${v.fs.largest};
  }
`;

export const SubTitle = styled.h2`
  display: flex;
  gap: ${v.size.smallest};
  color: ${v.color.txt};
  font-weight: ${v.fw.semiBold};
`;

export const LeftCol = styled.div`
  position: relative;
  @media (min-width: ${v.ds.laptop}) {
    width: 61%;
  }
`;

export const CarImg = styled.img`
  position: absolute;
  top: 150px;
  width: ${({ pos }) => (pos === 'middle' ? '65%' : '60%')};

  translate: ${({ pos }) =>
    pos === 'left' ? '-6%' : pos === 'right' ? '70%' : '25%'};

  @media (min-width: ${v.ds.laptop}) {
    top: 100px;
    width: ${({ pos }) => (pos === 'middle' ? '90%' : '80%')};
    translate: ${({ pos }) =>
      pos === 'left' ? '-20%' : pos === 'right' ? '50%' : '5%'};
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
`;
