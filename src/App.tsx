import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RealEstate from "./components/RealEstate";
import WhoWeAre from "./components/WhoWeAre";
import LatestPackage from "./components/LatestPackage";
import OurServices from "./components/OurServices";
import NeighborhoodProperty from "./components/NeighborhoodProperty";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <RealEstate />
        <WhoWeAre />
        <LatestPackage />
        <OurServices />
        <NeighborhoodProperty />
        <Team />
      </main>
      <Footer />
    </>
  );
}

export default App;
