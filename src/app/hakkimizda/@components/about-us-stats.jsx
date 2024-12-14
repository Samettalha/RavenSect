import Image from "next/image";

export default function AboutUsStats() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col xl:flex-row w-full max-w-[1500px] px-2">
        <div className="w-full xl:w-1/2">
          <div className="w-full px-5">
            <Image
              src={"/images/yazılım1.jpeg"}
              layout="responsive"
              alt="Game Image"
              width={732}
              height={447}
            />
          </div>
          <div className="flex justify-end w-full  -mt-10">
            <div className="w-3/5 py-5 sm:py-16 xl:-mr-80 xl:-mt-20 xl:w-4/5 bg-black flex items-center justify-around text-white">
              <div>
                <div className="text-[7px] text-center sm:text-base font-light">
                  çalışan sayısı
                </div>
                <div className="text-3xl sm:text-7xl text-center font-semibold mt-2 sm:mt-4">
                0
                </div>
              </div>
              <div>
                <div className="text-[7px] text-center sm:text-base font-light">
                  kaynak sayısı 
                </div>
                <div className="text-3xl sm:text-7xl text-center font-semibold mt-2 sm:mt-4">
                 0
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 flex flex-col text-center sm:text-left items-center sm:items-start justify-center xl:justify-start gap-5 mt-10 text-white px-5">
          <p className="text-2xl xl:max-w-[400px]">
            Geleceğin mühendis Anlayışını{" "}
            <span className="font-medium"> Bugüne Taşıyan</span>
          </p>
          <p className="xl:max-w-[530px]">
            Teknolojiyle harmanlanmış mühendislik uygulamaları bü günlerde tek bir çatı altında toplanıyor. 
          </p>
        </div>
      </div>
    </div>
  );
}
