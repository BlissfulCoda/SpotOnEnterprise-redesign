import { createContext, useState } from "react";
import { DarkModeDataInterface } from "../Data/DarkModeData";

interface DarkModeContextInterface {
  children: React.ReactNode;
}

const DarkModeContext = createContext<DarkModeDataInterface | null>(null);

export function DarkModeProvider({ children }: DarkModeContextInterface): JSX.Element {

  // DarkMode state
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Toggle Light / Dark Logo
  const [toggleLogo, SetToggleLogo] = useState<boolean>(false);
  const [gif, SetGif] = useState<boolean>(false);

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
        darkMode,
        toggleLogo,
        gif,
        toggleDarkMode,
        handleLogo,
        toggleGif,
        handleChange,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContext;
