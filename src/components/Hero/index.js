import Logo from '../../images/logo-white.fc8d4d9f0313c50144292a4162478d2c.svg';
import ArrowRight from '../../images/arrow-right.dc5fd6f9304f8244392611268ddb9449.svg';
import Porsche from '../../images/porsche-right.981532db.png';
import Passat from '../../images/car-white-1.0ce8111a.png';
import Mercedes from '../../images/car-white-2.ec706134.png';
import AppDemonstration from '../../images/app-1.cf9c774d.png';
import { Container, Title, CarImg, LeftCol, AppDemo, Cars } from './styles';
import { textAnims, carsAnims, appDemoAnims } from './animations';
import { SubTitle } from '../../styles/helpers';
import { useMediaQuery } from 'react-responsive';
import { variables as v } from '../../styles/variables';
import { motion } from 'framer-motion';

export default function Hero() {
  const isLaptop = useMediaQuery({ query: `(min-width: ${v.ds.laptop})` });

  return (
    <Container>
      <img src={Logo} />
      <LeftCol>
        <motion.div {...textAnims}>
          <Title>DRIVE A NEW CAR EVERY MONTH.</Title>
          <SubTitle>
            Available On the App <img src={ArrowRight} />
          </SubTitle>
        </motion.div>
        <Cars {...carsAnims}>
          <CarImg pos='left' src={Passat} />
          <CarImg pos='middle' style={{ zIndex: 10 }} src={Porsche} />
          <CarImg pos='right' src={Mercedes} />
        </Cars>
      </LeftCol>
      {isLaptop && <AppDemo {...appDemoAnims} src={AppDemonstration} />}
    </Container>
  );
}
