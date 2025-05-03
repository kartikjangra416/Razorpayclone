import React from "react";
import Logo from "./assets/Rzorpay_logo.png";
import Flag from "./assets/Flag_of_India.png";
import HeroImage from "./assets/hero-illustration-783a8736.jpg";
import HeroTriangle from "./assets/Herotriangle.png";
import featureImage from "./assets/featureImage.webp";
import smalldot from "./assets/smalldot.png";
import bigdot from "./assets/bigdot.png";
import image from "./assets/images.png";

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
      <section className="relative mt-[160px] ">
        <img
          src={smalldot}
          className="absolute w-[100px] left-[1rem] -top-[4rem] inline-block"
        />
        <img
          src={bigdot}
          className="absolute w-[80px] right-4 top-[1rem] inline-block"
        />
        <div className="relative max-width-[1080px] mx-auto w-10/12 pt-4">
          {/* heading */}
          <h2 className="font-display text-black text-center text-2xl font-extrabold leading-[1.2]">
            Accept Payment with Razorpay Payment Suite
          </h2>
          <div className=" bg-greenLight w-6 h-1 mx-auto mt-4 mb-6"></div>
          {/* content */}
          <div className="w-full bg-white flex rounded-md relative p-4 py-10 border-[1px] min-h-[520px] border-lightGray">
            {/* content left */}
            <div className="flex flex-col justify-between w-full">
              <h3 className="font-display text-[28px] leading-10 max-w-[500px] font-bold">
                Supercharge your business with the all-powerfull{" "}
                <span className="text-lightBlue">Payment Gateway</span>
              </h3>
              <ul className="space-y-4 font-display">
                <li className="flex items-start space-x-3">
                  <div className="bg-greenLight w-2 h-2 mt-1 rounded-full"></div>
                  <span>100+ Payment Methods</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-greenLight w-2 h-2 mt-1 rounded-full"></div>
                  <span>Industry Leading Success Rate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-greenLight w-2 h-2 mt-1 rounded-full"></div>
                  <span>Super Checkout Experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-greenLight w-2 h-2 mt-1 rounded-full"></div>
                  <span>Easy to integrate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-greenLight w-2 h-2 mt-1 rounded-full"></div>
                  <span>Instant Settlements from day 1</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-greenLight w-2 h-2 mt-1 rounded-full"></div>
                  <span>In-depth Reporting and Insights</span>
                </li>
              </ul>

              <div className="flex flex-row space-x-4">
                <button className="py-[14px] px-[18px] font-display rounded-md font-bold bg-lightBlue text-white transition-all duration-200 hover:bg-lightBlue500">Sign Up Now</button>
                <div className="py-[14px] px-[18px] font-display rounded-md font-bold bg-white border-[1px] border-lightGray text-lightBlue transition-all duration-200 hover:bg-lightGray hover:text-lightBlue500 ">
                  <a href="">Know More</a>
                </div>
              </div>
            </div>
            {/* content right */}
            <div className="items-center my-auto">
              <img src={featureImage} className="w-full" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 max-w-[1080px] mx-auto w-10/12 mt-[80px]">
         
            <div className="relative w-[300px] h-[140px] border-[1px] border-lightBlue p-[5px] overflow-hidden rounded-md  bg-white">
            <img src={image} alt="" className="absolute h-[50px] w-[50px] right-0 top-0 "/>
              <h3 className="font-bold font-display text-black text-xl">TITLE</h3>
              <p  className="font-display text-black text-[16px] w-[290px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A numquam quos fugit?</p>
              <div className="py-[10px] px-[14px] font-display rounded-md font-bold bg-white  text-lightBlue transition-all duration-200 hover:bg-lightGray hover:text-lightBlue500 ">
                  <a href="">Know More</a>
                </div>
            </div>

            <div className="relative w-[300px] h-[140px] border-[1px] border-lightBlue p-[5px] overflow-hidden rounded-md  bg-white">
            <img src={image} alt="" className="absolute h-[50px] w-[50px] right-0 top-0 "/>
              <h3 className="font-bold font-display text-black text-xl">TITLE</h3>
              <p  className="font-display text-black text-[16px] w-[290px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A numquam quos fugit?</p>
              <div className="py-[10px] px-[14px] font-display rounded-md font-bold bg-white  text-lightBlue transition-all duration-200 hover:bg-lightGray hover:text-lightBlue500 ">
                  <a href="">Know More</a>
                </div>
            </div>

            <div className="relative w-[300px] h-[140px] border-[1px] border-lightBlue p-[5px] overflow-hidden rounded-md  bg-white">
            <img src={image} alt="" className="absolute h-[50px] w-[50px] right-0 top-0 "/>
              <h3 className="font-bold font-display text-black text-xl">TITLE</h3>
              <p  className="font-display text-black text-[16px] w-[290px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A numquam quos fugit?</p>
              <div className="py-[10px] px-[14px] font-display rounded-md font-bold bg-white  text-lightBlue transition-all duration-200 hover:bg-lightGray hover:text-lightBlue500 ">
                  <a href="">Know More</a>
                </div>
            </div>

            <div className="relative w-[300px] h-[140px] border-[1px] border-lightBlue p-[5px] overflow-hidden rounded-md  bg-white">
            <img src={image} alt="" className="absolute h-[50px] w-[50px] right-0 top-0 "/>
              <h3 className="font-bold font-display text-black text-xl">TITLE</h3>
              <p  className="font-display text-black text-[16px] w-[290px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A numquam quos fugit?</p>
              <div className="py-[10px] px-[14px] font-display rounded-md font-bold bg-white  text-lightBlue transition-all duration-200 hover:bg-lightGray hover:text-lightBlue500 ">
                  <a href="">Know More</a>
                </div>
            </div>


            <div className="relative w-[300px] h-[140px] border-[1px] border-lightBlue p-[5px] overflow-hidden rounded-md  bg-white">
            <img src={image} alt="" className="absolute h-[50px] w-[50px] right-0 top-0 "/>
              <h3 className="font-bold font-display text-black text-xl">TITLE</h3>
              <p  className="font-display text-black text-[16px] w-[290px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A numquam quos fugit?</p>
              <div className="py-[10px] px-[14px] font-display rounded-md font-bold bg-white  text-lightBlue transition-all duration-200 hover:bg-lightGray hover:text-lightBlue500 ">
                  <a href="">Know More</a>
                </div>
            </div>

            <div className="relative w-[300px] h-[140px] border-[1px] border-lightBlue p-[5px] overflow-hidden rounded-md  bg-white">
            <img src={image} alt="" className="absolute h-[50px] w-[50px] right-0 top-0 "/>
              <h3 className="font-bold font-display text-black text-xl">TITLE</h3>
              <p  className="font-display text-black text-[16px] w-[290px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A numquam quos fugit?</p>
              <div className="py-[10px] px-[14px] font-display rounded-md font-bold bg-white  text-lightBlue transition-all duration-200 hover:bg-lightGray hover:text-lightBlue500 ">
                  <a href="">Know More</a>
                </div>
            </div>

          </div>
        
      </section>
    </>
  );
};

export default App;
