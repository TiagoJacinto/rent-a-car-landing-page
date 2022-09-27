import AppDemo from '../../images/app-3.c8673836.png';
import Porsche from '../../images/porche-front.acc2162e.png';
import { SectionTitle, Paragraph, Container } from '../../styles/helpers';
import { DemoImage, Grid, Images, MainImage, TextColumn } from './styles';
import {
  sectionTitleAnims,
  paragraphAnims,
  containerAnims,
} from '../../styles/animHelpers';
import { DemoAnim } from './animations';
import { motion } from 'framer-motion';

export default function TradeFeature() {
  return (
    <Container>
      <Grid>
        <motion.div {...containerAnims}>
          <Images>
            <MainImage src={Porsche} />
            <DemoImage {...DemoAnim} src={AppDemo} />
          </Images>
        </motion.div>
        <TextColumn>
          <SectionTitle {...sectionTitleAnims}>
            TRADE IN YOUR CAR EVERY MONTH.
          </SectionTitle>
          <Paragraph {...paragraphAnims}>
            Use Eleanor Trade-In Credits to trade in your vehicle for something
            else in our luxurious inventory. Nothing says “June” like a new car!
          </Paragraph>
        </TextColumn>
      </Grid>
    </Container>
  );
}
