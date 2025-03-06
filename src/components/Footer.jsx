export const Footer = () => {
  return (
    <div className=" py-10 px-4 flex flex-col md:flex-row justify-center gap-10">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 mb-3">
          {/* Icon Telepon */}
          <img src="/phone-icon.svg" alt="Phone" />
        </div>
        <p className="text-lg font-semibold">+82 543 6544</p>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
          tellus.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 mb-3">
          {/* Icon Email */}
          <img src="/email-icon.svg" alt="Email" />
        </div>
        <p className="text-lg font-semibold">mail@grance.co</p>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
          tellus.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 mb-3">
          {/* Icon Lokasi */}
          <img src="/location-icon.svg" alt="Location" />
        </div>
        <p className="text-lg font-semibold">London Eye, UK</p>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
          tellus.
        </p>
      </div>
    </div>
  );
};
