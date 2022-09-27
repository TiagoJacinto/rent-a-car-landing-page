import Hero from './components/Hero';
import SelectCar from './components/SelectVehicle';
import DeliverFeature from './components/DeliverFeature';
import TradeFeature from './components/TradeFeature';
import OtherFeatures from './components/OtherFeatures';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { useEffect, useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
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
