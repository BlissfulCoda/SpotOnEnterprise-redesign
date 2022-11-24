import { useContext } from "react";
import { DarkModeDataInterface } from "../../../Data/DarkModeData";
import DarkModeContext from "../../../Context/DarkModeContext";

import Open from "./Open";
import Closed from "./Closed";

export default function HamburgeMenu(): JSX.Element {
  const { checked, handleMenu } = useContext(
    DarkModeContext
  ) as DarkModeDataInterface;

  return (
    <label className="bg-gradient-to-r from-[#E34CCE] to-[#E39B57] border-none top-6 right-0 z-30 text-white btn btn-circle swap swap-rotate sm:right-16 tablet:right-24 laptop:hidden shadow drop-shadow-xl absolute cursor-pointer ">
      
      <input type="checkbox" onChange={handleMenu} checked={checked} />
      <svg
        className={
          checked
            ? "fill-current swap-on duration-1000"
            : "fill-current swap-off duration-1000"
        }
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        {checked ? <Open /> : <Closed />}
      </svg>
    </label>
  );
}
