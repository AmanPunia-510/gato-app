import About from "./components/About";
import Benifit from "./components/Benifit";
import CafeGato from "./components/CafeGato";
import CatCafe from "./components/CatCafe";
import { Everyone } from "./components/Everyone";
import Header from "./components/Header";
import OurMission from "./components/OurMission";

function App() {
  return (
    <>
      <Header />
      <CafeGato />
      <OurMission />
      <CatCafe />
      <About />
      <Everyone />
      <Benifit />
    </>
  );
}

export default App;
