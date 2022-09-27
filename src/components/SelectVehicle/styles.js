import styled from 'styled-components';
import {
  Container as ContainerH,
  Title as TitleH,
  Paragraph as ParagraphH,
} from '../../styles/helpers';
import { variables as v } from '../../styles/variables';
import { motion } from 'framer-motion';

export const Container = styled(ContainerH)`
  margin-top: 100px;
  @media (min-width: ${v.ds.desktop}) {
    margin-top: 250px;
  }

  @media (min-width: ${v.ds.desktop}) {
    display: flex;
    gap: ${v.size.large};
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: ${v.ds.desktop}) {
    display: grid;
    grid-template-columns: 0.95fr 1fr;
    column-gap: 10%;
    align-items: center;
  }
`;

export const Title = styled(TitleH)`
  color: ${v.color.txtDark};
`;

export const Paragraph = styled(ParagraphH)`
  margin-bottom: ${v.size.smaller};
`;

export const Car = styled(motion.div)`
  position: relative;
  background-color: ${v.color.bg};
  padding: ${v.size.smaller};

  @media (min-width: ${v.ds.desktop}) {
    padding: ${v.size.medium};
  }

  &::after {
    z-index: -10;
    content: '';
    left: 0;
    position: absolute;
    height: 40%;
    width: 100%;
    background-color: ${v.color.bg};
    @media (min-width: ${v.ds.desktop}) {
      height: 65%;
    }
  }
`;

export const CarName = styled(TitleH)`
  font-size: ${v.fs.largeLarger};
  @media (min-width: ${v.ds.desktop}) {
    font-size: ${v.fs.lg};
  }
`;

export const CarModel = styled(TitleH)`
  font-size: ${v.fs.large};
  color: ${v.color.txtLight};
  margin-bottom: ${v.size.smaller};
  @media (min-width: ${v.ds.desktop}) {
    font-size: ${v.fs.medium};
  }
`;

export const CarSpec = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  column-gap: ${v.size.smallest};
  font-size: ${v.fs.large};
  font-family: ${v.ff.title};

  & > * {
    width: ${v.size.medium};
  }
`;

export const CarImage = styled(motion.img)`
  position: absolute;
  left: 50%;
  translate: -50% 0;
  @media (min-width: ${v.ds.desktop}) {
    left: 20%;
    translate: 0 15%;
    max-width: 150%;
  }
`;

export const Flex = styled.span`
  display: flex;
  align-items: center;
  gap: ${v.size.smallest};

  & > img {
    width: ${v.size.smaller};
  }
`;

export const Arrows = styled(motion.div)`
  position: absolute;
  top: ${v.size.smaller};
  right: ${v.size.smaller};
  display: flex;
  align-items: center;
  gap: ${v.size.smaller};

  & > img {
    z-index: 10;
    cursor: pointer;
    width: 50px;
  }
  @media (max-width: ${v.ds.tablet}) {
    & > img {
      width: 30px;
    }
  }
`;
