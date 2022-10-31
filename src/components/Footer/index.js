import Logo from "../../images/logo-black.417493eb35371280521d60ec074df5eb.svg";
import { Container, Hr } from "../../styles/helpers";
import { FooterWrapper, Links } from "./styles";

export default function Footer() {
  return (
    <Container>
      <Hr />
      <FooterWrapper>
        <img src={Logo} />
        <Links>
          <span>About us</span>
          <span>Terms of Use</span>
          <span>FAQ</span>
        </Links>
      </FooterWrapper>
    </Container>
  );
}
