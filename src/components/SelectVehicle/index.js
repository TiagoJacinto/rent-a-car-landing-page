import Pump from "../../images/pump-icon.112b2e73.svg";
import Graph from "../../images/line-graph-icon.9dbc336a.svg";
import Gauge from "../../images/gauge-icon.995b6546.svg";
import ArrowLeft from "../../images/arrow-left.f776ad605cdee43c2fd19c647f20b8ca.svg";
import ArrowRight from "../../images/arrow-right.dc5fd6f9304f8244392611268ddb9449.svg";
import Porsche from "../../images/porsche-left.5d241960.png";
import LandRover from "../../images/rover-left.6589716b.png";
import {
  Container,
  Title,
  Paragraph,
  CarName,
  CarModel,
  CarSpec,
  Flex,
  Arrows,
  Car,
  CarImage,
  Grid,
} from "./styles";

import {
  sectionTitleAnims,
  paragraphAnims,
  carAnims,
  arrowsAnims,
  carSpecsAnims,
  carImageAnims,
} from "./animations";

import { SectionTitle } from "../../styles/helpers";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cars = [
  {
    id: 1,
    name: "Land Rover",
    model: "2019 - Range Rover Velar",
    mpg: "19/24",
    hp: "397",
    accel: "4.2",
    image: LandRover,
  },
  {
    id: 2,
    name: "Porsche",
    model: "2019 - 911 Carrera S",
    mpg: "19/24",
    hp: "443",
    accel: "3.2",
    image: Porsche,
  },
];

export default function SelectCar() {
  const [selectedCar, setSelectedCar] = useState(1);

  function changeSelectedCar(e) {
    if (e.target.dataset.down) {
      if (selectedCar - 1 > 0) {
        setSelectedCar((lastId) => lastId - 1);
      } else {
        setSelectedCar(cars.length);
      }
    } else {
      if (selectedCar + 1 <= cars.length) {
        setSelectedCar((lastId) => lastId + 1);
      } else {
        setSelectedCar(1);
      }
    }
  }

  return (
    <Container>
      <Grid>
        <Car {...carAnims}>
          <Arrows {...arrowsAnims}>
            <img data-down onClick={changeSelectedCar} src={ArrowLeft} />
            <img data-up onClick={changeSelectedCar} src={ArrowRight} />
          </Arrows>
          <AnimatePresence>
            {cars.map(
              (car) =>
                car.id === selectedCar && (
                  <motion.div exit={{ position: "absolute" }} key={car.id}>
                    <motion.div {...carSpecsAnims}>
                      <CarName>{car.name}</CarName>
                      <CarModel>{car.model}</CarModel>
                      <CarSpec>
                        <Flex>
                          <img src={Pump} />
                          MPG
                        </Flex>
                        <span> {car.mpg}</span>
                      </CarSpec>
                      <CarSpec>
                        <Flex>
                          <img src={Graph} />
                          HP
                        </Flex>
                        <span> {car.hp}</span>
                      </CarSpec>
                      <CarSpec>
                        <Flex>
                          <img src={Gauge} />
                          0-60
                        </Flex>
                        <span> {car.accel}</span>
                      </CarSpec>
                    </motion.div>

                    <CarImage {...carImageAnims} src={car.image} />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </Car>

        <div style={{ marginTop: "50px" }}>
          <SectionTitle {...sectionTitleAnims}>
            SELECT A VEHICLE FROM YOUR PHONE.
          </SectionTitle>
          <Paragraph {...paragraphAnims}>
            Select from a wide range of luxury vehicles in our inventory. Drive
            it for a month, trade it the next for something else you have always
            wanted to own.
          </Paragraph>
        </div>
      </Grid>
    </Container>
  );
}
