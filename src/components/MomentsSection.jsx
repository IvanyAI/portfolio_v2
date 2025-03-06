import Masonry from "./Masonry/Masonry";
export const MomenSection = () => {
  const data = [
    { id: 1, image: "/assets/images/2.jpg", height: 400 },
    { id: 2, image: "/assets/images/3.jpg", height: 300 },
    { id: 3, image: "/assets/images/5.jpg", height: 400 },
    { id: 4, image: "/assets/images/7.jpg", height: 500 },
    { id: 5, image: "/assets/images/11.jpg", height: 400 },
    { id: 6, image: "/assets/images/12.jpg", height: 300 },
    { id: 7, image: "/assets/images/13.jpg", height: 400 },
    { id: 8, image: "/assets/images/sertifexcell.jpg", height: 400 },
    { id: 9, image: "/assets/images/16.jpg", height: 400 },
  ];
  return (
    <div className="px-10 py-10 md:px-20 md:py-20 overflow-hidden">
      <h1 className="font-extrabold text-7xl ">Moments and Achievments</h1>
      <Masonry data={data} />
    </div>
  );
};
