export const Articles = ({ gambar, judul, deskripsi, link, ket }) => {
  return (
    <div className="px-10 py-10 md:px-20 md:py-20 ">
      <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4 ">
        <div className="aspect-square w-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={gambar}
            alt="product"
          />
        </div>
        <div>
          <p className="text-lg">{judul}</p>
          <p className="font-light text-sm mb-2  text-gray-400">{deskripsi}</p>
          <a
            className="relative py-1 px-2 text-white font-medium rounded-full border border-gray-600 bg-black transition-all duration-300 
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rounded-full before:opacity-0 
      before:transition-opacity before:duration-300 hover:before:opacity-100"
            href={link}
            target="_blank"
          >
            {ket}
          </a>
        </div>
      </div>
    </div>
  );
};
