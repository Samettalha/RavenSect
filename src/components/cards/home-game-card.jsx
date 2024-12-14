import Image from "next/image";
import Link from "next/link";

const GameCard = ({ imageSrc, iconSrc, buttonTitle, buttonHref, children }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:h-[590px] rounded-xl bg-black text-white overflow-hidden">
      {/* Parent container with defined height */}
      <div className="w-full min-h-[400px] sm:w-1/2 relative h-full rounded-xl sm:rounded-l-xl sm:rounded-r-none overflow-hidden">
        <Image
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          alt="Game Image"
        />
      </div>

      <div className="w-full sm:w-1/2 flex flex-col justify-center gap-5 p-5 sm:p-10 rounded-xl sm:rounded-r-xl sm:rounded-l-none bg-black">
        {/* Game Icon with constant width and height */}
        <div className="w-[175px] h-[175px] relative">
          <Image
            src={iconSrc}
            layout="fill"
            objectFit="contain"
            alt="Game Icon"
          />
        </div>
        <div className="flex flex-col text-left gap-3">{children}</div>
        <Link href={buttonHref} passHref>
          <div
            className="rounded-[40px] max-w-[200px] px-5 py-3 text-center"
            style={{
              background:
                "linear-gradient(225deg, #FBB040 14.89%, #F15A29 85.85%)",
            }}
          >
            <p className="font-semibold text-sm text-white">{buttonTitle}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
