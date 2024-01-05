import { IoSearch } from "react-icons/io5";
import { FaHouseUser } from "react-icons/fa";
import { PiBed } from "react-icons/pi";

const OurServices = () => {
  return (
    <main>
      <div>
        <p>Our Services</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <div>
          <div>
            <button>
              <IoSearch />
            </button>
            <p>Buy a New Home</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              molestias, magnam inventore labore soluta
            </p>
          </div>
          <div>
            <button>
              <FaHouseUser />
            </button>
            <p>Sell a House</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              molestias, magnam inventore labore soluta
            </p>
          </div>
          <div>
            <button>
              <PiBed />
            </button>
            <p>Rent a House</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              molestias, magnam inventore labore soluta
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurServices;
