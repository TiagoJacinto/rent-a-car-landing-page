import styled from "styled-components";
import { variables as v } from "./variables";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
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

export const SubTitle = styled.h2`
  display: flex;
  gap: ${v.size.smallest};
  color: ${v.color.txt};
  font-weight: ${v.fw.semiBold};
  font-family: ${v.ff.default};
`;

export const Paragraph = styled(motion.p)`
  font-size: ${v.fs.medium};
  font-family: ${v.ff.default};
`;

export const Hr = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
