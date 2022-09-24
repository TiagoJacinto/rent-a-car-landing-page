import { useMediaQuery } from 'react-responsive';
import AppDemo from '../../images/app-2.35887031.png';
import Map from '../../images/map.3f0298de.png';
import Porsche from '../../images/porsche-right.981532db.png';
import { SectionTitle, Paragraph, Container } from '../../styles/helpers';
import { CarImage, DemoImage, Grid, MainImage } from './styles';
import { variables as v } from '../../styles/variables';
import {
  CarAnims,
  DemoAnims,
  MapAnims,
  paragraphAnims,
  sectionTitleAnims,
} from './animations';

export default function DeliverFeature() {
  const isLaptop = useMediaQuery({ query: `(min-width: ${v.ds.laptop})` });
  return (
    <Container>
      <Grid>
        <div style={{ marginTop: '50px' }}>
          <SectionTitle {...sectionTitleAnims}>
            DELIVERED TO YOUR DOOR.
          </SectionTitle>
          <Paragraph {...paragraphAnims}>
            Eleanor works with your schedule to have a white-glove delivery
            service deliver your new vehicle right to your door.
          </Paragraph>
        </div>
        <div>
          <div style={{ position: 'relative' }}>
            <MainImage {...MapAnims} src={Map} />
            <DemoImage {...DemoAnims} src={AppDemo} />
            {isLaptop && <CarImage {...CarAnims} src={Porsche} />}
          </div>
        </div>
      </Grid>
    </Container>
  );
}
