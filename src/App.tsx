import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RealEstate from "./components/RealEstate";
import WhoWeAre from "./components/WhoWeAre";
import LatestPackage from "./components/LatestPackage";
import OurServices from "./components/OurServices";
import NeighborhoodProperty from "./components/NeighborhoodProperty";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

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
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}

export default App;
