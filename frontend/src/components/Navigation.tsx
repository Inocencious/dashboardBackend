import dashboardIcon from "../assets/svg/grid-3.svg";
import walletIcon from "../assets/svg/wallet-money.svg";
import userIcon from "../assets/svg/user.svg";
import calendarIcon from "../assets/svg/calendar-2.svg";
import settingIcon from "../assets/svg/setting-2.svg";
import Logout from "./Logout";

const Navigation = () => {
  return (
    <>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-fit h-11 mt-2 rounded-full bg-gray-200 flex px-2 gap-4">
        <div className="my-auto">
          <div className="bg-white rounded-full p-1 ">
            <a>
              <img src={userIcon} />
            </a>
          </div>
        </div>

        <div className=" my-auto">
          <div className=" justify-evenly bg-white flex rounded-full gap-4 p-1 px-4">
            <a href="">
              <img src={dashboardIcon}></img>
            </a>
            <a href="">
              <img src={walletIcon}></img>
            </a>
            <a href="">
              <img src={calendarIcon}></img>
            </a>
            <a href="">
              <img src={settingIcon}></img>
            </a>
            <Logout></Logout>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
