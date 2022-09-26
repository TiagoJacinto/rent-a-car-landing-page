import Customer from '../../images/guy.1b56a7ff.png';
import Car from '../../images/car-white-2.ec706134.png';
import ArrowRight from '../../images/arrow-right.dc5fd6f9304f8244392611268ddb9449.svg';
import { SectionTitle, Paragraph, Container, Hr } from '../../styles/helpers';
import {
  CarImage,
  CustomerName,
  Grid,
  Images,
  MainImage,
  TextColumn,
} from './styles';
import { SubTitle } from '../../styles/helpers';
import { useMediaQuery } from 'react-responsive';
import { variables as v } from '../../styles/variables';
import {
  sectionTitleAnims,
  containerAnims,
  carsAnims,
} from '../../styles/animHelpers';
export default function Testimonial() {
  const isLaptop = useMediaQuery({ query: `(min-width: ${v.ds.laptop})` });
  return (
    <Container>
      <Grid>
        <Images {...containerAnims}>
          <MainImage {...carsAnims} src={Customer} />
          {isLaptop && <CarImage {...carsAnims} src={Car} />}
        </Images>
        <TextColumn {...sectionTitleAnims}>
          <SectionTitle>CUSTOMERS WITH THAT NEW CAR SMELL.</SectionTitle>
          <Paragraph>
            “With Eleanor I was able to drive 2 of my dream cars this year! The
            process is always easy and affordable!”
          </Paragraph>
          <CustomerName>Alex Bateman, Interface Designer</CustomerName>
          <Hr />
          <SubTitle>
            Available On the App <img src={ArrowRight} />
          </SubTitle>
        </TextColumn>
      </Grid>
    </Container>
  );
}
