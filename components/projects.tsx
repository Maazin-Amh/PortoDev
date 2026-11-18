type ProjectProps = {
  title: string;
  description: string;
  link: string;
  bahasa: string[];
};

export default function Project({
  title,
  description,
  link,
  bahasa,
}: ProjectProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block h-full overflow-hidden border border-white/10 transition hover:border-maroon"
    >
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg font-bold sm:text-xl">{title}</h3>

        <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {bahasa.map((item, index) => (
            <span
              key={index}
              className="border border-white/10 px-2 py-2 text-[10px] text-gray-300 sm:px-3 sm:text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
