import Image from "next/image";

export default function SwiperSmallCard({
  imageSrc,
  children,
  reverse = false,
  fullImage = false, // New prop with default value
}) {
  return (
    <div
      className={`w-full px-1 sm:px-2 flex ${
        reverse ? "flex-col-reverse" : "flex-col"
      } items-center justify-center gap-5 h-full`}
    >
      {fullImage ? (
        // If fullImage is true, render only the image covering full width and height
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt="Dynamic Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : (
        <>
          {/* Normal layout when fullImage is false */}
          <div className="relative w-full h-1/2">
            <Image
              src={imageSrc}
              alt="Dynamic Image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="h-1/2 flex items-center rounded-xl bg-[#19161C] w-full justify-center">
            {children}
          </div>
        </>
      )}
    </div>
  );
}
