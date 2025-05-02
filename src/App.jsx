import React from "react";
import Logo from "./assets/Rzorpay_logo.png";
import Flag from "./assets/Flag_of_India.png";
import HeroImage from "./assets/hero-illustration-783a8736.jpg";
import HeroTriangle from "./assets/Herotriangle.png";
import featureImage from "./assets/featureImage.webp";
import smalldot from "./assets/smalldot.png";
import bigdot from "./assets/bigdot.png";

const App = () => {
  return (
    <>
      {/* navbar */}
      <nav className="bg-[var(--color-deepBlue)]">
        <div className="  w-[1080px] mx-auto flex items-center justify-between">
          <a href="/" className="cursor-pointer py-7 pr-7">
            <img src={Logo} alt="logo" height={"30px"} width={"125px"} />
          </a>
          <ul className="flex space-x-6">
            <li className="text-white font-display py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative  group">
              <a href="/#">Payments</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>

            <li className="text-white font-display py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative  group">
              <a href="/#">Banking</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>

            <li className="flex text-white font-display py-7 hover:text-lightBlue cursor-pointer transition-all duration-200">
              <a href="/#">Corporate Card</a>
            </li>

            <li className="flex text-white font-display py-7 hover:text-lightBlue cursor-pointer transition-all duration-200">
              <a href="/#">Payroll</a>
            </li>

            <li className="flex text-white font-display py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative  group">
              <a href="/#">Resources</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>

            <li className="flex text-white font-display py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative  group">
              <a href="/#">Support</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>

            <li className="flex text-white font-display py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative  group">
              <a href="/#">Pricing</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>
          </ul>

          <div className="flex space-x-6 items-center">
            <img src={Flag} alt="Indian Flag" className="h-[20px] w-[28px]" />
            <button className="py-3 px-5 font-display text-white border-lightBlue border text-sm font-bold rounded">
              Log in
            </button>
            <button className="py-3 px-4 font-display text-sm rounded font-bold bg-white text-lightBlue300 border transition-all duration-200 hover:text-lightBlue500">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      {/* herosection */}
      <section className="relative bg-deepBlue ">
        <div className="flex items-center max-w-[1080px] mx-auto w-10/12 flex-row justify-between">
          {/* div left */}
          <div className="space-y-8">
            <h1 className="font-display text-white font-bold text-[40px] leading-[1.2]">
              Power your finance, grow your business
            </h1>
            <div className=" bg-greenLight w-6 h-1 "></div>
            <p className="text-white font-display text-[18px] leading-7 opacity-70">
              Lorem ipsum, dolor sit amditiis quidem veniam reprehende & rum,
              temporibus aliquid.
            </p>
            <button className="py-[14px] px-[18px] font-display rounded-md font-bold bg-lightBlue text-white transition-all duration-200 hover:bg-lightBlue500">
              Sign Up Now
            </button>
          </div>
          {/* div right */}
          <div>
            <img src={HeroImage} alt="Image" className="w-full max-w-[680px]" />
          </div>
        </div>
        <div className="absolute left-0 right-0 w-[100%] mt-[-10px] z-[-1]">
          <img src={HeroTriangle} alt="Image" className="w-full object-fill" />
        </div>
      </section>

      {/* feature section */}
      <section>
        <img src={smalldot} className="absolute w-[100px] left-4 mt-10"/>
        <img src={bigdot} className="absolute w-[80px] right-4 mt-20"/>
        <div>
          {/* heading */}
          <h2>Accept Payment with Razorpay Payment Suite</h2>
          <div className=" bg-greenLight w-6 h-1 "></div>
          {/* content */}
          <div>
            {/* content left */}
            <div>
              <h3>Supercharge your business with the all-powerfull <span className="text-lightBlue">Payment Gateway</span></h3>
              <ul>
                <li>
                  <span>100+ Payment Methods</span>
                </li>
                <li>
                  <span>Industry Leading Sucess Rate</span>
                </li>
                <li>
                  <span>Super Checkout Experience</span>
                </li>
                <li>
                  <span>Easy to integrate</span>
                </li>
                <li>
                  <span>Instant Settlements from day 1</span>
                </li>
                <li>
                  <span>In-depth Reporting and Insights</span>
                </li>
              </ul>
              <div>
                <button>Sign Up Now</button>
                <div>
                <a href="">Know More</a>
                <i></i>
              </div>
              </div>
            </div>
            {/* content right */}
            <div>
              <img src={featureImage} className="w-full max-w-[680px]"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
