import { useContext } from "react";
import { DarkModeDataInterface } from "../../../Data/DarkModeData";
import DarkModeContext from "../../../Context/DarkModeContext";

import { SpotOnEntepriseGifsAndLogos } from "../../../Data/ComponentData";

export default function Loader(): JSX.Element {
  const { theme } = useContext(DarkModeContext) as DarkModeDataInterface;

  const { DarkLogo, LightLogo } = SpotOnEntepriseGifsAndLogos;

  return (
    <section>
      <div className="flex items-center justify-center min-h-screen mx-auto duration-500 bg-white dark:bg-darkMode">
        <img
          src={theme ? DarkLogo : LightLogo}
          className="h-12 w-44 brightness-150 contrast-200 change-transitions animate-loader"
          alt="SpotOnEnterprise Logo"
        />
      </div>
    </section>
  );
}
