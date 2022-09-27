import Hero from './components/Hero';
import SelectCar from './components/SelectVehicle';
import DeliverFeature from './components/DeliverFeature';
import TradeFeature from './components/TradeFeature';
import OtherFeatures from './components/OtherFeatures';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Hero />
      <SelectCar />
      <DeliverFeature />
      <TradeFeature />
      <OtherFeatures />
      <Testimonial />
      <Footer />
    </>
  );
}
