import { createContext, useState, useEffect } from "react";
import { DarkModeDataInterface } from "../Data/DarkModeData";

interface DarkModeContextInterface {
  children: React.ReactNode;
}

const DarkModeContext = createContext<DarkModeDataInterface | null>(null);

export function DarkModeProvider({
  children,
}: DarkModeContextInterface): JSX.Element {
  const root: HTMLElement = document.documentElement;

  // HamburgeMenu
  const [checked, setChecked] = useState<boolean>(false);

  // DarkMode state
  const [theme, setTheme] = useState<boolean>(false);

  const [flag, setFlag] = useState(false);

  // Toggle Light / Dark Logo
  const [toggleLogo, SetToggleLogo] = useState<boolean>(false);

  // Toggle Light / Dark Gifs
  const [gif, SetGif] = useState<boolean>(false);

  // Handle Nav Menu
  const handleMenu = (e: React.ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked);

  // Remove Nav
  const handleNavRemove = (e: React.MouseEvent<HTMLElement>) => {
    setChecked(false);
  };

  // Change Logo
  const handleLogo = () => SetToggleLogo(!toggleLogo);

  // Change Gif
  const toggleGif = () => SetGif(!gif);

  // GET THEM FROM LOCALSTORAGE ON PAGE LOAD
  useEffect(() => {
    const preference = localStorage.getItem("theme");
    if (preference) {
      setTheme(JSON.parse(preference));
    }
    setFlag(true);
  }, []);

  // SAVE THEM IN LOCAL STORAGE
  useEffect(() => {
    if (flag) {
      localStorage.setItem("theme", JSON.stringify(theme));
      root.classList.toggle("dark", theme);
    } 
  }, [theme, flag]);

  // Change Gif, Logo, DarkMode
  const handleChange = () => {
    if (!theme) {
      root.classList.add("dark");
      setTheme(true);
      SetGif(true)
    } else {
      root.classList.remove("dark");
      setTheme(false);
      SetGif(false);
    }
  };

  return (
    <DarkModeContext.Provider
      value={{
        checked,
        theme,
        gif,
        handleLogo,
        handleMenu,
        toggleGif,
        handleChange,
        handleNavRemove,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContext;
