import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RealEstate from "./components/RealEstate";
import WhoWeAre from "./components/WhoWeAre";
import LatestPackage from "./components/LatestPackage";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <RealEstate />
        <WhoWeAre />
        <LatestPackage />
      </main>
      <Footer />
    </>
  );
}

export default App;
