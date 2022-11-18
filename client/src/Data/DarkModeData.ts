export interface DarkModeDataInterface {
  theme: boolean;
  checked: boolean;
  gif: boolean;
  handleMenu: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNavRemove: (event: React.MouseEvent<HTMLElement>) => void;
  handleLogo: () => void;
  toggleGif: () => void;
  handleChange: () => void;
}
