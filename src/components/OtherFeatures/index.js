import MonthlyPrice from '../../images/coin.39ba494c.svg';
import Insurance from '../../images/document.31e848e2.svg';
import Maintenance from '../../images/wrench.0772f3e4.svg';
import { Grid, GridItem, Title, Paragraph, Image } from './styles';
import { Container } from '../../styles/helpers';
import {
  monthlyPriceAnims,
  insuranceAnims,
  maintenanceAnims,
} from './animations';

export default function OtherFeatures() {
  return (
    <Container>
      <Grid>
        <GridItem {...monthlyPriceAnims}>
          <Image src={MonthlyPrice} />
          <Title>SIMPLE MONTHLY PRICING</Title>
          <Paragraph>
            Pick your plan, pay the monthly price. Thats it. No hidden fees!
          </Paragraph>
        </GridItem>
        <GridItem {...insuranceAnims}>
          <Image src={Insurance} />
          <Title>VEHICLE INSURANCE INCLUDED</Title>
          <Paragraph>
            That’s right, you’re covered. All Eleanor plans include insurance
            coverage.
          </Paragraph>
        </GridItem>
        <GridItem {...maintenanceAnims}>
          <Image src={Maintenance} />
          <Title>MAINTENANCE IS COVERED</Title>
          <Paragraph>
            Leave it us. Don’t worry about maintaining your vehicle. Eleanor
            covers that as well.
          </Paragraph>
        </GridItem>
      </Grid>
    </Container>
  );
}
