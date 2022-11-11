import { createContext, useState } from "react";
import { DarkModeDataInterface } from "../Data/DarkModeData";

interface DarkModeContextInterface {
  children: React.ReactNode;
}

const DarkModeContext = createContext<DarkModeDataInterface | null>(null);

export function DarkModeProvider({ children }: DarkModeContextInterface): JSX.Element {

  // HamburgeMenu
  const [checked, setChecked] = useState<boolean>(false);

  // DarkMode state
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Toggle Light / Dark Logo
  const [toggleLogo, SetToggleLogo] = useState<boolean>(false);
  const [gif, SetGif] = useState<boolean>(false);

  // Handle Nav Menu
  const handleMenu = (e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked);


  // DarkMode Toggle
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Change Logo
  const handleLogo = () => SetToggleLogo(!toggleLogo);

  // Change Gif
  const toggleGif = () => SetGif(!gif);

  // Change Gif, Logo, DarkMode
  const handleChange = () => {
    toggleDarkMode();
    toggleGif();
    handleLogo();
  };

  return (
    <DarkModeContext.Provider
      value={{
        checked,
        darkMode,
        toggleLogo,
        gif,
        toggleDarkMode,
        handleLogo,
        handleMenu,
        toggleGif,
        handleChange,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContext;
