import Logo from '../../images/logo-white.fc8d4d9f0313c50144292a4162478d2c.svg';
import ArrowRight from '../../images/arrow-right.dc5fd6f9304f8244392611268ddb9449.svg';
import Porsche from '../../images/porsche-right.981532db.png';
import Passat from '../../images/car-white-1.0ce8111a.png';
import Mercedes from '../../images/car-white-2.ec706134.png';
import AppDemonstration from '../../images/app-1.cf9c774d.png';
import {
  Container,
  Title,
  SubTitle,
  CarImg,
  LeftCol,
  AppDemo,
  Cars,
} from './styles';
import { useMediaQuery } from 'react-responsive';
import { variables as v } from '../../styles/variables';
import { motion } from 'framer-motion';

export default function Hero() {
  const isLaptop = useMediaQuery({ query: `(min-width: ${v.ds.laptop})` });

  return (
    <Container
      initial={{ width: '75%' }}
      animate={{ width: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img src={Logo} />
      <LeftCol>
        <motion.div
          initial={{ y: '-300%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Title>DRIVE A NEW CAR EVERY MONTH</Title>
          <SubTitle>
            Available On the App <img src={ArrowRight} />
          </SubTitle>
        </motion.div>

        <Cars
          initial={{ x: '-110%' }}
          animate={{ x: '0' }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CarImg pos='left' src={Passat} />
          <CarImg pos='middle' style={{ zIndex: 10 }} src={Porsche} />
          <CarImg pos='right' src={Mercedes} />
        </Cars>
      </LeftCol>
      {isLaptop && (
        <AppDemo
          initial={{ x: '300%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          src={AppDemonstration}
        />
      )}
    </Container>
  );
}
