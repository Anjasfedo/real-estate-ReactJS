import Navbar from "./compoenents/Navbar";
import Footer from "./compoenents/Footer";
import RealEstate from "./compoenents/RealEstate";
import WhoWeAre from "./compoenents/WhoWeAre";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <RealEstate />
        <WhoWeAre />
      </main>
      <Footer />
    </>
  );
}

export default App;
