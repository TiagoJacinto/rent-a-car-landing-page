import styled from 'styled-components';
import { variables as v } from '../../styles/variables';

export const FooterWrapper = styled.div`
  padding-block: ${v.size.smaller} ${v.size.small};

  @media (min-width: ${v.ds.tablet}) {
    justify-content: space-between;
    display: flex;
  }
  @media (max-width: ${v.ds.tablet}) {
    & > * {
      margin-inline: auto;
      text-align: center;
    }
    & > *:not(:last-child) {
      display: flex;
      margin-bottom: ${v.size.small};
    }
  }
`;

export const Links = styled.div`
  & > *:not(:last-child) {
    margin-right: ${v.size.small};
  }
  font-family: ${v.ff.default};
  font-weight: ${v.fw.bold};
  font-size: ${v.fs.small};
  color: ${v.color.txt};
`;
