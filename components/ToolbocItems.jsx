import { twMerge } from "tailwind-merge";
import TechIcon from "./TechIcon";

export default function ToolbocItems({
  items,
  className,
  itemWrapperClassName,
}) {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6 ",
          itemWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <div key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 mx-3 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                {/* Pass the correct component (item.icon) to the TechIcon */}
                <TechIcon component={item.icon} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
