
type ExperienceProps = {
  jabatan: string;
  range: string;
  nama_perusahaan: string;
  lokasi: string;
  desk: string;
};

export default function Experience({
  jabatan,
  range,
  nama_perusahaan,
  lokasi,
  desk,
}: ExperienceProps) {
  return (
    <div className="w-full py-4 sm:py-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="text-base font-bold text-white sm:text-lg">
          {jabatan}
        </h3>

        <span className="shrink-0 text-xs font-medium text-gray-400 sm:text-sm">
          {range}
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-400 sm:text-base">
        {nama_perusahaan} | {lokasi}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
        {desk}
      </p>
    </div>
  );
}
