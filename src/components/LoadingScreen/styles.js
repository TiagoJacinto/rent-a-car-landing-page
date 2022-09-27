import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CenterDiv = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconImg = styled.img`
  position: absolute;
`;

export const CircleImg = styled(motion.img)`
  position: absolute;
`;
