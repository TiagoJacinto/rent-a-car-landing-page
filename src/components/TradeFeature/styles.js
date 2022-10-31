import styled from "styled-components";
import { variables as v } from "../../styles/variables";
import { motion } from "framer-motion";

export const Grid = styled.div`
  margin-top: 300px;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: ${v.ds.laptop}) {
    display: grid;
    align-items: center;
    grid-template-columns: 0.93fr 1fr;
    column-gap: 18%;
  }
`;

export const MainImage = styled(motion.img)`
  @media (max-width: ${v.ds.laptop}) {
    margin-top: 13%;
  }
`;

export const DemoImage = styled(motion.img)`
  position: absolute;
  top: 50%;
  left: 75%;
  translate: 0 -50%;
  width: 64%;
  @media (min-width: ${v.ds.laptop}) {
    top: 50%;
    left: 55%;
    translate: 0 -50%;
    width: 64%;
  }
`;

export const Images = styled.div`
  position: relative;
  background-color: ${v.color.bg};
  padding-block: 150px;
  width: 75%;
  padding-inline: 30px;
  @media (min-width: ${v.ds.laptop}) {
    padding-inline: 100px;
    padding-block: 420px;
    width: 100%;
    padding-inline: 120px;
  }
`;

export const TextColumn = styled.div`
  @media (max-width: ${v.ds.laptop}) {
    margin-bottom: ${v.size.medium};
  }
`;
