import styled from 'styled-components';
import { variables as v } from './variables';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  padding: ${v.size.smaller};
  @media (min-width: ${v.ds.laptop}) {
    padding-inline: ${v.size.medium};
  }
`;

export const Title = styled.h1`
  font-family: ${v.ff.title};
  font-size: ${v.fs.larger};
`;

export const SectionTitle = styled(motion.h1)`
  color: ${v.color.txtDark};
  font-family: ${v.ff.title};
  font-size: ${v.fs.larger};

  @media (min-width: ${v.ds.laptop}) {
    line-height: ${v.fs.xl};
    font-size: ${v.fs.xl};
  }
`;

export const Paragraph = styled(motion.p)`
  font-size: ${v.fs.medium};
  font-family: ${v.ff.default};
`;

export const LeftCol = styled.div`
  position: relative;
  @media (min-width: ${v.ds.laptop}) {
    width: 85%;
  }
`;
