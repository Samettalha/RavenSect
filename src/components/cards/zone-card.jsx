import Image from "next/image";

export default function ZoneCard({
  bgImage,
  iconSrc,
  title,
  description,
  playerCount,
  sessionTime,
  price,
  videoSrc,
  isRight,
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-0  p-5">
      <div
        className={`w-full flex flex-col md:flex-row ${
          isRight ? "md:flex-row-reverse" : "md:flex-row"
        } min-h-[770px]  text-white`}
      >
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div
            className={`relative w-full h-auto aspect-[16/9] ${
              isRight ? "items-end md:items-start " : ""
            }`}
          >
            <Image
              src={bgImage}
              alt="Dynamic Image"
              layout="responsive"
              width={893}
              height={769}
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>

        <div
          className={`w-full md:w-1/2 max-w-[650px] flex flex-col justify-center text-justify gap-5 ${
            isRight ? "items-end md:items-start" : ""
          }`}
        >
          <Image src={iconSrc} width={120} height={120} quality={100} />
          <div className="font-bold text-2xl mt-4">{title}</div>
          <p className="mt-2 text-sm">{description}</p>

          <div className="flex gap-6">
            <div className="flex flex-col items-center gap-2 justify-center">
              <Image
                quality={100}
                width={37}
                height={37}
                src="/images/user-count.png"
                alt="Player Count"
              />
              <p>
                <b>{playerCount}</b> Oyuncu
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 justify-center">
              <Image
                quality={100}
                width={37}
                height={37}
                src="/images/session-time.png"
                alt="Session Time"
              />
              <p>
                <b>{sessionTime}</b> Dk
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 justify-center">
              <Image
                quality={100}
                width={37}
                height={37}
                src="/images/price.png"
                alt="Price"
              />
              <p>
                <b>{price}</b> Puan/Kişi
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1286px] relative overflow-hidden rounded-xl aspect-[16/9]  md:-mt-32">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
