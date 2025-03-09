export const Footer = ({ icon, nama, deskripsi, ket }) => {
  return (
    <div className="flex flex-col items-center text-center border">
      <div className="w-12 h-12 mb-3">
        <img src={icon} alt={ket} />
      </div>
      <p className="text-lg font-semibold">{nama}</p>
      <p className="text-sm text-gray-400">{deskripsi}</p>
    </div>
  );
};
