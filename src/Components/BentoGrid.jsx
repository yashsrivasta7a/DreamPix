import { cn } from "../lib/lib";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  image,
}) => { 
  console.log("Image URL:", image); 
  return (
    <div
      className={cn (
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-4 transition duration-600 ",
        className
      )}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <img src={image} alt="Bento Item" className="w-full h-full object-cover" />
      </div>

    </div>
  );
};
