import About from "./components/About";
import Accordian from "./components/Accordian";
import Benifit from "./components/Benifit";
import CafeGato from "./components/CafeGato";
import CatCafe from "./components/CatCafe";
import { Everyone } from "./components/Everyone";
import Expect from "./components/Expect";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurMission from "./components/OurMission";
import Slider from "./components/Slider";
import Vision from '../src/components/Vision'
import Verification from "./components/Verification";

function App() {
  return (
    <>
      <Header />
      <main className="overflow-hidden bg-[#FCFBE3]">
        <CafeGato />
        <OurMission />
        <CatCafe />
        <About />
        <Vision />
        <Everyone />
        <Benifit />
        <Expect />
        <Slider />
        <Verification />
        <Footer />
      </main>
    </>
  );
}

export default App;
