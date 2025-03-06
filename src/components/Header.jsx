import { VscHome, VscBook, VscCodeOss, VscAccount } from "react-icons/vsc";
import Dock from "./Dock/Dock";
export const Header = () => {
  const currentDate = new Date().toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <VscCodeOss size={18} />,
      label: "Achievments",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <VscBook size={18} />,
      label: "Projects",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Contact",
      onClick: () => alert("Settings!"),
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex justify-between items-center py-5 px-20 mb-10 ">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={60}
      />
      <h1 className="font-extrabold text-7xl ">aixy.</h1>
      <p>Banjar, {currentDate}</p>
    </div>
  );
};
