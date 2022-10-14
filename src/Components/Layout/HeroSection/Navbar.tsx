import DarkLogo from "../../assets/Logos/DarkLogo.png";

export default function Navbarr(): JSX.Element {
  return (
    <div className="flex justify-between ">
      <img
        src={DarkLogo}
        alt="SpotOnEnterprise logo"
        style={{ width: "147px", height: "38px", display: "inline-block" }}
      />
     
    </div>
  );
}
