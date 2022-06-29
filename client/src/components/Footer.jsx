import logo from "./../../images/logo.png";

export default function Footer() {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="flex w-full sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 items-center justify-evenly flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Market
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Exchanges
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Tutorials
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Wallets
          </p>
        </div>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5"></div>
      <div className="sm:w-[90%] flex w-full justify-center items-center mt-3">
        <p className="text-white text-sm text-center">
          &copy; All rights reserved
        </p>
      </div>
    </div>
  );
}
