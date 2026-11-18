/* eslint-disable @next/next/no-img-element */

type SkillProps = {
  name: string;
  icon?: string;
};

export default function Skill({ name, icon }: SkillProps) {
  return (
    <div className="flex min-w-0 items-center gap-3 border border-white/20 p-3 transition hover:border-maroon sm:gap-4 sm:p-5">
      {icon && (
        <img
          src={icon}
          alt={name}
          className="h-6 w-6 shrink-0 object-contain sm:h-8 sm:w-8"
        />
      )}

      <span className="text-xs font-medium sm:text-sm md:text-base">
        {name}
      </span>
    </div>
  );
}
