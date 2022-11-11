export interface DarkModeDataInterface {
  darkMode: boolean;
  toggleLogo: boolean;
  checked: boolean;
  gif: boolean;
  handleMenu: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogo: () => void;
  toggleGif: () => void;
  handleChange: () => void;
  toggleDarkMode: () => void;
}
