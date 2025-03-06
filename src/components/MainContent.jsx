import Lanyard from "./Lanyard/Lanyard";

export const MainContent = () => {
  return (
    <div className="border-2 rounded-2xl mr-20 ml-20">
      <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
    </div>
  );
};
